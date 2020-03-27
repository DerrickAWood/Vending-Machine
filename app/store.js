import Value from "./Models/Value.js";
import Snack from "./Models/Snack.js"

let _state = {
  activeValue: new Value({ title: "Value" }),
  /** @type {Value[]} */
  values: [],
  /** @type {Snack[]} */
  Snacks: [],
  coins: 0,
  choices: [
    {
      name: 'fruit snacks',
      cost: 1
    },
    {
      name: 'candy',
      cost: 2
    }
  ]
};

class Store {
  /**
   * Provides access to application state data
   */
  get State() {
    return _state;
  }
}

const STORE = new Store();
export default STORE;


