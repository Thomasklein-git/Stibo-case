export async function getUsers() {
    return await (await fetch('https://jsonplaceholder.typicode.com/users')).json();
  }
  
  export async function getUserFromId(userId: string) {
    return await (await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)).json();
  }