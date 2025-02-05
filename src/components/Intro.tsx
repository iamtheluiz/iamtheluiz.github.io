import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "./ui/button";

export function Intro() {
  function handleOpenLink(link: string) {
    window.open(link, "_blank");
  }

  return (
    <section id="home" className="container max-w-5xl mx-auto py-12 md:py-16 lg:py-20">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
        <div className="w-1/2 mx-auto lg:w-1/3">
          <img alt="Luiz Gustavo" width="280" height="280" className="mx-auto aspect-square overflow-hidden object-cover object-center rounded-full" src="https://avatars.githubusercontent.com/u/32724000?v=4&size=512" />
        </div>
        <div className="w-full lg:w-2/3 space-y-4">
          <div className="space-y-2">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tighter ">Olá 👋, Eu sou Luiz Gustavo
            </h1>
          </div>
          <p className="max-w-[600px] lg:text-lg text-gray-500 dark:text-gray-400">Acredito que linguagens e ferramentas são instrumentos para atender uma necessidade, sendo necessário e importante conseguir experimentar e aprender novos conhecimentos a cada oportunidade.
          </p>
          <div className="space-x-4">
            <Button size="icon" onClick={() => handleOpenLink("https://www.linkedin.com/in/luiz-gustavo-da-silva-vasconcellos/")}>
              <Linkedin />
            </Button>
            <Button size="icon" onClick={() => handleOpenLink("https://github.com/iamtheluiz")}>
              <Github />
            </Button>
            <Button size="icon" onClick={() => handleOpenLink("mailto:luiz.s.vasconcellos@gmail.com")}>
              <Mail />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}