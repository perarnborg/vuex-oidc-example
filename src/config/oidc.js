export const oidcSettings = {
  authority: 'https://accounts.google.com',
  client_id: '459300396575-3ruj8l8jn69pcgst8rgkqnk6g43gbc78.apps.googleusercontent.com',
  redirect_uri: 'http://localhost:5002/signin-oidc',
  response_type: 'id_token',
  scope: 'openid email',
  automaticSilentRenew: true,
  silent_redirect_uri: 'http://localhost:5002/silent-renew-oidc.html'
}

export const oidcSettingsChef = {
  authority: 'https://chef-sso-dev.azurewebsites.net',
  client_id: 'chef',
  redirect_uri: 'http://localhost:5002/signin-oidc',
  silent_redirect_uri: 'http://localhost:5002/silent-renew-oidc.html',
  automaticSilentRenew: true,
  post_logout_redirect_uri: 'http://localhost:5002/signout-callback-oidc',
  response_type: 'token code id_token',
  scope: 'openid profile email api1'
}
