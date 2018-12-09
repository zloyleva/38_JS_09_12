import {Builder} from "./builder";
import {PageData} from "./page_data";
import {Data} from "./data";
import {Catalog} from "./catalog";

export class Pagination{
	constructor(per_page){
		this.element = document.getElementById("pagination");
		this.pagination_buttons = document.getElementsByClassName("page-link");
		this.per_page = per_page;
	}

	createPagination(array_products, current_page){
		this.element.innerHTML = "";
		const ul = Builder.createNewElement("ul", null, "pagination");
		for(let i = 0; i < Math.ceil(array_products.length / this.per_page); i++){
			const link = Builder.createNewElement("a", i+1, "page-link",[{"name":"data-link", "value":i}]);
	
			const classNameLi = (i == current_page)?"page-item active":"page-item";
			const li = Builder.attachChilderToParent(Builder.createNewElement("li", null, classNameLi), [link]);
	
			ul.appendChild(li);
		}
		this.element.appendChild(ul);
	
		const catalog = new Catalog(this.per_page);

		Array.from(this.pagination_buttons).map((el)=>{
			el.addEventListener("click", (e)=>{
				PageData.setCurrentPage(e.target.dataset.link);
				catalog.renderProducts(Data.setProducts(Data.loadProducts()), PageData.getCurrentPage());
			});
		});
	
		// Array.from(document.getElementsByClassName("product_more")).map((el)=>{
		// 	el.addEventListener("click", eventHandle, false);
		// });
	}
}