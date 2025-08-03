import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "./ui/button";

export function Intro() {
  return (
    <header id="home" className="container max-w-5xl mx-auto py-12 md:py-16 lg:py-20" role="banner">
      <nav aria-label="Navegação principal" className="mb-8 flex justify-center gap-6">
        <a href="#home" className="text-base font-medium hover:underline">Início</a>
        <a href="#work" className="text-base font-medium hover:underline">Experiência</a>
        <a href="#projects" className="text-base font-medium hover:underline">Projetos</a>
        <a href="#education" className="text-base font-medium hover:underline">Educação</a>
        <a href="#certification" className="text-base font-medium hover:underline">Certificações</a>
        <a href="#contato" className="text-base font-medium hover:underline">Contato</a>
      </nav>
      <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
        <div className="w-1/2 mx-auto lg:w-1/3">
          <img alt="Foto de Luiz Gustavo, desenvolvedor frontend e full stack" width="280" height="280" className="mx-auto aspect-square overflow-hidden object-cover object-center rounded-full" src="https://avatars.githubusercontent.com/u/32724000?v=4&size=512" />
        </div>
        <div className="w-full lg:w-2/3 space-y-4">
          <div className="space-y-2">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tighter ">Luiz Gustavo – Desenvolvedor Frontend e Full Stack</h1>
          </div>
          <p className="max-w-[600px] lg:text-lg text-gray-500 dark:text-gray-400">Acredito que linguagens e ferramentas são instrumentos para atender uma necessidade, sendo necessário e importante conseguir experimentar e aprender novos conhecimentos a cada oportunidade.</p>
          <nav aria-label="Redes sociais" className="space-x-4">
            <a href="https://www.linkedin.com/in/luiz-gustavo-da-silva-vasconcellos/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Luiz Gustavo">
              <Button size="icon">
                <Linkedin />
              </Button>
            </a>
            <a href="https://github.com/iamtheluiz" target="_blank" rel="noopener noreferrer" aria-label="GitHub Luiz Gustavo">
              <Button size="icon">
                <Github />
              </Button>
            </a>
            <a href="mailto:luiz.s.vasconcellos@gmail.com" aria-label="Enviar email para Luiz Gustavo">
              <Button size="icon">
                <Mail />
              </Button>
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
}