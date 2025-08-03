import { Github, Globe } from "lucide-react";
import { Button } from "./ui/button";

export function Projects() {
	return (

		<section id="projects" className="container max-w-5xl mx-auto py-6 md:py-8 lg:py-10">
			<h2 className="font-bold text-3xl md:text-5xl mb-12">Meus Projetos</h2>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4 lg:gap-6">
				<div className="rounded-lg border bg-card text-card-foreground shadow-sm flex flex-col lg:flex-row">
					<div className="w-full lg:w-1/3 p-2 flex items-center">
						<img alt="Screenshot do projeto Gantt Organon" loading="lazy" decoding="async" data-nimg="1" className="w-80 min-w-full rounded-md object-cover" src="https://raw.githubusercontent.com/iamtheluiz/gantt-organon/main/docs/screenshots/project.png" />
					</div>
					<div className="w-full lg:w-2/3">
						<div className="flex flex-col space-y-1.5 p-6">
							<h3 className="text-2xl font-semibold leading-none tracking-tight">📅 Gantt Organon</h3>
							<div className="flex flex-wrap gap-2">
								<div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">Typescript</div>
								<div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">React</div>
								<div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">Tailwind CSS</div>
							</div>
						</div>
						<div className="p-6 pt-0">
							<p className="text-sm text-muted-foreground">Esse é um Website para ajudar na criação de cronogramas e o exportar como uma imagem. Desenvolvido com React.</p>
						</div>
						<div className="flex items-center p-6 pt-0">
							<div className="grid grid-cols-2 w-full gap-3">
								<a target="_blank" rel="noreferrer" href="https://iamtheluiz.github.io/gantt-organon">
									<Button size="default" variant="outline" className="w-full">
										<Globe />
										Website
									</Button>
								</a>
								<a target="_blank" rel="noreferrer" href="https://github.com/iamtheluiz/gantt-organon">
									<Button size="default" variant="outline" className="w-full">
										<Github />
										Repositório
									</Button>
								</a>
							</div>
						</div>
					</div>
				</div>
				<div className="rounded-lg border bg-card text-card-foreground shadow-sm flex flex-col lg:flex-row">
					<div className="w-full lg:w-1/3 p-2 flex items-center">
						<img alt="Screenshot do projeto Hydro Registry" loading="lazy" decoding="async" data-nimg="2" className="w-80 min-w-full rounded-md object-cover" src="https://raw.githubusercontent.com/iamtheluiz/hydro-registry/main/.github/home.png" />
					</div>
					<div className="w-full lg:w-2/3">
						<div className="flex flex-col space-y-1.5 p-6">
							<h3 className="text-2xl font-semibold leading-none tracking-tight">🗺️ Hydro Registry</h3>
							<div className="flex flex-wrap gap-2">
								<div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">Typescript</div>
								<div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">React</div>
								<div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">Firebase</div>
							</div>
						</div>
						<div className="p-6 pt-0">
							<p className="text-sm text-muted-foreground">Site para cadastrar registros e hidrantes em um mapa interativo. Desenvolvido com React e Firebase.</p>
						</div>
						<div className="flex items-center p-6 pt-0">
							<div className="grid grid-cols-2 w-full gap-3">
								<a target="_blank" rel="noreferrer" href="https://hydro-register.web.app/">
									<Button size="default" variant="outline" className="w-full">
										<Globe />
										Website
									</Button>
								</a>
								<a target="_blank" rel="noreferrer" href="https://github.com/iamtheluiz/hydro-registry">
									<Button size="default" variant="outline" className="w-full">
										<Github />
										Repositório
									</Button>
								</a>
							</div>
						</div>
					</div>
				</div>
				<div className="rounded-lg border bg-card text-card-foreground shadow-sm flex flex-col lg:flex-row">
					<div className="w-full lg:w-1/3 p-2 flex items-center">
						<img alt="Screenshot do projeto Cinemais Admin" loading="lazy" decoding="async" data-nimg="1" className="w-80 min-w-full rounded-md object-cover" src="https://raw.githubusercontent.com/iamtheluiz/cinemais-admin/main/docs/screenshots/index.png" />
					</div>
					<div className="w-full lg:w-2/3">
						<div className="flex flex-col space-y-1.5 p-6">
							<h3 className="text-2xl font-semibold leading-none tracking-tight">📽️ Cinemais</h3>
							<div className="flex flex-wrap gap-2">
								<div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">Typescript</div>
								<div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">React</div>
								<div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">TailwindCSS</div>
								<div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">Express</div>
							</div>
						</div>
						<div className="p-6 pt-0">
							<p className="text-sm text-muted-foreground">Gerencie cinemas e sessões de filmes de modo prático e digital.</p>
						</div>
						<div className="flex items-center p-6 pt-0">
							<div className="grid grid-cols-2 w-full gap-3">
								<a target="_blank" rel="noreferrer" href="https://cinemais-admin.vercel.app/">
									<Button size="default" variant="outline" className="w-full">
										<Globe />
										Website
									</Button>
								</a>
								<a target="_blank" rel="noreferrer" href="https://github.com/iamtheluiz/cinemais-admin">
									<Button size="default" variant="outline" className="w-full">
										<Github />
										Repositório
									</Button>
								</a>
							</div>
						</div>
					</div>
				</div>
				<div className="rounded-lg border bg-card text-card-foreground shadow-sm flex flex-col lg:flex-row">
					<div className="w-full lg:w-1/3 p-2 flex items-center">
						<img alt="Screenshot do projeto Taiga" loading="lazy" decoding="async" data-nimg="1" className="w-80 min-w-full rounded-md object-cover" src="https://raw.githubusercontent.com/iamtheluiz/taiga/master/.github/taiga.png" />
					</div>
					<div className="w-full lg:w-2/3">
						<div className="flex flex-col space-y-1.5 p-6">
							<h3 className="text-2xl font-semibold leading-none tracking-tight">🐯 Taiga</h3>
							<div className="flex flex-wrap gap-2">
								<div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">Typescript</div>
								<div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">Electron</div>
								<div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">React</div>
								<div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">C#</div>
							</div>
						</div>
						<div className="p-6 pt-0">
							<p className="text-sm text-muted-foreground">Taiga is a speech recognition app that executes registered voice commands. Created with React, Electron, DotNet and Typescript.</p>
						</div>
						<div className="flex items-center p-6 pt-0">
							<div className="grid grid-cols-2 w-full gap-3">
								<a target="_blank" rel="noreferrer" href="https://github.com/iamtheluiz/taiga">
									<Button size="default" variant="outline" className="w-full">
										<Globe />
										Website
									</Button>
								</a>
								<a target="_blank" rel="noreferrer" href="https://github.com/iamtheluiz/taiga">
									<Button size="default" variant="outline" className="w-full">
										<Github />
										Repositório
									</Button>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}