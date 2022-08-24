import { getUserPostsFromId } from "../services/post.service";
import { getUserFromId } from "../services/user.service";

class UserWithPostsController {
    static async getUserWithPosts(id: string) {
        const user = await getUserFromId(id);
        const posts = await getUserPostsFromId(id);

        return {user, posts};
    }
}

export default UserWithPostsController;