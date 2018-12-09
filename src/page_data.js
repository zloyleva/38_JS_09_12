let current_page = 0;

export class PageData{
	static getCurrentPage(){
		return current_page;
	}

	static setCurrentPage(page){
		return current_page = page;
	}
}