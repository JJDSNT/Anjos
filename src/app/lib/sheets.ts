// TODO: Add your public Google Sheet URL here. Make sure it's in CSV format.
const SHEET_URL = 'YOUR_PUBLIC_SHEET_URL_IN_CSV_FORMAT';

const parseCSV = (csvText: string) => {
  const lines = csvText.split('\n');
  return lines.map(line => line.split(',').map(cell => cell.trim()));
};

export const getSheetData = async () => {
  try {
    const response = await fetch(SHEET_URL);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const csvText = await response.text();
    return parseCSV(csvText);
  } catch (error) {
    console.error('Error fetching or parsing sheet data:', error);
    return [];
  }
};