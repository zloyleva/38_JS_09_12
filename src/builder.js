export class Builder{
	static createNewElement(tag, innerContent=null, classStr=null, attr=null){
		var el = document.createElement(tag);
		el.innerHTML = (innerContent)?innerContent:"";
		el.className = (classStr)?classStr:"";
	
		if(attr){
			attr.map((attr_rl)=>el.setAttribute(attr_rl.name, attr_rl.value));
		}
	
		return el;
	}

	static attachChilderToParent(html, array_el){
		array_el.filter(el=>!!el).map((el)=>html.appendChild(el));
		return html;
	}
}