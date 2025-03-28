import express from 'express'
import path from 'path'
import { fileURLToPath } from "url";

const app = express()
const PORT = 3000
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, "static")));

app.get('/', (req, res) => {
  try {
    res.status(200).sendFile(path.join(__dirname, "pages/index.html"));
  } catch (e) {
    console.error("Error Fetching Index File:", e);
    res.status(500).send(e.toString());
  }
})

app.listen(PORT, (e) => {
  if (e) console.log(e);
  console.log("Server listening on PORT", PORT);
})
