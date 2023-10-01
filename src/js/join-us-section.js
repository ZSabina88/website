import { validate } from "./email-validator.js";
class JoinSection {
    constructor(mainblock = "", divforh = "", h2, h3 = "Sed do eiusmod tempor incididunt <br /> ut labore et dolore magna aliqua.", formelem = "", formSubscribe = "", formUnsubscribe = "", reseted = "UNSUBSCRIBE", email = "", submit) {
        this.mainblock = mainblock;
        this.divforh = divforh;
        this.h2 = h2;
        this.h3 = h3;
        this.formelem = formelem;
        this.formSubscribe = formSubscribe;
        this.formUnsubscribe = formUnsubscribe;
        this.reseted = reseted;
        this.email = email;
        this.submit = submit;



        let main = document.querySelector("#jsadd");
        main.innerHTML = this.mainblock;
        main.classList.add("app-bg", "app-section");

        let headingDiv = document.createElement("div");
        headingDiv.innerHTML = this.divforh;

        let head2 = document.createElement("h2");
        head2.innerHTML = this.h2;
        head2.classList.add("app-title");


        let head3 = document.createElement("h3");
        head3.innerHTML = this.h3;
        head3.classList.add("app-subtitle");

        headingDiv.append(head2);
        headingDiv.append(head3);

        let form = document.createElement("form");
        form.innerHTML = this.formelem;
        form.classList.add('mobile-form');

        let subField = document.createElement("div");
        subField.innerHTML = this.formSubscribe;

        let formMail = document.createElement("input");
        formMail.innerHTML = this.email;
        formMail.type = "email";
        formMail.name = "Email";
        formMail.id = "email";
        formMail.placeholder = "     Email";
        formMail.classList.add("input");

        let formSubmit = document.createElement("button");
        formSubmit.innerHTML = this.submit;
        formSubmit.type = "submit";
        formSubmit.classList.add("app-section__button", "app-section__button--read-more");

        let unsubField = document.createElement("div");
        unsubField.innerHTML = this.formUnsubscribe;


        let unsubButton = document.createElement("button");
        unsubButton.innerHTML = this.reseted;
        unsubButton.type = "reset";
        unsubButton.classList.add("app-section__button", "app-section__button--read-more");
        unsubButton.classList.add("app-section");

        form.append(subField);
        form.append(unsubField);
        subField.append(formMail);
        subField.append(formSubmit);
        unsubField.append(unsubButton);
        main.append(headingDiv);
        main.append(form);

        form.addEventListener('submit', function (e) {
            e.preventDefault();
            console.log(`Form submitted.`);
            const emailValue = formMail.value;
            validate(emailValue);
        });
        formSubmit.addEventListener("click", () => {
            localStorage.setItem("email", formMail.value);
            emailDisplayCheck();
        });


        unsubButton.addEventListener("click", () => {
            localStorage.removeItem("email");
            emailDisplayCheck();
        });

        function emailDisplayCheck() {
            if (localStorage.getItem("email")) {
                const mailInput = localStorage.getItem("email");
                head2.textContent = `User ${mailInput}, You have successfully subscribed!`;
                unsubField.style.display = "block";
                head2.style.fontSize = "32px";
                subField.style.display = "none";
            }
            else {
                head2.textContent = "Join Our Program";
                unsubField.style.display = "none";
                subField.style.display = "block";
            }
        };
        emailDisplayCheck();

    }

};


class Standard extends JoinSection {
    constructor(mainblock, divforh, h2 = "Join Our Program", h3, formelem, formSubscribe, formUnsubscribe, reseted, email, submit = "SUBSCRIBE") {
        super(mainblock, divforh, h2, h3, formelem, formSubscribe, formUnsubscribe, reseted, email, submit);

    }
}


class Advanced extends JoinSection {
    constructor(mainblock, divforh, h2 = "Join Our Advanced Program", h3, formelem, email, submit = "Subscribe to Advanced Program") {
        super(mainblock, divforh, h2, h3, formelem, email, submit);
    }
}

class SectionCreator {
    create(type) {
        if (type === "Standard") {
            return new Standard;
        }
        else if (type === "Advanced") {
            return new Advanced;
        }
    }
}

export { SectionCreator };
