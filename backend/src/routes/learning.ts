
import express from 'express';
import db from '../database';

const router = express.Router();

// Get all learning modules
router.get('/', (req, res) => {
  const sql = "SELECT * FROM LearningModules";
  db.all(sql, [], (err, rows) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }

    res.json({ learningModules: rows });
  });
});

export default router;
