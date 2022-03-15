const posts = [
    {title: 'post one', body: 'this is post one'},
    {title: 'post two', body: 'this is post two'}
];
function getPosts(){
    setTimeout(() =>{
        let k = '';
        posts.forEach((post,index) =>{
            k+= `<li>${post.title}</li>`;
        });
        document.body.innerHTML = k;


    }, 1000);
}
getPosts();
function createPost(post, callback) {
    setTimeout(()=>{
        posts.push(post);
        callback();
    }, 2000);
}
createPost({title: 'Post three', body: 'this is post three'}, getPosts);