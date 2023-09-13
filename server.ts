require("dotenv").config();

import { app } from "./app";
import connectDB from "./utils/db";

app.listen(process.env.PORT, async () => {
  await connectDB(process.env.DB_URI as string);
  console.log(`Server is running on port ${process.env.PORT}`);
});
