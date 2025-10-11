# Anjos da Madrugada - Lauzane

Este é um projeto Next.js para a ação social Anjos da Madrugada - Lauzane. O projeto foi concebido para ser um site simples e fácil de usar para exibir informações sobre a ação social, incluindo as próximas ações, como contribuir e como entrar em contato.

## Começando

Primeiro, execute o servidor de desenvolvimento:

```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
# ou
bun dev
```

Abra [http://localhost:3000](http://localhost:3000) com seu navegador para ver o resultado.

## Integração com o Google Sheets

Este projeto usa uma planilha pública do Google como fonte de dados para a seção "Próximas Ações". Para usar este recurso, você precisará fornecer a URL pública da sua planilha do Google em formato CSV.

### Como obter a URL pública da sua planilha do Google

1.  Abra sua planilha do Google.
2.  Vá para `Arquivo > Compartilhar > Publicar na web`.
3.  Na guia `Link`, selecione a planilha que deseja publicar.
4.  No menu suspenso, selecione `Valores separados por vírgula (.csv)`.
5.  Clique no botão `Publicar`.
6.  Copie a URL gerada.

Depois de ter a URL, você precisará atualizar o arquivo `src/app/lib/sheets.ts` com o valor correto na constante `SHEET_URL`.

## Deploy no Vercel

A maneira mais fácil de implantar seu aplicativo Next.js é usar a [Plataforma Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) dos criadores do Next.js.

Confira nossa [documentação de implantação do Next.js](https://nextjs.org/docs/app/building-your-application/deploying) para mais detalhes.

## Trabalho de Extensão

Este repositório é um trabalho de extensão para o curso de Análise e Desenvolvimento de Sistemas da Universidade Cruzeiro do Sul.

## Uso

Este é um trabalho acadêmico e para utilizar esse sistema é necessário pedir autorização conforme a política da igreja.
