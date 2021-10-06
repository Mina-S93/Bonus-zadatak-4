let mobileMenu = document.querySelector(".mobile-navigation-show");
let mobileMenuItems = document.querySelectorAll(".mobile-menu li");
let openMenu = document.querySelector("#mobile-menu-open");
let closeMenu = document.querySelector("#x");
let labels = document.querySelectorAll(".feature-list label");
let questions = document.querySelectorAll(".question");

//Mobile navigation
openMenu.addEventListener("click", () => {
	mobileMenu.style.display = "flex";
});

closeMenu.addEventListener("click", () => {
	mobileMenu.style.display = "none";
});

mobileMenuItems.forEach((item) =>
	item.addEventListener("click", () => (mobileMenu.style.display = "none"))
);

//Undeline feature heading
labels.forEach((label) => {
	label.addEventListener("click", () => {
		[...label.parentElement.children].forEach((siblings) =>
			siblings.classList.remove("red")
		);
		label.classList.add("red");
	});
});

//Toogle FAQ answers
questions.forEach((question) => {
	question.addEventListener("click", () => {
		question.nextElementSibling.classList.toggle("block");
		question.querySelector("svg").classList.toggle("svg");
		question.querySelector("svg path").classList.toggle("path");
	});
});

//Form validation
let email = document.querySelector("input[type=text]");
let form = document.querySelector("form");
let label = document.querySelector("form label");
let message = document.createElement("p");
let error = document.createElement("img");
message.classList.add("messageClass");
error.src = `images/icon-error.svg`;
error.classList.add("error");

form.addEventListener("submit", (e) => {
	e.preventDefault();

	//Regular expression for validating email format
	let regex =
		/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	if (email.value == "") {
		message.innerText = "Make sure input field is not empty";
		label.appendChild(message);
		label.appendChild(error);
		label.style.backgroundColor = "#FA5959";
	} else if (!regex.test(email.value)) {
		message.innerText = "Whoops, make sure it's an email";
		label.appendChild(message);
		label.appendChild(error);
		label.style.backgroundColor = "#FA5959";
	} else {
		message.remove();
		error.remove();
		label.style.backgroundColor = "transparent";
	}
});
