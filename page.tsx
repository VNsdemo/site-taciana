export default function Home() {
  const whatsapp = "https://wa.me/5535999522272";

  const areas = [
    {
      titulo: "Execuções e Cobranças",
      texto: "Atuação em cobranças judiciais, cumprimento de sentença e medidas para efetivação de direitos.",
    },
    {
      titulo: "Contratos",
      texto: "Elaboração, revisão e análise contratual com foco em segurança jurídica e prevenção de riscos.",
    },
    {
      titulo: "Defesa de Devedores",
      texto: "Atuação estratégica em execuções, renegociações e defesa em cobranças judiciais e extrajudiciais.",
    },
    {
      titulo: "Sucessões",
      texto: "Orientação em inventários, partilhas e questões sucessórias com atendimento cuidadoso e seguro.",
    },
    {
      titulo: "Direito Bancário",
      texto: "Atuação em demandas envolvendo bancos, revisão contratual, dívidas e cobranças abusivas.",
    },
    {
      titulo: "Direito Previdenciário",
      texto: "Orientação sobre benefícios, aposentadorias, revisões e demais demandas previdenciárias.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#f7f4ee] text-[#1f1a17]">
      <a
        href={whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
        className="fixed bottom-6 right-6 z-50 rounded-full bg-[#8a6a3f] px-5 py-4 text-sm font-semibold text-white shadow-lg transition hover:scale-105 hover:opacity-95"
      >
        WhatsApp
      </a>

      <header className="sticky top-0 z-40 border-b border-[#e5ddd1] bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div>
            <p className="text-lg font-semibold tracking-wide">
              Taciana Advocacia e Assessoria Jurídica
            </p>
            <p className="text-sm text-[#6b6258]">Advogada</p>
          </div>

          <nav className="hidden gap-6 text-sm text-[#4e463e] md:flex">
            <a href="#sobre" className="transition hover:text-[#8a6a3f]">
              Sobre
            </a>
            <a href="#atuacao" className="transition hover:text-[#8a6a3f]">
              Atuação
            </a>
            <a href="#contato" className="transition hover:text-[#8a6a3f]">
              Contato
            </a>
          </nav>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-[#8a6a3f]">
              Advocacia e Assessoria Jurídica
            </p>

            <h1 className="text-4xl font-bold leading-tight md:text-6xl">
              Atendimento jurídico com clareza, estratégia e confiança
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-[#5c534a]">
              Soluções jurídicas com atendimento humanizado, análise cuidadosa
              de cada caso e atuação comprometida com a proteção dos seus
              direitos.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href={whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl bg-[#8a6a3f] px-6 py-3 text-center font-medium text-white transition hover:opacity-95"
              >
                Agendar atendimento
              </a>

              <a
                href="#atuacao"
                className="rounded-xl border border-[#cdbda8] px-6 py-3 text-center font-medium text-[#6b4f2b] transition hover:bg-white"
              >
                Ver áreas de atuação
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] border border-[#e5ddd1] bg-white p-8 shadow-sm">
            <p className="text-sm uppercase tracking-[0.2em] text-[#8a6a3f]">
              Atendimento
            </p>

            <p className="mt-4 leading-8 text-[#4e463e]">
              Presencial em Varginha/MG e também online, com atenção
              individualizada e orientação jurídica clara em todas as etapas.
            </p>

            <div className="my-8 h-px bg-[#ece4d8]" />

            <p className="text-sm uppercase tracking-[0.2em] text-[#8a6a3f]">
              Endereço
            </p>

            <p className="mt-4 leading-8 text-[#4e463e]">
              Av. Cel. José Alves, 361 - Sala 304
              <br />
              Vila Pinto, Varginha/MG
            </p>
          </div>
        </div>
      </section>

      <section id="sobre" className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-[#8a6a3f]">
              Sobre
            </p>

            <h2 className="mt-3 text-3xl font-bold">
              Atuação séria e personalizada
            </h2>

            <p className="mt-6 leading-8 text-[#5c534a]">
              O escritório atua com ética, responsabilidade e compromisso,
              oferecendo orientação jurídica clara e estratégias adequadas para
              cada situação.
            </p>

            <p className="mt-4 leading-8 text-[#5c534a]">
              Cada atendimento é conduzido de forma próxima, buscando segurança,
              transparência e proteção aos interesses do cliente.
            </p>
          </div>

          <div className="rounded-[2rem] border border-[#e5ddd1] bg-white p-8 shadow-sm">
            <h3 className="text-xl font-semibold">Diferenciais</h3>

            <ul className="mt-6 space-y-4 text-[#5c534a]">
              <li>Atendimento presencial e online</li>
              <li>Assessoria jurídica personalizada</li>
              <li>Comunicação clara com o cliente</li>
              <li>Atuação ética e estratégica</li>
              <li>Compromisso com segurança jurídica</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="atuacao" className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-sm uppercase tracking-[0.2em] text-[#8a6a3f]">
            Áreas de atuação
          </p>

          <h2 className="mt-3 text-3xl font-bold">
            Serviços jurídicos oferecidos
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {areas.map((area) => (
              <div
                key={area.titulo}
                className="rounded-[1.5rem] border border-[#ece4d8] bg-[#fcfaf7] p-6 transition hover:-translate-y-1 hover:shadow-sm"
              >
                <h3 className="text-xl font-semibold">{area.titulo}</h3>
                <p className="mt-3 leading-7 text-[#5c534a]">{area.texto}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contato" className="mx-auto max-w-6xl px-6 py-16">
        <div className="rounded-[2rem] bg-[#1f1a17] px-8 py-12 text-white md:px-12">
          <p className="text-sm uppercase tracking-[0.2em] text-[#c7a676]">
            Contato
          </p>

          <h2 className="mt-3 text-3xl font-bold">Agende seu atendimento</h2>

          <p className="mt-4 max-w-2xl leading-8 text-[#ddd6cf]">
            Entre em contato para receber orientação jurídica com clareza,
            responsabilidade e atenção ao seu caso.
          </p>

          <div className="mt-8 space-y-3 text-lg">
            <p>WhatsApp: (35) 99952-2272</p>
            <p>
              Endereço: Av. Cel. José Alves, 361 - Sala 304 - Vila Pinto,
              Varginha/MG
            </p>
            <p>Atendimento presencial e online</p>
          </div>

          <a
            href={whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block rounded-xl bg-[#8a6a3f] px-6 py-3 font-medium text-white transition hover:opacity-95"
          >
            Chamar no WhatsApp
          </a>
        </div>
      </section>

      <footer className="border-t border-[#e5ddd1] bg-white">
        <div className="mx-auto max-w-6xl px-6 py-6 text-sm text-[#6b6258]">
          © 2026 Taciana Advocacia e Assessoria Jurídica. Todos os direitos
          reservados.
        </div>
      </footer>
    </main>
  );
}