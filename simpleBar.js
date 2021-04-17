const package = options => {
    /********************Destructuring the parameters from the option object**************************/
    const {
        links,
        style,
        background,
        color,
        logo,
        logoType,
        pathType,
        logoColor,
        humburgerColor,
        fixed,
    } = options;

    /*********************Checking if fixed is true and apply the fixed class else we take it out*************/
    const navbar = document.querySelector("#navbar")
    fixed ? document.querySelector("nav").classList.add("fixed") : document.querySelector("nav").classList.remove("fixed")


    /********************checking if the logo is either text or an image*************************/
    let brand;
    if (logoType === "text") {
        brand = `<a href="${pathType}home" class="logo-text">${logo}</a>`
    } else if (logoType === "image") {
        brand = `<a href="${pathType}home" class="logo">
		 <img src=${logo} alt="logo-image" class="logo-image"/>
		 </a>`
    } else {
        alert("LogoType can only be text or image")
    }

    /********************************converting the list into into the list item with the anchor tag******/

    const li = links.map(link => {
        return (
            `<li class="list-item">
            <a class="link ${link}-link" href="${pathType}${link}">
            ${link}</a>
            </li>`
        )

    })

    /*************************************creating the humburger************************************/
    const humurger = `<i class="fa fa-bars menu"></i>`
    const _listContainer = document.createElement("ul")

    /*****************************************adding the parts into the nav element*********************/
    navbar.innerHTML += brand
    _listContainer.classList.add("list-container")
    _listContainer.innerHTML += li.join("");
    navbar.appendChild(_listContainer)
    navbar.innerHTML += humurger

    /****************************************Applying the the users color picks************************/
    navbar.style.backgroundColor = background

    const navLink = document.querySelectorAll(".link")
    const navbarBrand = document.querySelector(".logo-text")
    if (navbarBrand) {
        navbarBrand.style.color = logoColor

    }
    navLink.forEach(link => link.style.color = color)
    navLink.forEach(link => link.addEventListener("mouseover", () => {
            link.style.color = linkHoverColor
        }))
        /************************************************************************************* */
        /***************************************Targeting the humburger***********************************************/
    const menu = document.querySelector(".menu")
    menu.style.color = humburgerColor
    let action;
    menu.addEventListener("click", () => {
            if (menu.classList.contains("fa-bars")) {
                menu.classList.remove("fa-bars")
                menu.classList.add("fa-times")
                _slide(action)
            } else {
                menu.classList.add("fa-bars")
                _slide(action)
            }
        })
        /********************************************************************************************/

    /***************************Adding the style properties********************************/
    const bar = document.querySelector(".list-container")
    if (window.matchMedia("max-width:990px")) {


        switch (style) {
            case "slide-from-right":
                bar.classList.add("right");
                action = "slide-from-right"
                console.log("right")
                break;
            case "slide-from-left":
                action = "slide-from-left"
                bar.classList.add("left");
                break;
            case "drop":
                action = "drop-from-top"
                bar.classList.add("drop");
                break;
            default:
                break;
        }
    }
    /*****************************************************************/


    /**************actions**************/

    const _slide = (act) => {
            bar.classList.toggle(act)
        }
        /**************************add The hover propery****************/
}