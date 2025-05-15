import { Rocket, Clock } from "lucide-react"

interface ProjectCardProps {
  project: {
    id: string
    title: string
    description: string
    status: "completed" | "in-progress"
    icon: "rocket" | "clock"
    tags: string[]
  }
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const { title, description, status, icon, tags } = project

  return (
    <div className="group relative overflow-hidden rounded-lg border bg-background p-6 shadow-sm transition-all hover:shadow-md">
      <div className="absolute right-4 top-4 z-10">
        <div
          className={`rounded-full px-2 py-1 text-xs font-medium ${
            status === "completed" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
          }`}
        >
          {status === "completed" ? "Concluído" : "Em andamento"}
        </div>
      </div>
      <div className="flex flex-col space-y-4">
        <div className="flex items-start gap-2">
          <div className="mt-1 flex-shrink-0">
            {icon === "rocket" ? (
              <Rocket className="h-5 w-5 text-primary" />
            ) : (
              <Clock className="h-5 w-5 text-primary" />
            )}
          </div>
          <h3 className="text-xl font-bold break-words pr-20">{title}</h3>
        </div>
        <p className="text-muted-foreground">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span key={index} className="rounded-full bg-muted px-2 py-1 text-xs">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
