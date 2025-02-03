import { ReactNode } from "react";
import { NextRequest } from "next/server";
import { Resend } from "resend"
import axios from "axios"
import { InfoTemplate } from "./templates/info-template";
import { CustomerTemplate } from "./templates/customer-template";

const NO_REPLY_EMAIL = 'LATE <no-responder@late.uy>'
const INFO_EMAIL = 'LATE <info@late.uy>'

const resend = new Resend(process.env.RESEND_TOKEN as string)

export async function POST(req: NextRequest) {
    const response = {
        ok: false,
        message: ''
    }
    
    const ipAddress = (req.headers.get('x-forwarded-for') ?? '127.0.0.1').split(',')[0]

    const formData = await req.formData()
    const name = formData.get('name') as string
    const email = formData.get('email') as string
    const message = formData.get('message') as string
    const recaptchaToken = formData.get('recaptcha_token') as string

    try {
        const { scoreValid, errorMessage } = await validateReCaptcha(recaptchaToken)
        if (!scoreValid) {
            throw new Error(errorMessage)
        }

        const { error: infoError } = await resend.emails.send({
            from: NO_REPLY_EMAIL,
            to: [INFO_EMAIL],
            subject: 'Formulario de contacto',
            react: InfoTemplate({
                name,
                email,
                message,
                ipAddress
            }) as ReactNode
        })

        if (infoError) {
            throw new Error(infoError.message)
        }

        const { error: customerError } = await resend.emails.send({
            from: NO_REPLY_EMAIL,
            to: [email],
            subject: 'Gracias por contactarte con nosotros',
            react: CustomerTemplate({
                name,
            }) as ReactNode
        })

        if (customerError) {
            throw new Error(customerError.message)
        }

        response.ok = true
        response.message = 'Mensaje enviado'
    } catch (err) {
        if (err instanceof Error) {
            console.error('Mensaje no enviado: ', err.message)
            response.message = err.message
        }
    } finally {
        return Response.json(response)
    }
}

async function validateReCaptcha(token: string) {
    const response = {
        scoreValid: false,
        errorMessage: ''
    }

    const siteVerifyURL = 'https://www.google.com/recaptcha/api/siteverify'
    const reCaptchaSecretKey = process.env.NEXT_PUBLIC_RECAPTCHA_KEY_SECRET as string
    const formData = `secret=${reCaptchaSecretKey}&response=${token}`

    try {
        const res = await axios.post(
            siteVerifyURL,
            formData,
            {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                }
            }
        )

        if (!res?.data?.success) {
            throw new Error('Error al verificar el token')
        } 
        
        const score = res.data?.score
        if (score <= 0.5) {
            // Robot
            throw new Error('Tu comportamiento no es suficientemente humano, pero agradecemos tu visita.')
        }

        response.scoreValid = true
    } catch (err) {
        if (err instanceof Error) {
            response.errorMessage = err.message
        }
    } finally {
        return response
    }
}