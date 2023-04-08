const express = require("express");
const router = express.Router();
const pool = require("../db");

// @route     GET getUserInfo/:id
// @desc      Get single user info on app load
// @access    Private
router.get('/getUserInfo/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const expense = await pool.query('SELECT u.id, u.email, p.type, p.firstname, p.lastname ' +
     'FROM users as u INNER JOIN user_profile as p on u.id = p.id where u.id =$1', [id]);

    res.json(expense.rows[0]);
  } catch (error) {
    console.log(error.message);
  }
});

module.exports = router;