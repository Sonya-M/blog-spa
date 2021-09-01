// GUIDE: https://jsonplaceholder.typicode.com/guide/

export const ALL_POSTS_ENDPOINT = "https://jsonplaceholder.typicode.com/posts";

// fetch single post by id: ALL_POSTS_ENDPOINT + "/" + id;
// fetch comments for post with id: ALL_POSTS_ENDPOINT + "/" + id + "/comments";
// (equivalent to /comments?postId=1)

export const ALL_USERS_ENDPOINT = "https://jsonplaceholder.typicode.com/users";

// Basic filtering is supported through query parameters.
// This will return all the posts that belong to the first user
// 'https://jsonplaceholder.typicode.com/posts?userId=1'
