import {Builder} from "./builder";

export class Login{
	constructor(per_page){
		this.element = document.getElementById("login_container");
	}

	createHtmlElement(){

		const labelEmail = Builder.createNewElement("label", "Email address", null,[{"name":"for", "value":"exampleInputEmail1"}]);
		const emailInput = Builder.createNewElement("input", null, "form-control",[
			{"name":"id", "value":"exampleInputEmail1"},
			{"name":"placeholder", "value":"Enter email"}
		]);
		const small = Builder.createNewElement("small", "We'll never share your email with anyone else.", "form-text text-muted",[{"name":"id", "value":"emailHelp"}]);

		let divEmail = Builder.attachChilderToParent(Builder.createNewElement("div", null, "form-group"), [labelEmail,emailInput,small]);


		const labelPass = Builder.createNewElement("label", "Password", null,[{"name":"for", "value":"exampleInputPassword1"}]);
		const passInput = Builder.createNewElement("input", null, "form-control",[
			{"name":"id", "value":"exampleInputPassword1"},
			{"name":"placeholder", "value":"Password"},
			{"name":"type", "value":"password"},
		]);

		let divPass = Builder.attachChilderToParent(Builder.createNewElement("div", null, "form-group"), [labelPass,passInput]);

		const button = Builder.createNewElement("button", "Login", "btn btn-primary",[{"name":"type", "value":"submit"}]);

		let form = Builder.attachChilderToParent(Builder.createNewElement("form", null, null, [{"name":"id", "value":"login_form"}]), [divEmail, divPass, button]);

		this.element.appendChild(form);

		document.getElementById("login_form").addEventListener("submit", this.submit, false);
	}

	submit(e){
		
		e.preventDefault();
        console.log("submit");
		// console.log(e.target[0].value);
		// console.log(e.target[1].value);
		//
		// console.log(/[a-zA-Z]{2,12}/.test(e.target[0].value));


		// Validation

		localStorage.setItem("isLogin", true);
		location = location.origin;
	}
}