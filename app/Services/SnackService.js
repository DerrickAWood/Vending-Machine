import _store from "../store.js";
import Snack from "../Models/Snack.js"

console.log('service');


class SnackService {
  getCoins() {
    _store.State.coins++
  }
  create(newSnackData) {
    let newSnack = new Snack(newSnackData)
    _store.State.Snacks.push(newSnack)
    console.log(_store.State.Snacks);
    
  }
}

const SERVICE = new SnackService();
export default SERVICE;
