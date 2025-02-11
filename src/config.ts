const domain = import.meta.env.VITE_AUTH0_DOMAIN
const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID

const redirectUri = import.meta.env.VITE_VERCEL_ENV === "production"
  ? `https://${globalThis.location.hostname}/callback`
  : import.meta.env.VITE_AUTH0_CALLBACK_URL;

export {
  domain,
  clientId,
  redirectUri
}