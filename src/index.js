import {Data} from "./data";
import {Config} from "./config";
import {Catalog} from "./catalog";
import {Pagination} from "./pagination"
import {Login} from "./login"
import {PageTitle} from "./pageTitle"
import {Navigation} from "./navigation"


const isLogin = localStorage.getItem("isLogin");

const event = new Event("changePage");

new Navigation("pageNav",event).renderHtmlElement(isLogin);
new PageTitle("pageTitle").renderHtmlElement(isLogin);



window.onpopstate = function (e) {
    console.log("location.pathname",location.pathname);
};
//LISTENER ->
window.addEventListener("changePage", (e)=>{
    console.log("changePage",location.pathname);



}, false);


switch (location.hash) {
	case "#logout":
        localStorage.removeItem("isLogin");
        localStorage.removeItem("token");
        location = location.origin;
	case "#cart":
        console.log(location.hash);
	default:
        if(isLogin){
            const per_page = 6;

            Data.loadProducts()
                .then(res => {
                    console.log(res);
                    new Catalog(per_page).renderProducts(Data.setProducts(res.data), Config.getCurrentPage());
                    new Pagination(per_page).createPagination(Data.getProducts(), Config.getCurrentPage());
                }); // Todo add catch

        }else{
            new Login().createHtmlElement();
        }
}


