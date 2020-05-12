export default class VendingMachine {
  constructor() {
    this.items = [
      {
        id: 'a1',
        price: .75,
        name: "Snickers"
      },
      {
        id: "a2",
        price: 1.25,
        name: "Mountain Dew"
      },
      {
        id: "a3",
        price: 2,
        name: "Cheetos"
      }]
    this.balance = 0
    console.log("Hello from vend model");

  }
}