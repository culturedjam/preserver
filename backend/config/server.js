module.exports = ({ env }) => ({
  host: env(`HOST`, `localhost`),
  port: env.int(`PORT`, 3737),
  app: {
    keys: env.array(`APP_KEYS`, [
      `TrF6V9PL0QaV/Y2tjAkG6Q==`,
      `2K4id64I10HbmROmLjteXQ==`,
      `/bLBaQbZxNkROqCyF6usXA==`,
      `4vGc1atACzlgXEpTwVrTVg==`,
    ]),
  },
})
