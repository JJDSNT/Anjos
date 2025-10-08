
import { google } from 'googleapis';
import { auth } from 'google-auth-library';

// TODO: Add your Google Sheet ID here
const SPREADSHEET_ID = 'YOUR_SPREADSHEET_ID';

// TODO: Add your credentials here. You can get them from the Google Cloud Console.
const credentials = {
  "type": "service_account",
  "project_id": "your-project-id",
  "private_key_id": "your-private-key-id",
  "private_key": "-----BEGIN PRIVATE KEY-----\nYOUR_PRIVATE_KEY\n-----END PRIVATE KEY-----\n",
  "client_email": "your-client-email",
  "client_id": "your-client-id",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/your-client-email"
};

const getClient = () => {
  const client = auth.fromJSON(credentials);
  client.scopes = ['https://www.googleapis.com/auth/spreadsheets.readonly'];
  return client;
};

export const getSheetData = async (range: string) => {
  try {
    const client = getClient();
    const sheets = google.sheets({ version: 'v4', auth: client });

    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: SPREADSHEET_ID,
      range: range,
    });

    return response.data.values;
  } catch (error) {
    console.error('Error fetching sheet data:', error);
    return [];
  }
};
