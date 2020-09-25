function loadRepos() {

	let username = document.getElementById("username").value;

	fetch(`https://api.github.com/users/${username}/repos`)
		.then(function(response) {
			if (response.status >= 400) {
				throw new TypeError("Not Found");
			}
			return response.json();
		})
		.then(function (data) {
			let href = document.querySelector("#repos > li > a");
			let obj = data.shift();
			href.setAttribute("href", `${obj.html_url}`);
			href.textContent = obj.full_name
			for (let element of data) {
				let a = document.createElement("a");
				let li = document.createElement("li");
				let ul = document.getElementById("repos");
				a.setAttribute("href", element.html_url);
				a.textContent = element.full_name;
				li.appendChild(a);
				ul.appendChild(li);
			}
			console.log();
		})
		.catch(function (err) {
			
		})
}