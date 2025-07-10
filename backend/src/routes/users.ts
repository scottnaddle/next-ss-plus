
import express from 'express';
import db from '../database';

const router = express.Router();

// Get user by ID
router.get('/:id', (req, res) => {
  const { id } = req.params;

  const sql = "SELECT * FROM Users WHERE id = ?";
  db.get(sql, [id], (err, user) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.json({ user });
  });
});

export default router;
