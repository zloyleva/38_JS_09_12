import {Builder} from "./builder";

export class PageTitle {

    constructor(id){
        this.element = document.getElementById(id);
    }

    createHtmlElement(isLogin){
        const title = isLogin?"Catalog":"Login";

        const h1 = Builder.createNewElement("h1", title, null);
        const h1Div = Builder.attachChilderToParent(Builder.createNewElement("div", null, "col"), [h1]);
        const h1Row = Builder.attachChilderToParent(Builder.createNewElement("div", null, "row my-3"), [h1Div]);

        let searchRow = null;
        if(isLogin){
            const inputSearch = Builder.createNewElement("input", null, "form-control mr-sm-2",[
                {name:"id", value:"s"},
                {name:"type", value:"search"},
                {name:"placeholder", value:"Search"},
                {name:"aria-label", value:"Search"},
            ]);
            const button = Builder.createNewElement("button", "Search", "btn btn-outline-success my-2 my-sm-0", [{name:"id", value:"search"}]);
            const searchDiv = Builder.attachChilderToParent(Builder.createNewElement("div", null, "form-inline my-2 col"), [inputSearch, button]);
            searchRow = Builder.attachChilderToParent(Builder.createNewElement("div", null, "row"), [searchDiv]);
        }

        return Builder.attachChilderToParent(Builder.createNewElement("div", null, null), [h1Row, searchRow]);
    }

    renderHtmlElement(isLogin){
        this.element.appendChild(this.createHtmlElement(isLogin));
    }
}