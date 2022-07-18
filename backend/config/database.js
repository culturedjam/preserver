const path = require("path")

module.exports = () => ({
  connection: {
    client: "sqlite",
    connection: {
      filename: path.join(__dirname, `..`, `..`, env(`DATABASE_FILENAME`, `culturedjam.db`)),
    },
    useNullAsDefault: true,
  },
})
