// server.js
const express = require("express");
const cors = require("cors");
const { Pool } = require("pg");
const path = require("path");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.use("/images", express.static(path.join(__dirname, "public/images")));

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "RealEstate",
  password: "1405",
  port: 5432,
});

app.get("/rent", async (req, res) => {
  try {
    const result = await pool.query(
      `SELECT * FROM public."Rent" ORDER BY "uniqueID" ASC`
    );
    res.json(result.rows);
  } catch (err) {
    console.error("GET Rent Error:", err.message);
    res.status(500).send("Server Error: Failed to fetch rent listings.");
  }
});

app.get("/buy", async (req, res) => {
  try {
    const result = await pool.query(
      `SELECT * FROM public."Buy" ORDER BY "uniqueID" ASC`
    );
    res.json(result.rows);
  } catch (err) {
    console.error("GET Buy Error:", err.message);
    res.status(500).send("Server Error: Failed to fetch buy listings.");
  }
});

app.post("/rent", async (req, res) => {
  try {
    const {
      uniqueID,
      address,
      price,
      bedrooms,
      bathrooms,
      owner,
      contact,
      email,
      details,
      image,
    } = req.body;

    const result = await pool.query(
      `INSERT INTO public."Rent"
      ("uniqueID","address","price","bedrooms","bathrooms",
       "owner","contact","email","details","image")
      VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10)
      RETURNING *`,
      [
        uniqueID,
        address,
        price,
        bedrooms,
        bathrooms,
        owner,
        contact,
        email,
        details,
        image,
      ]
    );

    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error("POST Rent Error:", err.message);
    res.status(500).send("Server Error: Failed to add rent listing.");
  }
});

app.post("/buy", async (req, res) => {
  try {
    const {
      uniqueID,
      address,
      price,
      bedrooms,
      bathrooms,
      owner,
      contact,
      email,
      details,
      image,
    } = req.body;

    const result = await pool.query(
      `INSERT INTO public."Buy"
      ("uniqueID","address","price","bedrooms","bathrooms",
       "owner","contact","email","details","image")
      VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10)
      RETURNING *`,
      [
        uniqueID,
        address,
        price,
        bedrooms,
        bathrooms,
        owner,
        contact,
        email,
        details,
        image,
      ]
    );

    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error("POST Buy Error:", err.message);
    res.status(500).send("Server Error: Failed to add buy listing.");
  }
});

app.put("/rent/:uniqueID", async (req, res) => {
  const { uniqueID } = req.params;
  const {
    address,
    price,
    bedrooms,
    bathrooms,
    owner,
    contact,
    email,
    details,
    image,
  } = req.body;

  try {
    const result = await pool.query(
      `UPDATE public."Rent"
       SET "address"=$1,"price"=$2,"bedrooms"=$3,"bathrooms"=$4,
           "owner"=$5,"contact"=$6,"email"=$7,"details"=$8,"image"=$9
       WHERE "uniqueID"=$10
       RETURNING *`,
      [
        address,
        price,
        bedrooms,
        bathrooms,
        owner,
        contact,
        email,
        details,
        image,
        uniqueID,
      ]
    );

    if (result.rows.length === 0)
      return res.status(404).json("Rent listing not found.");

    res.json(result.rows[0]);
  } catch (err) {
    console.error("PUT Rent Error:", err.message);
    res.status(500).send("Server Error: Failed to update rent listing.");
  }
});

app.put("/buy/:uniqueID", async (req, res) => {
  const { uniqueID } = req.params;
  const {
    address,
    price,
    bedrooms,
    bathrooms,
    owner,
    contact,
    email,
    details,
    image,
  } = req.body;

  try {
    const result = await pool.query(
      `UPDATE public."Buy"
       SET "address"=$1,"price"=$2,"bedrooms"=$3,"bathrooms"=$4,
           "owner"=$5,"contact"=$6,"email"=$7,"details"=$8,"image"=$9
       WHERE "uniqueID"=$10
       RETURNING *`,
      [
        address,
        price,
        bedrooms,
        bathrooms,
        owner,
        contact,
        email,
        details,
        image,
        uniqueID,
      ]
    );

    if (result.rows.length === 0)
      return res.status(404).json("Buy listing not found.");

    res.json(result.rows[0]);
  } catch (err) {
    console.error("PUT Buy Error:", err.message);
    res.status(500).send("Server Error: Failed to update buy listing.");
  }
});

app.delete("/rent/:uniqueID", async (req, res) => {
  const { uniqueID } = req.params;

  try {
    const result = await pool.query(
      `DELETE FROM public."Rent" WHERE "uniqueID"=$1 RETURNING *`,
      [uniqueID]
    );

    if (result.rowCount === 0)
      return res.status(404).json("Rent listing not found.");

    res.status(204).send();
  } catch (err) {
    console.error("DELETE Rent Error:", err.message);
    res.status(500).send("Server Error: Failed to delete rent listing.");
  }
});

app.delete("/buy/:uniqueID", async (req, res) => {
  const { uniqueID } = req.params;

  try {
    const result = await pool.query(
      `DELETE FROM public."Buy" WHERE "uniqueID"=$1 RETURNING *`,
      [uniqueID]
    );

    if (result.rowCount === 0)
      return res.status(404).json("Buy listing not found.");

    res.status(204).send();
  } catch (err) {
    console.error("DELETE Buy Error:", err.message);
    res.status(500).send("Server Error: Failed to delete buy listing.");
  }
});

app.get("/", (req, res) => {
  res.send("Real Estate Backend is running ✔");
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
