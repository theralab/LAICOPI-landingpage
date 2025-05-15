import ContactInfo from "@/components/ui/contact-info"
import ContactForm from "@/components/ui/contact-form"

export default function ContactSection() {
  return (
    <section id="contato" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Entre em Contato</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Interessado em colaborar ou saber mais sobre nossos projetos? Entre em contato conosco.
            </p>
          </div>
        </div>

        <div className="mx-auto grid max-w-4xl gap-6 py-12 lg:grid-cols-2">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </section>
  )
}
