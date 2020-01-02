const express = require('express');
const router = express.Router();
router.get('/list', (req, res)=> {
  res.json({
    list: [
      {
        id: 1,
        name: 'lala'
      }
    ]
  })
})

module.exports = router;