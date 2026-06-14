const express = require("express");
const cors = require("cors");


const app = express();

const PORT = 5000;

const contactRoute = require("./src/routes/contactRoute");
const chatRoute = require("./src/routes/chatRoute");
const scanRoute = require("./src/routes/scanRoute");

app.use(
  cors({
    origin:"*"
  }),
);

app.use(express.json());

app.use("/contact", contactRoute);
app.use("/chat", chatRoute);
app.use("/scan", scanRoute);


app.listen(PORT,()=>{
  console.log(`your server running on http://localhost:${PORT}`);
})
