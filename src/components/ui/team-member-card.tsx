import Image from "next/image"

interface TeamMemberCardProps {
  member: {
    id: string
    name: string
    role: string
    specialty: string
    image: string
  }
}

export default function TeamMemberCard({ member }: TeamMemberCardProps) {
  const { name, role, specialty, image } = member

  return (
    <div className="flex flex-col items-center space-y-2 text-center">
      <div className="relative h-24 w-24 rounded-full overflow-hidden">
        <Image src={image || "/placeholder.svg"} width={96} height={96} alt={name} className="object-cover" />
      </div>
      <div>
        <h4 className="font-bold">{name}</h4>
        <p className="text-sm text-muted-foreground">{role}</p>
        <p className="text-sm text-muted-foreground">{specialty}</p>
      </div>
    </div>
  )
}
