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
            from: 'contacto@laso.uy',
            to: 'maramal@outlook.com',
            subject: 'Formulario de Contacto',
            html: `
                <h2>Formulario de contacto - ${date.toLocaleDateString()}</h2>
                <p>Nombre: ${name}</p>
                <p>Correo electrónico: <a href="mailto:${email}</p>
                <p>Mensaje:</p>
                <p>${message}</p>
                
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