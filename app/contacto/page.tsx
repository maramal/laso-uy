import { Suspense } from "react";
import ContactForm from "./contact-form";
import { ReCaptchaProvider } from "next-recaptcha-v3"

export default function ContactUsPage() {
    return (
        <Suspense>
            <ReCaptchaProvider>
                <ContactForm />
            </ReCaptchaProvider>
        </Suspense>
    )
}