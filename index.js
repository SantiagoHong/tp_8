import express from "express";
import cors from "cors";
import provinceRouter from "./src/controllers/province-controller.js";

const app = express();
const port = 3000;

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/province", provinceRouter);

// Start server
app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
 