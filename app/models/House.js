export default class House {
  constructor(data) {
    this.price = data.price
    this.year = data.year
    this.bedrooms = data.bedrooms
    this.bathrooms = data.bathrooms
    this.imgUrl = data.imgUrl
    this.description = data.description
    this._id = data._id
  }

  draw() {
    return `
    <div class="col-12 col-md-3">
      <div class="card">
        <img src="${this.imgUrl}" alt="house photo" class="card-img-top">
        <h2 class="card-header">${this.bedrooms}-bed  ${this.bathrooms}-bath </h2>
    <div class="card-body">
      <ul>
        <li>Price: $${this.price.toFixed(2)}</li>
        <li>Year: ${this.year}</li>
        <li>${this.description}</li>
      </ul>
      <button class="btn btn-success" onclick="app.controllers.autosController.placeBid('${this._id}')">Place Bid</button>
      <button class="btn btn-danger btn-outline-dark" onclick="app.controllers.autosController.deleteAuto('${this._id}')">Delete Auto</button>
    </div>
      </div >
    </div >
  `
  }
}