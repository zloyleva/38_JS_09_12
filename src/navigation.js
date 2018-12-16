import {Builder} from "./builder";

export class Navigation {
    constructor(id,event){
        this.element = document.getElementById(id);
        this.event = event;
    }

    createHtmlElement(isLogin){

        const brandLink = Builder.createNewElement("a", "E-Store", "navbar-brand router-spa",[{name:"href", value:""}]);
        const spanToggler = Builder.createNewElement("span", null, "navbar-toggler-icon");
        const buttonToggler = Builder.attachChilderToParent(Builder.createNewElement("button", null, "navbar-toggler", [{name:"id", value:"buttonToggler"}]), [spanToggler]);

        const menuList = [
            {title:"Home", link: "home"},
            {title:"Catalog", link: "catalog"},
            {title:"Cart", link: "cart"},
            {title:"Orders", link: "orders"},
        ];

        if(isLogin){
            menuList.push({title:"Logout", link: "?#logout"})
        }

        const liList = menuList.map(el => {
            const a = Builder.createNewElement("a", el.title, "nav-link router-spa",[{name:"href", value:el.link}]);
            return Builder.attachChilderToParent(Builder.createNewElement("li", null, "nav-item"), [a]);
        });

        const ulHtml = Builder.attachChilderToParent(Builder.createNewElement("ul", null, "navbar-nav"), liList);
        const navbarCollapse = Builder.attachChilderToParent(Builder.createNewElement("div", null, "collapse navbar-collapse justify-content-end", [{name:"id", value:"navbarCollapse"}]), [ulHtml]);

        return Builder.attachChilderToParent(Builder.createNewElement("nav", null, "navbar navbar-expand-lg navbar-dark bg-dark"), [brandLink, buttonToggler, navbarCollapse]);;
    }

    renderHtmlElement(isLogin){
        this.element.appendChild(this.createHtmlElement(isLogin));

        document.getElementById("buttonToggler").addEventListener("click", (e) => {
            document.getElementById("navbarCollapse").classList.toggle("show")
        });

        Array.from(document.getElementsByClassName("router-spa")).map(el => {
            el.addEventListener("click", (e) => {
                console.log();
                e.preventDefault();
                window.history.pushState({page: e.target.getAttribute("href")}, e.target.getAttribute("href"), `/${e.target.getAttribute("href")}`);

            //    FIRE!!!!!!!! <---
            window.dispatchEvent(this.event);
            });
        });
    }
}