import express from 'express';
const router = express.Router();
router.post('/login', (req, res) => {
    res.status(200).send('Login');
});
router.post('/register', (req, res) => {
    res.status(200).send('Register');
});
export { router };
