import express from 'express'
import path from 'path'
import { fileURLToPath } from "url";

const app = express()
const PORT = 3000
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, "static")));

app.get("/:page?", (req, res) => {
  const page = req.params.page || "index";
  let filePath = path.join(__dirname, `pages/${page}.html`);

  try {
    res.status(200).sendFile(filePath);
  } catch (e) {
    console.error("Error Fetching Index File:", e);
    res.status(500).send(e.toString());
  }
});

app.listen(PORT, (e) => {
  if (e) console.log(e);
  console.log("Server listening on PORT", PORT);
})
