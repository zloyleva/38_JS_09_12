import {Builder} from "./builder";
import {Data} from "./data";
import {PageData} from "./page_data";
import {Pagination} from "./pagination"

export class Catalog{
	constructor(per_page){
		this.element = document.getElementById("catalog");
		this.per_page = per_page;
	}

	createCard(product, index){
		let link = Builder.createNewElement("a", "Add to cart", "btn btn-primary",[{"name":"href", "value":"#"}]);
		let show_more = Builder.createNewElement("a", "More", "btn btn-success product_more",[{"name":"href", "value":"#"}, {"name":"data-id", "value":index}]);
		let p = Builder.createNewElement("p", product.description, "card-text");
		let title = Builder.createNewElement("h5", product.name, "card-title");
	
		let cardBody = Builder.attachChilderToParent(Builder.createNewElement("div", null, "card-body"), [title,p,link,show_more]);
	
		let image = Builder.createNewElement("img", null, "card-img-top", [{"name":"src", "value":"images/"+product.image},{"name":"alt", "value":product.name}]);
	
		let card = Builder.attachChilderToParent(Builder.createNewElement("div", null, "card"), [image,cardBody]);
	
		let catalogItem = Builder.attachChilderToParent(Builder.createNewElement("div", null, "col-lg-3 col-md-6 mb-2 catalog-item"), [card]);
	
		return catalogItem;
	}

	startFromFirstProducts(){
		return this.current_page*this.per_page;
	}

	isLastProductInPage(i,array_products){
		return i < this.current_page*this.per_page + this.per_page && i < array_products.length;
	}

	renderProducts(array_products, current_page){
		this.current_page = current_page;
		this.element.innerHTML = "";
		for(let i = this.startFromFirstProducts(); this.isLastProductInPage(i,array_products); i++){
			this.element.appendChild(this.createCard(array_products[i],i));
		}
		const pagination = new Pagination(this.per_page);
		pagination.createPagination(Data.getProducts(), PageData.getCurrentPage());
	}
}