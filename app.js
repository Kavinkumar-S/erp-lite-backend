import express from "express";
import routes from "./src/routes/index.js";
import errorHandler from "./src/middlewares/error.middleware.js";
import cors from "cors";
import createTables from "./src/config/migrate.js";
const app = express();

app.use(
  cors({
    origin: "http://localhost:5174",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);



app.use(express.json());
(async () => {
  await createTables(); // 👈 table auto-created here
})();

app.use("/api", routes);

app.use(errorHandler);

export default app;
