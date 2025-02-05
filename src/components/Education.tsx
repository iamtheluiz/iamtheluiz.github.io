export function Education() {
  return (
    <section id="education" className="container max-w-5xl mx-auto py-6 md:py-8 lg:py-10">
      <h2 className="font-bold text-3xl md:text-5xl mb-12">Formação Acadêmica</h2>
      <div className="relative pl-6 after:absolute after:inset-y-0 after:left-0 after:w-px after:bg-gray-500/20 dark:after:bg-gray-400/20 grid gap-10">
        <div className="grid gap-1 relative">
          <div className="aspect-square w-3 bg-gray-900 rounded-full absolute left-0 translate-x-[-29.5px] z-10 top-2 dark:bg-gray-50">
          </div>
          <h4 className="text-xl font-medium">Bacharelado em Engenharia da Computação</h4>
          <h5 className="font-medium">Universidade São Judas Tadeu</h5>
          <div className="text-gray-500 dark:text-gray-400">Janeiro de 2019 - Dezembro de 2023
          </div>
          <ul className="text-gray-500 text-sm list-disc pl-4">
            <li>Bolsista integral pelo programa 100% Universitário, obtida com base em excelência no desempenho do vestibular de ingresso</li>
            <li>Representante de turma em 2021, atuando como intermediário entre alunos e corpo docente para solucionar demandas acadêmicas e fortalecer a comunicação institucional</li>
            <li>Média global: 94,78 / 100</li>
          </ul>
        </div>
        <div className="grid gap-1 relative">
          <div className="aspect-square w-3 bg-gray-900 rounded-full absolute left-0 translate-x-[-29.5px] z-10 top-2 dark:bg-gray-50">
          </div>
          <h4 className="text-xl font-medium">Técnico em Informática para Internet</h4>
          <h5 className="font-medium">ETEC - Centro Paula Souza</h5>
          <div className="text-gray-500 dark:text-gray-400">Janeiro de 2016 - Dezembro de 2018
          </div>
          <ul className="text-gray-500 text-sm list-disc pl-4">
            <li>Desenvolvimento de sistemas web com PHP, JavaScript, HTML e CSS</li>
            <li>Lógica de programação e análise de sistemas</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
