const BASE_URL = process.env.NEXT_PUBLIC_SHEET_URL;

const SHEETS_CONFIG = {
  Acoes: '0',
};

const parseCSV = (csvText: string) => {
  const lines = csvText.split('\n');
  return lines.map(line => line.split(',').map(cell => cell.trim()));
};

export const getSheetData = async (sheetName: keyof typeof SHEETS_CONFIG) => {
  const sheetId = SHEETS_CONFIG[sheetName];
  const url = `${BASE_URL}gviz/tq?tqx=out:csv&gid=${sheetId}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const csvText = await response.text();
    return parseCSV(csvText);
  } catch (error) {
    console.error(`Error fetching or parsing sheet data for ${sheetName}:`, error);
    return [];
  }
};

export const getSheetConfig = async () => {
  const url = `${BASE_URL}gviz/tq?tqx=out:csv&gid=1`; // Assuming gid=1 for Contato tab

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const csvText = await response.text();
    const lines = parseCSV(csvText);
    const config = lines.slice(1).reduce((acc, [key, value]) => {
      if (key) {
        acc[key] = value;
      }
      return acc;
    }, {} as Record<string, string>);
    return config;
  } catch (error) {
    console.error('Error fetching or parsing sheet config:', error);
    return {};
  }
};