import VendingService from "../Services/VendingService.js";

let _vs = new VendingService()

function _draw() {
  document.getElementById("change").innerText = "$" + _vs.Change
}

export default class VendingController {
  constructor() {
    console.log("hello from vend controller");
  }
  buy(foodId) {
    _vs.buyFood(foodId)
    document.getElementById(foodId).setAttribute("disabled", "")
    setTimeout(() => {
      document.getElementById(foodId).removeAttribute("disabled")
      document.getElementById(foodId).checked = false
    }, 3000);
    _draw()


  }
}