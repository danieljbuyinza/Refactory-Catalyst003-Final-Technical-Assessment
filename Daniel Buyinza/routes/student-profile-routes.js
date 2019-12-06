const express =  require('express');
const router = express.Router();

// Gets and displays a student page
router.get('/', (req, res) => {
    res.render('student-profile');
})


module.exports = router; 