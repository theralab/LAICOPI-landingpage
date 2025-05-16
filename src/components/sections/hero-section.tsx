import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-muted/50 to-muted">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_500px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Laboratório de Automação Inteligente e Controle de Processos Industriais
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Desenvolvendo soluções inovadoras para os desafios da indústria moderna através da pesquisa acadêmica
                aplicada.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="#projetos">
                <Button>
                  Conheça nossos projetos
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="#contato">
                <Button variant="outline">Entre em contato</Button>
              </Link>
            </div>
          </div>
          <div className="mx-auto w-full max-w-[400px] lg:max-w-none lg:mx-0">
            <Image
              src="https://placehold.co/550x550"
              width={550}
              height={550}
              alt="Laboratório de Automação"
              className="aspect-video overflow-hidden rounded-xl object-cover w-full"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
