export function main(event, context) {
  // Handle subscription verification
  if (
    event["hub.mode"] === "subscribe" &&
    event["hub.verify_token"] === process.env.STRAVA_VERIFY_TOKEN &&
    event["hub.challenge"]
  ) {
    return {
      statusCode: 200,
      body: { "hub.challenge": event["hub.challenge"] },
    };
  }

  return {
    statusCode: 200,
  };
}

function getAccessToken() {}
