export const oidcSettings = {
  authority: 'https://accounts.google.com',
  client_id: '459300396575-3ruj8l8jn69pcgst8rgkqnk6g43gbc78.apps.googleusercontent.com',
  redirect_uri: 'http://localhost:5002/oidc-callback',
  response_type: 'id_token',
  scope: 'openid email',
  automaticSilentRenew: true,
  silent_redirect_uri: 'http://localhost:5002/silent-renew-oidc.html'
}
