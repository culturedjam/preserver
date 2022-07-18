module.exports = ({ env }) => ({
  auth: {
    secret: env(`ADMIN_JWT_SECRET`, `HGdLN6K8waMbnMZqk3NMrQ==`),
  },
  apiToken: {
    salt: env(`API_TOKEN_SALT`, `Uq1zuyyz/PaiXAIWTw19kQ==`),
  },
})
