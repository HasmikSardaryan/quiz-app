import express from 'express'
import sequelize from "./db.js"; 
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true })); // extended - handels nested objects/arrays

(async () => {
    try {
      await sequelize.authenticate();
      console.log("Database connected!");

      await sequelize.sync({force: true});
      console.log("Tables synced!");

      const PORT = process.env.PORT || 3001;
      app.listen(PORT, () => {
        console.log(`Server listens on http://localhost:${PORT}`);
      });
  
    } catch (error) {
      console.error("Database connection failed:", error);
    }
})();