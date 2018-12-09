const load_products = [
	{"name": "Snikers #1", "price": 103.50, "image": "bg-01.jpg", "description": "This is very cool snikers. Nice colorfull and quality"},
	{"name": "Snikers #2", "price": 152.14, "image": "bg-02.jpg", "description": "This is very cool snikers. Nice colorfull and quality"},
	{"name": "Snikers #3", "price": 202.22, "image": "bg-03.jpg", "description": "This is very cool snikers. Nice colorfull and quality"},
	{"name": "Snikers #4", "price": 240.00, "image": "bg-04.jpg", "description": "This is very cool snikers. Nice colorfull and quality"},
	{"name": "Snikers #5", "price": 180.30, "image": "bg-05.jpg", "description": "This is very cool snikers. Nice colorfull and quality"},
	{"name": "Snikers #6", "price": 186.50, "image": "bg-06.jpg", "description": "This is very cool snikers. Nice colorfull and quality"},
	
	{"name": "Snikers #7", "price": 111.60, "image": "bg-07.jpg", "description": "This is very cool snikers. Nice colorfull and quality"},
	{"name": "Snikers #8", "price": 169.64, "image": "bg-08.jpg", "description": "This is very cool snikers. Nice colorfull and quality"},
	{"name": "LeBron 16 #9", "price": 215.20, "image": "bg-09.jpg", "description": "This is very cool snikers. Nice colorfull and quality"},
	{"name": "Nike Zoom KD11 #10", "price": 245.00, "image": "bg-10.jpg", "description": "This is very cool snikers. Nice colorfull and quality"},
	{"name": "Snikers #11", "price": 109.30, "image": "bg-05.jpg", "description": "This is very cool snikers. Nice colorfull and quality"},
	{"name": "Snikers #12", "price": 198.50, "image": "bg-06.jpg", "description": "This is very cool snikers. Nice colorfull and quality"},
  
	{"name": "Snikers #13", "price": 128.69, "image": "bg-01.jpg", "description": "This is very cool snikers. Nice colorfull and quality"},
	{"name": "Snikers #14", "price": 179.00, "image": "bg-02.jpg", "description": "This is very cool snikers. Nice colorfull and quality"},
	{"name": "Snikers #15", "price": 260.20, "image": "bg-03.jpg", "description": "This is very cool snikers. Nice beautifull and quality"},
	{"name": "Snikers #16", "price": 301.20, "image": "bg-03.jpg", "description": "This is very cool snikers. Nice colorfull and quality"},
];

let products = [];

export class Data{

	static loadProducts(){
		return load_products;
	}

	static getProducts(){
		return products;
	}

	static setProducts(data){
		return products = data;
	}
	
}
