# Anjos da Madrugada - Lauzane

This is a Next.js project for the Anjos da Madrugada - Lauzane social action. The project is designed to be a simple and easy-to-use website to display information about the social action, including the next actions, how to contribute, and how to get in touch.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Google Sheets Integration

This project uses Google Sheets as a data source for the "Próximas Ações" section. To use this feature, you will need to provide the following:

1.  **Google Sheet ID:** The ID of the Google Sheet you want to use as a data source.
2.  **Google Cloud Credentials:** The credentials to authorize access to the Google Sheet. You can get them from the Google Cloud Console.

Once you have this information, you will need to update the `src/app/lib/sheets.ts` file with the correct values.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.