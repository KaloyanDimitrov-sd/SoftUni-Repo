function loadCommits() {
    let username = document.getElementById("username");
    let repo = document.getElementById("repo");
    let commitsUl = document.getElementById("commits");

    window.addEventListener('unhandledrejection', function(e) {
        e.preventDefault();
    });

    window.addEventListener('rejectionhandled', function(e) {
        e.preventDefault();
    });
    
    fetch(`https://api.github.com/repos/${username.value}/${repo.value}/commits`)
        .then(response => {

            if (response.status >= 400) {
                throw response;
            };

            return response.json()
        })
        .then(data => {
            while(commitsUl.hasChildNodes()) {
                commitsUl.removeChild(commitsUl.lastChild);
            };

            for (let element of data) {
                let li = document.createElement("li");
                li.textContent = `${element.commit.author.name}: ${element.commit.message}`;
                commitsUl.appendChild(li);
            }
        })
        .catch(error => {
            let li = document.createElement("li");
            li.textContent = `Error: ${error.status} (${error.statusText})`;
            commitsUl.appendChild(li);
        });
};