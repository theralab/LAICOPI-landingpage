import Image from "next/image"
import { FlaskConical, GraduationCap, Microscope } from "lucide-react"

export default function AboutSection() {
  return (
    <section id="sobre" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Sobre o Laboratório</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Nosso laboratório é dedicado à pesquisa e desenvolvimento de soluções inovadoras em automação e controle
              de processos industriais.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
          <Image
            src="/placeholder.svg?height=400&width=500"
            width={500}
            height={400}
            alt="Equipamentos do laboratório"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
          />
          <div className="flex flex-col justify-center space-y-4">
            <ul className="grid gap-6">
              <li>
                <div className="grid gap-1">
                  <div className="flex items-center gap-2">
                    <FlaskConical className="h-5 w-5 text-primary" />
                    <h3 className="text-xl font-bold">Pesquisa Aplicada</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Desenvolvemos pesquisas aplicadas em parceria com a indústria, buscando soluções para problemas
                    reais.
                  </p>
                </div>
              </li>
              <li>
                <div className="grid gap-1">
                  <div className="flex items-center gap-2">
                    <GraduationCap className="h-5 w-5 text-primary" />
                    <h3 className="text-xl font-bold">Formação Acadêmica</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Formamos profissionais qualificados através de projetos de iniciação científica, mestrado e
                    doutorado.
                  </p>
                </div>
              </li>
              <li>
                <div className="grid gap-1">
                  <div className="flex items-center gap-2">
                    <Microscope className="h-5 w-5 text-primary" />
                    <h3 className="text-xl font-bold">Áreas de Atuação</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Sistemas de controle avançado, automação industrial, instrumentação, IoT industrial e Indústria 4.0.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
