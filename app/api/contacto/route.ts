import { NextRequest } from "next/server";
import { Resend } from "resend"
import { InfoTemplate } from "./templates/info-template";
import { CustomerTemplate } from "./templates/customer-template";
import { ReactNode } from "react";

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

    try {
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