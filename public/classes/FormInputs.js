import { Datas } from '../classes/Datas.js';
export class FormInput {
    constructor() {
        //On vient chercher notre form
        this.form = document.getElementById("form");
        // Notre select 
        this.type = document.getElementById("type");
        // Nos inputs
        this.firstName = document.getElementById("firstName");
        this.lastName = document.getElementById("lastName");
        this.adress = document.getElementById("address");
        this.country = document.getElementById("country");
        this.town = document.getElementById("town");
        this.zip = document.getElementById("zip");
        this.product = document.getElementById("product");
        this.price = document.getElementById("price");
        this.quantity = document.getElementById("quantity");
        this.tva = document.getElementById("tva");
        this.submitFormListner();
    }
    //Listners
    submitFormListner() {
        this.form.addEventListener('submit', this.handleFormSubmit.bind(this));
    }
    ;
    handleFormSubmit(e) {
        e.preventDefault();
        const inputs = this.inputData(); // Sois un array, sois undefined.
        if (Array.isArray(inputs)) {
            const [type, firstName, lastName, adress, country, town, zip, product, price, quantity, tva] = inputs;
            let docData;
            let date = new Date();
            docData = new Datas(type, firstName, lastName, adress, country, town, zip, product, price, quantity, tva, date);
            console.log(docData.htmlFormat());
        }
    }
    ;
    inputData() {
        const type = this.type.value;
        const firstName = this.firstName.value;
        const lastname = this.lastName.value;
        const adress = this.adress.value;
        const country = this.country.value;
        const town = this.town.value;
        const zip = this.zip.valueAsNumber;
        const product = this.product.value;
        const price = this.price.valueAsNumber;
        const quantity = this.quantity.valueAsNumber;
        const tva = this.tva.valueAsNumber;
        if (zip > 0 && price > 0 && quantity > 0 && tva > 0) {
            return [type, firstName, lastname, adress, country, town, zip, product, price, quantity, tva];
        }
        else {
            alert("Les valeurs numérique doivent être supérieur à 0");
            return;
        }
    }
}
