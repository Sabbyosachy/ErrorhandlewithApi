fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json())
    .then(data => SetPost(data));

const SetPost = (posts) => {
    const DivContainer = document.getElementById('PostContainer');
    for (const Post of posts) {
        console.log(Post);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `   
        <div class="card">
        <h3 class="card-title">${Post.title}</h3>
            <div class="card-body">
                <h5>${Post.id}</h5>
                <h5>${Post.userId}</h5>
                <p class="card-text">${Post.body}</p>
            </div>
        </div>`;

        DivContainer.appendChild(div);

    }
}