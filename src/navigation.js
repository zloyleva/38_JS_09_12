import {Builder} from "./builder";

export class Navigation {
    constructor(id){
        this.element = document.getElementById(id);
    }

    createHtmlElement(isLogin){

        const brandLink = Builder.createNewElement("a", "E-Store", "navbar-brand",[{name:"href", value:"/"}]);
        const spanToggler = Builder.createNewElement("span", null, "navbar-toggler-icon");
        const buttonToggler = Builder.attachChilderToParent(Builder.createNewElement("button", null, "navbar-toggler", [{name:"id", value:"buttonToggler"}]), [spanToggler]);

        const menuList = [
            {title:"Home", link: "#"},
            {title:"Link", link: "#"},
        ];

        if(isLogin){
            menuList.push({title:"Logout", link: "?#logout"})
        }

        const liList = menuList.map(el => {
            const a = Builder.createNewElement("a", el.title, "navbar-brand",[{name:"href", value:el.link}]);
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
        })
    }
}