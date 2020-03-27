import _snackService from "../Services/SnackService.js";
import _store from "../store.js"

function _drawSnacks(){
  let templete = " "
  let snacks = _store.State.Snacks

  snacks.forEach(snack => templete += snack.Template)
  document.getElementById("snackElem").innerHTML = templete
}

function _drawCoins(){
  document.getElementById("coins").innerText = _store.State.coins.toString()
}


export default class SnackControllers{
  constructor(){
    _drawCoins()
    _drawSnacks()
  }

  create(event){
    event.preventDefault()
    let formData = event.target
    let newSnack = {
      title: formData.snackName.value
    }
    _snackService.create(newSnack)
    _drawSnacks()
    formData.reset()
  }

  getCoins(){
    _snackService.getCoins()
    _drawCoins()
  }
}