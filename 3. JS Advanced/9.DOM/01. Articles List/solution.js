function createArticle() {
	
	let title = document.getElementById("createTitle");
	let content = document.getElementById("createContent");
	if (title.value !== "" && content.value !== "") {
		let h3 = document.createElement("h3");
		let p = document.createElement("p");
		let article = document.createElement("article");
		h3.innerHTML = title.value;
		p.textContent = content.value;
		let section = document.getElementById("articles");
		article.appendChild(h3);
		article.appendChild(p);
		section.appendChild(article);
	}
	title.value = "";
	content.value = "";
}