const ulDom = document.getElementById('posts');
const baseUri = 'https://jsonplaceholder.typicode.com';
let post, user;
let posts = [];
let nPosts = 10;

function injectPosts(posts){
    posts.forEach(post => {
        const liDom = document.createElement('li');
        liDom.className = 'mb-3';
        liDom.innerHTML = `
        <div class="card">
            <h1 class="title mb-3">${post.post.title}</h1>
            <div>
                <h3 class="author mb-3">${post.user.name}</h3>
                <p class="content">${post.post.body}</p>
            </div>
        </div>
        `;
        ulDom.appendChild(liDom);
    });
}

async function getUserData(post) {

    const userCall = await fetch(baseUri + `/users/${post.id}`)
    let userResponse = userCall.json();
    userResponse.then((response)=>{
                user = response;
                posts.push({
                    post : post,
                    user : user
                })
            })
            .catch((err)=>{
                console.error(err);
            })
            .then(()=>{
                if(posts.length == nPosts){
                    injectPosts(posts)
                }
            });
}

async function getPostData(postId, callback) {

    const postCall = await fetch(baseUri + `/posts/${postId}`)
    let postResponse = postCall.json();
    postResponse.then((response)=>{
                post = response;
            })
            .catch((err)=>{
                console.error(err);
            })
            .then(()=>{
                callback(post)
            });
}

for (let i = 0; i < nPosts; i++) {
    getPostData(i+1, getUserData);
}