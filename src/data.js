import {Config} from "./config";

let products = [];

export class Data{

	static loadProducts(){

        return fetch(`${Config.getServerUrl()}/products`)
            .then(res => res.json());
	}

	static getProducts(){
		return products;
	}

	static setProducts(data){
		return products = data;
	}
	
}
