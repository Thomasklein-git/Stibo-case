export async function getUserPostsFromId(userId: string) {
    return await (await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)).json();
}