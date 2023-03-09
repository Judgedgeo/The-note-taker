const router = require('express').Router();
const notesRouter = require('./notes');
// /took away notes

router.use(notesRouter);




module.exports = router;