import { Posts } from './post.model'
import { User } from './user.model'

export interface expandedUser {
    user: User;
    posts: Posts;
}