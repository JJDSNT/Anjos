import { cache } from 'react';

const BASE_URL = process.env.NEXT_PUBLIC_SHEET_URL;

const SHEETS_CONFIG = {
  Acoes: '0',
  Contato: '395708326',
};

const parseCSV = (csvText: string) => {
  const lines = csvText.split('\n');
  return lines.map(line => line.split(',').map(cell => cell.trim().replace(/^"|"$/g, '')));
};

export const getSheetData = cache(async (sheetName: keyof typeof SHEETS_CONFIG) => {
  const sheetId = SHEETS_CONFIG[sheetName];
  const url = `${BASE_URL}gviz/tq?tqx=out:csv&gid=${sheetId}`;
  console.log(`Fetching sheet data from: ${url}`);

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const csvText = await response.text();
    console.log("CSV Text Response:", csvText);
    return parseCSV(csvText);
  } catch (error) {
    console.error(`Error fetching or parsing sheet data for ${sheetName}:`, error);
    return [];
  }
});

export const getSheetConfig = async () => {
  const lines = await getSheetData('Contato');

  try {
    const config = lines.slice(1).reduce((acc, [key, value]) => {
      if (key) {
        acc[key] = value;
      }
      return acc;
    }, {} as Record<string, string>);
    return config;
  } catch (error) {
    console.error('Error processing sheet config:', error);
    return {};
  }
};