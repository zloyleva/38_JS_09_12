let current_page = 0;

const server_url = "http://localhost:9000";

export class Config{
	static getCurrentPage(){
		return current_page;
	}

	static setCurrentPage(page){
		return current_page = page;
	}

    static getServerUrl(){
        return server_url;
    }
}