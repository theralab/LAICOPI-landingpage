import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Cpu, Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b bg-background">
      <div className="container mx-auto flex h-16 items-center justify-between py-4 px-4 md:px-6 max-w-7xl">
        <div className="flex items-center gap-2">
          <Cpu className="h-6 w-6" />
          <span className="text-xl font-bold">LAICOPI</span>
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
        {/* <Button variant="outline" size="sm" className="hidden md:flex">
          Área Restrita
        </Button> */}

        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="sm" className="md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[250px] sm:w-[300px]">
            <SheetTitle>Menu de Navegação</SheetTitle>
            <div className="flex flex-col gap-6 mt-8">
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
              {/* <Button variant="outline" size="sm" className="mt-4">
                Área Restrita
              </Button> */}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}