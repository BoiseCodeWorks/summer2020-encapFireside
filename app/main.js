import VendingController from "./Controllers/VendingController.js";


class App {
  constructor() {
    console.log("main is linked");
    this.vendingController = new VendingController()
  }
}

window["app"] = new App()