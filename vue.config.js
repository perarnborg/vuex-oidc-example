module.exports = {
  devServer: {
    port: 5002
  },
  pages: {
    app: {
      entry: 'src/main.js',
      template: 'public/index.html',
      filename: 'index.html',
      excludeChunks: ['silent-renew-oidc', 'oidc-callback']
    },
    oidccallback: {
      entry: 'src/oidc-callback.js',
      template: 'public/oidc-callback.html',
      filename: 'oidc-callback.html',
      excludeChunks: ['app', 'silent-renew-oidc']
    },
    silentrenewoidc: {
      entry: 'src/silent-renew-oidc.js',
      template: 'public/silent-renew-oidc.html',
      filename: 'silent-renew-oidc.html',
      excludeChunks: ['app', 'oidc-callback']
    }
  }
}
