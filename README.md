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

Este projeto usa uma planilha pública do Google como fonte de dados para as seções "Próximas Ações" e "Contato".

### Configurando a Planilha

1.  **Compartilhamento da Planilha:**
    *   Abra a sua planilha do Google.
    *   Clique no botão **Compartilhar** no canto superior direito.
    *   Na seção **Acesso geral**, altere a configuração de **Restrito** para **Qualquer pessoa com o link**.
    *   Certifique-se de que o papel está definido como **Leitor**.

2.  **Crie um arquivo `.env.local`** na raiz do seu projeto.
3.  **Adicione a URL da sua planilha** a este arquivo da seguinte forma:

    ```
    NEXT_PUBLIC_SHEET_URL=https://docs.google.com/spreadsheets/d/YOUR_SPREADSHEET_ID/
    ```

    Substitua `YOUR_SPREADSHEET_ID` pelo ID da sua planilha.

4.  **Para Deploy no GitHub Pages (GitHub Actions):**
    *   Vá para as configurações do seu repositório no GitHub.
    *   Navegue até `Settings > Secrets and variables > Actions`.
    *   Crie um novo "Repository secret" chamado `NEXT_PUBLIC_SHEET_URL` e cole a URL da sua planilha como valor.

### Estrutura da Planilha (Schema)

Para que o site possa ser customizado pela planilha, a mesma deve seguir a seguinte estrutura de abas e colunas:

**Nome da Planilha:** `AnjosDaMadrugadaContent`

---

**Aba: `Acoes` (gid=0)**

Lista das próximas ações sociais.

| data       | hora   | local         | ponto_encontro      | atividade                               |
| ---------- | ------ | ------------- | ------------------- | --------------------------------------- |
| DD/MM/AAAA | HH:MM  | Nome do Local | Endereço ou Ponto   | Descrição das atividades                |

---

**Aba: `Contato` (gid=1)**

Informações de contato e configurações gerais (formato propriedade-valor).

| propriedade         | valor                                     |
| ------------------- | ----------------------------------------- |
| email               | anjosdamadrugada@lauzane.com.br           |
| whatsapp            | (11) 99999-9999                           |
| whatsapp_link       | https://wa.me/5511999999999               |
| igreja_nome         | Igreja do Lauzane                         |
| igreja_endereco     | Rua Exemplo, 123 - Lauzane Paulista       |
| igreja_cidade_estado | São Paulo - SP                            |
| encontro_dia_hora   | Sábados - 22h00                           |
| instagram_user      | anjosdamadrugada.lauzane                  |
| instagram_url       | https://www.instagram.com/anjosdamadrugada.lauzane/ |


## Deploy no Vercel

A maneira mais fácil de implantar seu aplicativo Next.js é usar a [Plataforma Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) dos criadores do Next.js.

Confira nossa [documentação de implantação do Next.js](https://nextjs.org/docs/app/building-your-application/deploying) para mais detalhes.

## Trabalho de Extensão

Este repositório é um trabalho de extensão para o curso de Análise e Desenvolvimento de Sistemas da Universidade Cruzeiro do Sul.

## Uso

Este é um trabalho acadêmico e para utilizar esse sistema é necessário pedir autorização conforme a política da igreja.
