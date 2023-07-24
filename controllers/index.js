const router = require('express').Router();
const apiRoute = require('./api');
const homeRoute = require('./homeroute');
const dashboardRoute = require('./dashboardroute');

router.use('/api', apiRoute);
router.use('/', homeRoute);
router.use('/dashboard', dashboardRoute);

router.use((req, res) => {
    res.status(404).end();
});

module.exports = router;