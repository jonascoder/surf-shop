const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
    res.render('index', { title: 'Surf Shop - Home' });
});
/* GET /register */
router.get('/register', (req, res, next) => {
    res.render('GET /register');
});
/* Post /register */
router.post('/register', (req, res, next) => {
    res.render('POST /register');
});
/* GET /login */
router.get('/login', (req, res, next) => {
    res.render('GET /login');
});
/* Post /login */
router.post('/login', (req, res, next) => {
    res.render('POST /login');
});
/* GET /profile */
router.get('/profile', (req, res, next) => {
    res.render('GET /profile');
});
/* PUT /profile/:user_id */
router.put('/profile/:user_id', (req, res, next) => {
    res.render('PUT /profile/:user_id');
});
/* GET /forgot */
router.get('/forgot', (req, res, next) => {
    res.render('GET /forgot');
});
/* PUT /forgot */
router.put('/forgot', (req, res, next) => {
    res.render('PUT /forgot');
});
/* GET /reset/:token */
router.get('/reset/:token', (req, res, next) => {
    res.render('GET /reset/:token');
});
/* PUT /reset */
router.put('/reset/:token', (req, res, next) => {
    res.render('PUT /reset/:token');
});

module.exports = router;