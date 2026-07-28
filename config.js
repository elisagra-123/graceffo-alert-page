/**
 * Graceffo Alert — Site Configuration
 *
 * Update ENROLLMENT_FORM_URL to the published Microsoft Forms URL before deploying.
 * This is the only place the URL needs to be changed.
 *
 * To switch between "open in new tab" and embedded iframe:
 *   Set ENROLLMENT_FORM_MODE to either "tab" or "iframe".
 */
const GRACEFFO_CONFIG = {
  CONTACT_EMAIL: "graceffoalert@outlook.com",
  ENROLLMENT_FORM_URL: "https://forms.cloud.microsoft/pages/responsepage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAANAAq06Wk9UNFdTU0QwT0I2UkE2U1VJVEtKV09HTU03Ri4u&route=shorturl",
  ENROLLMENT_FORM_MODE: "tab" // "tab" opens in new tab; "iframe" embeds the form
};
