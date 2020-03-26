import ValuesController from "./Controllers/ValuesController.js";
import SnackControllers from "./Controllers/SnackControllers.js"
class App {
  valuesController = new ValuesController();
  snackControllers = new SnackControllers()
}

window["app"] = new App();
