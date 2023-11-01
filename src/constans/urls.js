const baseURL = 'https://jsonplaceholder.typicode.com'

const user = '/users';
const post = '/posts';

const urls={
    user,
    page:{
        byUserId:(userId)=>`${user}/${userId}${post}`
    }
}

export {
    baseURL,
    urls
}