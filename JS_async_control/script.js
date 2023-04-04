let id = Math.floor(Math.random() * 10);
const baseUri = 'https://jsonplaceholder.typicode.com';
let post, user;

async function getUserData() {

    const userCall = await fetch(baseUri + `/users/${post.id}`)
    let userResponse = userCall.json();
    userResponse.then((response)=>{
                user = response;
            })
            .catch((err)=>{
                console.error(err);
            })
            .then(()=>{
                console.log('user',user);
            });
}

async function getPostData(callback) {

    const postCall = await fetch(baseUri + `/posts/${id}`)
    let postResponse = postCall.json();
    postResponse.then((response)=>{
                post = response;
            })
            .catch((err)=>{
                console.error(err);
            })
            .then(()=>{
                console.log('post',post);
                callback()
            });
}

getPostData(getUserData);