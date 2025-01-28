import { NextRequest } from "next/server";
import { Resend } from "resend"

export async function POST(req: NextRequest) {
    const response = {
        ok: false,
        message: ''
    }

    const formData = await req.formData()
    const name = formData.get('name')
    const email = formData.get('email')
    const message = formData.get('message')

    const date = new Date()

    try {
        const resend = new Resend(process.env.RESEND_TOKEN as string)
        await resend.emails.send({
            from: 'no-responder@laso.uy',
            to: 'info@laso.uy',
            subject: 'Formulario de Contacto',
            html: `
                <h2>Formulario de contacto - ${date.toLocaleDateString()}</h2>
                <p>Nombre: ${name}</p>
                <p>Correo electrónico: <a href="mailto:${email}">${email}</a></p>
                <p>Mensaje:</p>
                <p>${message}</p>
                
            `
        })

        await resend.emails.send({
            from: 'LASO <no-responder@laso.uy>',
            to: email as string,
            subject: 'Gracias por contactarte con nosotros',
            html: `
                <p>Hola, ${name}.</p>
                <p>Gracias por comunicarte con nosotros, recibimos tu mensaje.</p>
                <br />
                <p>A la brevedad nos pondremos en contacto contigo.</p>
                <br />
                <p>Saludos</p>
                <p><a href="https://laso.uy/>LASO</a></p>
            `
        })

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