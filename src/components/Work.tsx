export function Work() {
  return (
    <section id="experience" className="container max-w-5xl mx-auto py-6 md:py-8 lg:py-10">
      <h2 className="font-bold text-3xl md:text-5xl mb-12">Experiência Profissional</h2>
      <div className="relative pl-6 after:absolute after:inset-y-0 after:left-0 after:w-px after:bg-gray-500/20 dark:after:bg-gray-400/20 grid gap-10">
        <div className="grid gap-1 relative">
          <div className="aspect-square w-3 bg-gray-900 rounded-full absolute left-0 translate-x-[-29.5px] z-10 top-2 dark:bg-gray-50">
          </div>
          <h4 className="text-xl font-medium">Analista de Frontend -
            <a target="_blank" className="ml-2 text-cyan-700" href="https://www.totvs.com/">TOTVS</a>
          </h4>
          <div className="text-gray-500 dark:text-gray-400">Março de 2025 - Atualmente
          </div>
          <div className="mt-2">
            <h6 className="font-medium">Responsabilidades Principais:</h6>
            <ul className="text-gray-500 text-sm list-disc pl-4">
              <li>Desenvolvimento e manutenção da biblioteca open source <a target="_blank" className="text-cyan-700" href="https://po-ui.io/">PO-UI</a></li>
              <li>Crio testes unitários e end-to-end para garantia da entrega e realização de testes de regressão</li>
            </ul>
          </div>
        </div>
        <div className="grid gap-1 relative">
          <div className="aspect-square w-3 bg-gray-900 rounded-full absolute left-0 translate-x-[-29.5px] z-10 top-2 dark:bg-gray-50">
          </div>
          <h4 className="text-xl font-medium">Desenvolvedor Full Stack -
            <a target="_blank" className="ml-2 text-cyan-700" href="https://konia.com.br/">Konia Tecnologia</a>
          </h4>
          <div className="text-gray-500 dark:text-gray-400">Janeiro de 2023 - Janeiro de 2024
          </div>
          <div className="mt-2">
            <h6 className="font-medium">Responsabilidades Principais:</h6>
            <ul className="text-gray-500 text-sm list-disc pl-4">
              <li>Realizei o desenvolvimento de SPA’s usando React e TypeScript</li>
              <li>Implementei telas e componentes baseado em Mockups para um sistema de entregas</li>
              <li>Efetuei a sustentação de aplicativos para dispositivos móveis com React Native</li>
              <li>Criei e corrigi processos de CI/CD no Azure DevOps para aplicações React e Angular</li>
              <li>Conduzi a criação de um projeto com Inteligência Articial para análise de documentos com React, C#/ASP.NET, Azure OpenAI Services e Azure Cognitive Search</li>
            </ul>
          </div>
        </div>
        <div className="grid gap-1 relative">
          <div className="aspect-square w-3 bg-gray-900 rounded-full absolute left-0 translate-x-[-29.5px] z-10 top-2 dark:bg-gray-50">
          </div>
          <h4 className="text-xl font-medium">DevOps -
            <a target="_blank" className="ml-2 text-cyan-700" href="https://konia.com.br/">Konia Tecnologia</a>
          </h4>
          <div className="text-gray-500 dark:text-gray-400">Março de 2022 - Janeiro de 2023</div>
          <div className="mt-2">
            <h6 className="font-medium">Responsabilidades Principais:</h6>
            <ul className="text-gray-500 text-sm list-disc pl-4">
              <li>Desenvolvi e adequei processos de CI/CD em ambientes críticos e em migração</li>
              <li>Criei esteiras para gerar e publicar aplicativos feitos com React Native e Xamarin</li>
              <li>Implementei ferramentas de análise de código para validação da qualidade e segurança de projetos</li>
              <li>Realizei o atendimento de solicitações (chamados) com SLA em ambientes críticos</li>
              <li>Automatizei a extração de logs de auditoria no Azure DevOps criando uma extensão</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}