import Link from "next/link"
import { Cpu, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0 px-4 md:px-6 max-w-7xl">
        <div className="flex items-center gap-2">
          <Cpu className="h-6 w-6" />
          <span className="text-lg font-bold">LAICOPI</span>
        </div>
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-6 md:px-0">
          <Link href="#sobre" className="text-sm font-medium hover:underline underline-offset-4">
            Sobre
          </Link>
          <Link href="#projetos" className="text-sm font-medium hover:underline underline-offset-4">
            Projetos
          </Link>
          <Link href="#equipe" className="text-sm font-medium hover:underline underline-offset-4">
            Equipe
          </Link>
          <Link href="#contato" className="text-sm font-medium hover:underline underline-offset-4">
            Contato
          </Link>
        </div>
        <div className="flex flex-col items-center md:items-end gap-2">
          <p className="text-center text-sm text-muted-foreground md:text-right">
            &copy; {new Date().getFullYear()} LAICOPI. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <span>Desenvolvido por Thera</span>
            <Link
              href="https://linkedin.com/in/thera"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80"
            >
              <Linkedin className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
