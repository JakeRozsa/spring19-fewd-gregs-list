import AutosController from "./components/autos/autos-controller.js";
import HouseController from "./components/houses/houseController.js";
import JobController from "./components/jobs/jobController.js";

//javascript entry point

class App {
  constructor() {
    this.controllers = {
      autosController: new AutosController(),
      houseController: new HouseController(),
      jobController: new JobController()
    }
    console.log("hello from main")
  }
}

window['app'] = new App()