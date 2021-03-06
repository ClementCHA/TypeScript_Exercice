import { HasHtmlFormat } from '../interfaces/HasHtmlFormat.js';
import { Datas } from '../classes/Datas.js'


export class FormInput {

  form: HTMLFormElement;
  type: HTMLSelectElement;
  lastName: HTMLInputElement;
  firstName: HTMLInputElement;
  adress: HTMLInputElement;
  country: HTMLInputElement;
  town: HTMLInputElement;
  zip: HTMLInputElement;
  product: HTMLInputElement;
  price: HTMLInputElement;
  quantity: HTMLInputElement;
  tva: HTMLInputElement;

  constructor() {
    //On vient chercher notre form
    this.form = document.getElementById("form") as HTMLFormElement;

    // Notre select 
    this.type = document.getElementById("type") as HTMLSelectElement;

    // Nos inputs
    this.firstName = document.getElementById("firstName") as HTMLInputElement;
    this.lastName = document.getElementById("lastName") as HTMLInputElement;
    this.adress = document.getElementById("address") as HTMLInputElement;
    this.country = document.getElementById("country") as HTMLInputElement;
    this.town = document.getElementById("town") as HTMLInputElement;
    this.zip = document.getElementById("zip") as HTMLInputElement;
    this.product = document.getElementById("product") as HTMLInputElement;
    this.price = document.getElementById("price") as HTMLInputElement;
    this.quantity = document.getElementById("quantity") as HTMLInputElement;
    this.tva = document.getElementById("tva") as HTMLInputElement;

    this.submitFormListner();
  }

  //Listners
  private submitFormListner(): void {
    this.form.addEventListener('submit', this.handleFormSubmit.bind(this))
  };

  private handleFormSubmit(e: Event) {
    e.preventDefault();

    const inputs = this.inputData(); // Sois un array, sois undefined.

    if (Array.isArray(inputs)) {
      const [type, firstName, lastName, adress, country, town, zip, product, price, quantity, tva] = inputs;
      let docData: HasHtmlFormat;
      let date: Date = new Date();

      docData = new Datas(type, firstName, lastName, adress, country, town, zip, product, price, quantity, tva, date)
      console.log(docData.htmlFormat())
    }
  };

  private inputData(): [string, string, string, string, string, string, number, string, number, number, number] | void {
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
      return [type, firstName, lastname, adress, country, town, zip, product, price, quantity, tva]
    } else {
      alert("Les valeurs num??rique doivent ??tre sup??rieur ?? 0")
      return;
    }
  }
}
