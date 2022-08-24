import express from 'express';
import UserController from '../controllers/user';
import UserWithPostsController from '../controllers/userwithposts';

const router = express.Router();

router.get('/', async (req, res) => {
    const users = await UserController.getUsers();
    res.json({
        users
    });
});

router.get('/:userId', async (req, res) => {
    const userWithPosts = await UserWithPostsController.getUserWithPosts(req.params.userId);
    res.json(userWithPosts); 
});

export default router;