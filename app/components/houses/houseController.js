import HouseService from "./houseService.js";

let _hs = new HouseService(drawHouses)

function drawHouses() {
  let houses = _hs.houses
  let template = ""
  houses.forEach(house => {
    template += house.draw()
  })
  document.querySelector("#listings").innerHTML = template;
}


export default class HouseController {
  constructor() {

  }

  addHouse(event) {
    event.preventDefault()
    console.log(event)
    let form = event.target
    let formData = {
      price: form.price.value,
      year: form.year.value,
      bedrooms: form.bedrooms.value,
      bathrooms: form.bathrooms.value,
      img: form.imgUrl.value,
      description: form.description.value
    }
    form.reset()
    _hs.addHouse(formData)
    drawHouses()
  }

  displayHousesForm() {
    let template = `
    <form onsubmit="app.controllers.houseController.addHouse(event)" class="p-3">
    <!-- form-group is a bootstrap class to style labels and inputs -->
    <div class="form-group">
      <label for="price">Price</label>
      <input required type="number" name="price">
    </div>
    <div class="form-group">
      <label for="year">Year</label>
      <input required type="number" name="year">
    </div>
    <div class="form-group">
      <label for="bedrooms">Bedrooms</label>
      <input type="number" name="bedrooms">
    </div>
    <div class="form-group">
      <label for="bathrooms">Bathrooms</label>
      <input required type="number" name="bathrooms">
    </div>
    <div class="form-group">
      <label for="img">Image</label>
      <input type="url" name="img">
    </div>
    <div class="form-group">
      <label for="description">Description</label>
      <textarea rows="4" type="text" name="description"></textarea>
    </div>
    <div class="d-flex">
      <button type="submit">Create Listing</button>
      <button type="button" class="btn btn-info" onclick="app.controllers.houseController.viewListings()">View House Listings</button>
    </div>
  </form>
    `
    document.querySelector(".form-dropzone").innerHTML = template
  }

  deleteHouse(id) {
    _hs.deleteHouse(houseID)
  }

  placeBid(id) {
    _hs.placeBid(id)
  }

  viewListings() {
    _hs.getHouses()
  }
}