
import express from 'express';
import db from '../database';

const router = express.Router();

// Get all stores
router.get('/', (req, res) => {
  const sql = "SELECT * FROM Stores";
  db.all(sql, [], (err, rows) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }

    res.json({ stores: rows });
  });
});

export default router;
