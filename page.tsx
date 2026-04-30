export default function Home() {
  const whatsapp =
    "https://wa.me/5535999522272?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20um%20atendimento%20jur%C3%ADdico.";

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

  const diferenciais = [
    "Atendimento presencial e online",
    "Comunicação clara com o cliente",
    "Análise cuidadosa de cada caso",
    "Estratégia jurídica personalizada",
    "Atuação ética e responsável",
    "Compromisso com segurança jurídica",
  ];

  return (
    <main className="min-h-screen bg-[#f7f4ee] text-[#1f1a17]">
      <a
        href={whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
        className="fixed bottom-5 right-5 z-50 rounded-full bg-[#8a6a3f] px-5 py-4 text-sm font-semibold text-white shadow-lg transition hover:scale-105 hover:opacity-95"
      >
        WhatsApp
      </a>

      <header className="sticky top-0 z-40 border-b border-[#e5ddd1] bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div>
            <p className="text-base font-semibold tracking-wide md:text-lg">
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

      <section className="mx-auto max-w-6xl px-6 py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-[1.4fr_0.8fr] md:items-center">
          <div>
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-[#8a6a3f]">
              Advocacia e Assessoria Jurídica
            </p>

            <h1 className="max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
              Atendimento jurídico com clareza, estratégia e confiança
            </h1>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-[#5c534a]">
              Soluções jurídicas com atendimento humanizado, análise cuidadosa
              de cada caso e atuação comprometida com a proteção dos seus
              direitos.
            </p>

            <div className="mt-7 flex flex-col gap-4 sm:flex-row">
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

          <div className="rounded-[2rem] border border-[#e5ddd1] bg-white p-6 shadow-sm md:p-7">
            <p className="text-sm uppercase tracking-[0.2em] text-[#8a6a3f]">
              Atendimento
            </p>

            <p className="mt-4 leading-7 text-[#4e463e]">
              Presencial em Varginha/MG e também online, com orientação clara,
              atendimento individualizado e acompanhamento em todas as etapas.
            </p>

            <div className="my-6 h-px bg-[#ece4d8]" />

            <p className="text-sm uppercase tracking-[0.2em] text-[#8a6a3f]">
              Endereço
            </p>

            <p className="mt-4 leading-7 text-[#4e463e]">
              Av. Cel. José Alves, 361 - Sala 304
              <br />
              Vila Pinto, Varginha/MG
            </p>
          </div>
        </div>
      </section>

      <section id="sobre" className="mx-auto max-w-6xl px-6 py-12 md:py-14">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-[#8a6a3f]">
              Sobre
            </p>

            <h2 className="mt-3 text-3xl font-bold">
              Atuação séria e personalizada
            </h2>

            <p className="mt-5 leading-8 text-[#5c534a]">
              O escritório atua com ética, responsabilidade e compromisso,
              oferecendo orientação jurídica clara e estratégias adequadas para
              cada situação.
            </p>

            <p className="mt-4 leading-8 text-[#5c534a]">
              Cada atendimento é conduzido de forma próxima, buscando segurança,
              transparência e proteção aos interesses do cliente.
            </p>
          </div>

          <div className="rounded-[2rem] border border-[#e5ddd1] bg-white p-6 shadow-sm md:p-7">
            <h3 className="text-xl font-semibold">Diferenciais</h3>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {diferenciais.map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-[#ece4d8] bg-[#fcfaf7] p-4 text-sm leading-6 text-[#5c534a]"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="atuacao" className="bg-white py-12 md:py-14">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-sm uppercase tracking-[0.2em] text-[#8a6a3f]">
            Áreas de atuação
          </p>

          <h2 className="mt-3 text-3xl font-bold">
            Serviços jurídicos oferecidos
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
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

      <section id="contato" className="mx-auto max-w-6xl px-6 py-12 md:py-14">
        <div className="rounded-[2rem] bg-[#1f1a17] px-6 py-10 text-white md:px-12">
          <p className="text-sm uppercase tracking-[0.2em] text-[#c7a676]">
            Contato
          </p>

          <h2 className="mt-3 text-3xl font-bold">Agende seu atendimento</h2>

          <p className="mt-4 max-w-2xl leading-8 text-[#ddd6cf]">
            Entre em contato para receber orientação jurídica com clareza,
            responsabilidade e atenção ao seu caso.
          </p>

          <div className="mt-7 grid gap-4 text-base md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-sm uppercase tracking-[0.18em] text-[#c7a676]">
                WhatsApp
              </p>
              <p className="mt-3">(35) 99952-2272</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-sm uppercase tracking-[0.18em] text-[#c7a676]">
                Endereço
              </p>
              <p className="mt-3 leading-7">
                Av. Cel. José Alves, 361 - Sala 304
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-sm uppercase tracking-[0.18em] text-[#c7a676]">
                Atendimento
              </p>
              <p className="mt-3">Presencial e online</p>
            </div>
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
