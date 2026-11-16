# Taciana S. Vieira Naia Advocacia e Assessoria Jurídica

Landing page em Next.js, preparada para deploy na Vercel.

## Rodar localmente

```bash
npm install
npm run dev
```

Acesse `http://localhost:3000`.

## SEO incluído

- Metadados em português do Brasil com título e descrição específicos.
- URL canônica padronizada em `https://www.taciananaia.com.br/`.
- Sitemap automático em `/sitemap.xml`.
- Regras de rastreamento em `/robots.txt`.
- Dados estruturados `LegalService` com nome, telefone e endereço informados no próprio site.
- Open Graph e metadados para compartilhamento em redes sociais.

A versão sem `www` deve continuar redirecionando para a versão com `www`, para manter a mesma URL canônica em todos os sinais do site.

## Publicar na Vercel

1. Atualize os arquivos deste projeto no repositório conectado à Vercel.
2. A Vercel fará um novo deploy automaticamente (caso a integração com Git esteja ativa).
3. Depois que o deploy terminar, confira estas URLs:
   - `https://www.taciananaia.com.br/`
   - `https://www.taciananaia.com.br/robots.txt`
   - `https://www.taciananaia.com.br/sitemap.xml`
4. No Google Search Console, envie `sitemap.xml` na seção **Indexação > Sitemaps**.
5. Inspecione `https://www.taciananaia.com.br/` e solicite uma nova indexação depois do deploy.

## Onde editar o conteúdo

O conteúdo principal está em `app/page.tsx`.

Os metadados globais estão em `app/layout.tsx`. O sitemap e as regras de rastreamento estão em `app/sitemap.ts` e `app/robots.ts`.
