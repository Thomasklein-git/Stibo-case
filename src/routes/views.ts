import express from 'express'
import path from 'path'

const router = express.Router();

router.get('/', (req, res) => {
    res.sendFile(path.resolve('src','views','index.html'))
});

router.get('/user/:id', (req, res) => {
    res.sendFile(path.resolve('src','views','user.html'))
});

export default router;