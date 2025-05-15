export default function ContactInfo() {
  return (
    <div className="flex flex-col gap-2">
      <h3 className="text-xl font-bold">Informações de Contato</h3>
      <div className="grid gap-4">
        <div className="flex items-start gap-2">
          <div className="rounded-full bg-primary/10 p-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4 text-primary"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
          </div>
          <div className="text-sm">
            <p className="font-medium">Telefone</p>
            <p className="text-muted-foreground">(98) 4002-8922</p>
          </div>
        </div>
        <div className="flex items-start gap-2">
          <div className="rounded-full bg-primary/10 p-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4 text-primary"
            >
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
          </div>
          <div className="text-sm">
            <p className="font-medium">Email</p>
            <p className="text-muted-foreground">contato@laicopi.edu.br</p>
          </div>
        </div>
        <div className="flex items-start gap-2">
          <div className="rounded-full bg-primary/10 p-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4 text-primary"
            >
              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
          </div>
          <div className="text-sm">
            <p className="font-medium">Endereço</p>
            <p className="text-muted-foreground">
              Centro de Ciência e Tecnologia
              <br />
              Universidade Estadual do Maranhão
              <br />
              Cidade Universitária Paulo VI, Av. Lourenço Vieira da Silva, n.°1000
              <br />
              CEP: 65055-310
            </p>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <h3 className="text-xl font-bold mb-2">Horário de Funcionamento</h3>
        <p className="text-sm text-muted-foreground">
          Segunda a Sexta: 8h às 18h
          <br />
          Sábados: 8h às 12h (mediante agendamento)
        </p>
      </div>
    </div>
  )
}
