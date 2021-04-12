const package = n => {
    const { links, style, background, color, logo, logoType, pathType } = n;
    const navbar = document.querySelector("#navbar")
    let brand;

    if (logoType === "text") {
        brand = `<a href="/home" class="logo">${logo}</a>`
    } else if (logoType === "image") {
        brand = `<a href="/home" class="logo">
		 <img src=${logo} alt="logo-image"/>
		 </a>`
    } else {
        alert("LogoType can only be text or image")
    }


    const li = links.map(link => {
        return (
            `<li ><a class="link" href="${pathType}${link}">${link}</a></li>`
        )
    })
    const _listContainer = document.createElement("ul")
    _listContainer.innerHTML = brand
    _listContainer.classList.add("list-container")
    _listContainer.innerHTML += li.join("");
    navbar.appendChild(_listContainer)
}