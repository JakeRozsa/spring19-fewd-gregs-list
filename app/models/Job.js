export default class Job {
  constructor(data) {
    this.company = data.company
    this.jobTitle = data.jobTitle
    this.hours = data.hours
    this.rate = data.rate
    this.description = data.description
    this._id = data._id
  }

  draw() {
    return `
    <div class="col-12 col-md-3">
      <div class="card">
        <h2 class="card-header">${this.jobTitle}</h2>
        <h3>${this.company}</h3>
          <ul>
            <li>Rate/hr: $${this.rate}</li>
            <li>Hours/wk: ${this.hours}</li>
            <li>${this.description}</li>
          </ul>
          <button class="btn btn-danger btn-outline-dark" onclick="app.controllers.autosController.deleteAuto('${this._id}')">Delete Auto</button>
        </div>
      </div>
    </div>
    `
  }
}