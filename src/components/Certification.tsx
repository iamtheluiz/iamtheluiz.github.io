export function Certification() {
  return (
    <section id="Certification" className="container max-w-5xl mx-auto py-6 md:py-8 lg:py-10">
      <h2 className="font-bold text-3xl md:text-5xl mb-12">Certificações
      </h2>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <a href="https://learn.microsoft.com/api/credentials/share/en-us/LuizGustavodaSilvaVasconcellos-1293/612E783D2FD20F8C?sharingId" target="_blank" rel="nofollow noopener noreferrer" className="rounded-lg border bg-card text-card-foreground shadow-sm p-6 text-center hover:transform hover:scale-105 transition-transform duration-300 ease-in-out hover:cursor-pointer">
          <img src="https://raw.githubusercontent.com/iamtheluiz/iamtheluiz/master/assets/microsoft-devops-engineer.png" alt="Azure DevOps Expert" className="w-8/12 m-auto mb-4" loading="lazy" decoding="async" />
          <h3 className="text-2xl font-semibold leading-none tracking-tight mb-2">DevOps Engineer Expert</h3>
          <p className="text-sm text-muted-foreground">
            (Setembro de 2023 - Atualmente)<br />
            Microsoft
          </p>
        </a>
        <a href="https://learn.microsoft.com/api/credentials/share/en-us/LuizGustavodaSilvaVasconcellos-1293/C0A9A9ED3C10167A?sharingId=BF898E5C3F4DBBF" target="_blank" rel="nofollow noopener noreferrer" className="rounded-lg border bg-card text-card-foreground shadow-sm p-6 text-center hover:transform hover:scale-105 transition-transform duration-300 ease-in-out hover:cursor-pointer">
          <img src="https://raw.githubusercontent.com/iamtheluiz/iamtheluiz/master/assets/microsoft-azure-administrator.png" alt="Azure Administrator" className="w-8/12 m-auto mb-4" loading="lazy" decoding="async" />
          <h3 className="text-2xl font-semibold leading-none tracking-tight mb-2">Azure Administrator</h3>
          <p className="text-sm text-muted-foreground">
            (Janeiro de 2023 - Atualmente)<br />
            Microsoft
          </p>
        </a>
        {/* Meta Front-End Developer */}
        <a href="https://www.coursera.org/account/accomplishments/professional-cert/YJ58GVG6W24E" target="_blank" rel="nofollow noopener noreferrer" className="rounded-lg border bg-card text-card-foreground shadow-sm p-6 text-center hover:transform hover:scale-105 transition-transform duration-300 ease-in-out hover:cursor-pointer">
          <img src="https://raw.githubusercontent.com/iamtheluiz/iamtheluiz/master/assets/meta-front-end-developer.png" alt="Meta Front-End Developer" className="w-8/12 m-auto mb-4" loading="lazy" decoding="async" />
          <h3 className="text-2xl font-semibold leading-none tracking-tight mb-2">Meta Front-End Developer</h3>
          <p className="text-sm text-muted-foreground">
            (Março de 2024 - Sem expiração)<br />
            Meta
          </p>
        </a>
      </div>
    </section >
  )
}