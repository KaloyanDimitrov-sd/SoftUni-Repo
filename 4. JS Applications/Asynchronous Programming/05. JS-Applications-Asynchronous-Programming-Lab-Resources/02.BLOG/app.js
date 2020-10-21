function attachEvents() {
    let postsSelect = document.getElementById("posts");
    let btnLoadPosts = document.getElementById("btnLoadPosts");
    let btnView = document.getElementById("btnViewPost");
    let postTitle = document.getElementById("post-title");
    let postBody = document.getElementById("post-body");
    let postComments = document.getElementById("post-comments");
    btnLoadPosts.addEventListener("click", loadPosts);
    btnView.addEventListener("click", viewPost);

    function loadPosts() {
        fetch("https://blog-apps-c12bf.firebaseio.com/posts.json")
            .then(response => response.json())
            .then(data => {
                for (let key in data) {
                    let option = document.createElement("option");
                    option.setAttribute("value", key);
                    option.textContent = data[key].title;
                    postsSelect.appendChild(option);
                };
            });
    };

    function viewPost() {
        let postId = postsSelect.value;
        fetch(`https://blog-apps-c12bf.firebaseio.com/posts/${postId}.json`)
            .then(response => response.json())
            .then(data => {
                while (postBody.hasChildNodes()) {
                    postBody.removeChild(postBody.lastChild);
                };

                while (postComments.hasChildNodes()) {
                    postComments.removeChild(postComments.lastChild);
                }

                postTitle.textContent = data.title;
                let p = document.createElement("p");
                p.textContent = data.body;
                postBody.appendChild(p);

                for (let element of data.comments) {
                    let comment = document.createElement("li");
                    comment.textContent = element.text;
                    postComments.appendChild(comment);
                }
            })
    }
};

attachEvents();