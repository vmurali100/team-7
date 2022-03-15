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


function createPost(post){
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            posts.push(post);
            const error = false;
            if(!error){
                resolve();
            } else {
                reject('Error: something went wrong');
            }
        }, 2000);
    });
}
// createPost({title: 'Post Three', body: 'This is post three'}).then(getPosts).catch(err=> console.log(err));

const promise1 = Promise.resolve('Hello world');
const promise2 = 10;
const Promise3 = new Promise((resolve,reject) =>{
    setTimeout(resolve, 2000, 'Goodbye')
});
Promise.all([promise1, promise2, promise3]).then(values =>console.log(values));

