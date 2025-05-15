import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Cpu, Cog } from "lucide-react"

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b bg-background">
      <div className="container mx-auto flex h-16 items-center justify-between py-4 px-4 md:px-6 max-w-7xl">
        <div className="flex items-center gap-2">
          <Cpu className="h-6 w-6" />
          <span className="text-xl font-bold">LabAutoControl</span>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="#sobre" className="text-sm font-medium transition-colors hover:text-primary">
            Sobre
          </Link>
          <Link href="#projetos" className="text-sm font-medium transition-colors hover:text-primary">
            Projetos
          </Link>
          <Link href="#equipe" className="text-sm font-medium transition-colors hover:text-primary">
            Equipe
          </Link>
          <Link href="#contato" className="text-sm font-medium transition-colors hover:text-primary">
            Contato
          </Link>
        </nav>
        <Button variant="outline" size="sm" className="hidden md:flex">
          Área Restrita
        </Button>
        <Button variant="outline" size="sm" className="md:hidden">
          <Cog className="h-5 w-5" />
          <span className="sr-only">Menu</span>
        </Button>
      </div>
    </header>
  )
}
