import {Data} from "./data";
import {PageData} from "./page_data";
import {Catalog} from "./catalog";
import {Pagination} from "./pagination"
import {Login} from "./login"
import {PageTitle} from "./pageTitle"
import {Navigation} from "./navigation"


const isLogin = localStorage.getItem("isLogin");

new Navigation("pageNav").renderHtmlElement(isLogin);
new PageTitle("pageTitle").renderHtmlElement(isLogin);


switch (location.hash) {
	case "#logout":
        localStorage.removeItem("isLogin");
        location = location.origin;
	case "#cart":
        console.log(location.hash);
	default:
        if(isLogin){
            const per_page = 6;

            new Catalog(per_page).renderProducts(Data.setProducts(Data.loadProducts()), PageData.getCurrentPage());
            new Pagination(per_page).createPagination(Data.getProducts(), PageData.getCurrentPage());
        }else{
            new Login().createHtmlElement();
        }
}


