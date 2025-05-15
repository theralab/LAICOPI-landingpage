import Image from "next/image"
import { Button } from "@/components/ui/button"
import TeamMemberCard from "@/components/ui/team-member-card"
import { teamMembers } from "@/data/team"

export default function TeamSection() {
  return (
    <section id="equipe" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Nossa Equipe</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Conheça os pesquisadores e estudantes que fazem parte do nosso laboratório.
            </p>
          </div>
        </div>

        {/* Professor Coordenador */}
        <div className="mx-auto max-w-3xl mt-12">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="relative h-40 w-40 rounded-full overflow-hidden">
              <Image
                src="https://placehold.co/160x160"
                width={160}
                height={160}
                alt="Professor Coordenador"
                className="object-cover"
              />
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-bold">Prof. Dr. José Pinheiro</h3>
              <p className="text-muted-foreground">Coordenador do Laboratório</p>
              <p className="max-w-[500px] text-muted-foreground">
                Doutor em Engenharia Elétrica com ênfase em Controle e Automação. Possui mais de 15 anos de experiência
                em projetos industriais e acadêmicos.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="outline" size="sm">
                Currículo Lattes
              </Button>
              <Button variant="outline" size="sm">
                Publicações
              </Button>
            </div>
          </div>
        </div>

        {/* Equipe de Pesquisadores */}
        <h3 className="text-2xl font-bold text-center mt-16 mb-8">Pesquisadores e Estudantes</h3>
        <div className="grid gap-8 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {teamMembers.map((member) => (
            <TeamMemberCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </section>
  )
}
