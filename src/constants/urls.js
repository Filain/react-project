const baseURL = 'https://jsonplaceholder.typicode.com/'

const users = '/users';
const posts='/posts';
const comments='/comments'

const urls={
    users,
    posts,
    userById:{
        byId:(id)=>`${users}/${id}`
    },
    userPostByUserId:{
        byId:(id)=>`${users}/${id}/${posts}`
    }
    ,postById:{
        byId:(id)=>`${posts}/${id}`
    },
    postComments:{
        byId:(id)=>`${posts}/${id}${comments}`
    }
}
export {
    baseURL,
    urls
}