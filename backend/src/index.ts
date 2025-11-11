import express, { Request, Response } from "express";
import path from "path";

const app = express();
const port = process.env.PORT || 3000;

app.get("/api/health", (req: Request, res: Response) => {
  res.status(200).json({ status: "OK" });
});

const frontendPath = path.join(__dirname, "..", "dist-frontend");

app.use(express.static(frontendPath));
app.get("/*splat", (req, res) => {
  res.sendFile(path.join(frontendPath, "index.html"));
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
