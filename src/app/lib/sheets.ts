const BASE_URL = process.env.SHEET_URL;

const SHEETS_CONFIG = {
  General: '0',
  Sobre: '1',
  Acoes: '2',
  Local: '3',
  Contribuir: '4',
  Instagram: '5',
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