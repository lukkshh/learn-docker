import express, { Request, Response } from "express";

const app = express();
const port = 3000;

app.get("/", (req: Request, res: Response) => {
  res.send(
    "this server can update in real time because of docker compose volume mapping"
  );
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
