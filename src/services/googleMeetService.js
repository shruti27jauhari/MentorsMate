import { google } from "googleapis";

const { OAuth2 } = google.auth;

const oauth2Client = new OAuth2(
  import.meta.env.VITE_GOOGLE_CLIENT_ID,
  import.meta.env.VITE_GOOGLE_CLIENT_SECRET,
  import.meta.env.VITE_GOOGLE_REDIRECT_URI
);

export const createGoogleMeet = async (authToken) => {
  oauth2Client.setCredentials({ access_token: authToken });

  const calendar = google.calendar({ version: "v3", auth: oauth2Client });

  const event = {
    summary: "Google Meet Meeting",
    description: "A video meeting",
    start: {
      dateTime: "2024-09-30T10:00:00-07:00",
      timeZone: "America/Los_Angeles",
    },
    end: {
      dateTime: "2024-09-30T11:00:00-07:00",
      timeZone: "America/Los_Angeles",
    },
    conferenceData: {
      createRequest: {
        requestId: "random-string",
        conferenceSolutionKey: { type: "hangoutsMeet" },
      },
    },
  };

  try {
    const response = await calendar.events.insert({
      calendarId: "primary",
      resource: event,
      conferenceDataVersion: 1,
    });
    return response.data.htmlLink; // Google Meet link
  } catch (error) {
    console.error("Error creating meeting: ", error);
  }
};
