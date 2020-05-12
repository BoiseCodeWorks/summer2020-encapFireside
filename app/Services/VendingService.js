import VendingMachine from "../Models/VendingMachine.js";

let _vm = new VendingMachine()

export default class VendingService {
  buyFood(foodId) {
    let foodItem = _vm.items.find(f => f.id == foodId)
    console.log(foodItem);

    _vm.balance -= foodItem.price
    console.log(_vm.balance);
  }

  get Change() {
    return _vm.balance
  }

  constructor() {
    console.log("Hello from vend Serv");
  }

}