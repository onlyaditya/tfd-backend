const app = require("./index");
const { connect } = require("./config/db");

app.listen(3000, async () => {
  try {
    await connect();
    console.log("listening to port 3000");
  } catch (err) {
    console.log("error: ", err.message);
  }
});
