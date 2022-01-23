const app = require("./index");
const { connect } = require("./config/db");

const port = 5000;

app.listen(process.env.PORT || port, async () => {
  try {
    await connect();
    console.log("listening to port 3000");
  } catch (err) {
    console.log("error: ", err.message);
  }
});
