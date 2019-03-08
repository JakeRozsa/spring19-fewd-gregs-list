import JobService from "./jobService.js";

let _js = new JobService(drawJobs)

function drawJobs() {
  let jobs = _js.jobs
  let template = ""
  jobs.forEach(job => {
    template += job.draw()
  })
  document.querySelector("#listings").innerHTML = template;
}

export default class JobController {
  constructor() {

  }

  addJob(event) {
    event.preventDefault()
    console.log(event)
    let form = event.target
    let formData = {
      company: form.company.value,
      job: form.jobTitle.value,
      hours: form.hours.value,
      rate: form.rate.value,
      description: form.description.value
    }
    form.reset()
    _js.addJob(formData)
    drawJobs()
  }

  displayJobsForm() {
    let template = `
    <form onsubmit="app.controllers.jobController.addJob(event)" class="p-3">
    <!-- form-group is a bootstrap class to style labels and inputs -->
    <div class="form-group">
      <label for="rate">Rate</label>
      <input required type="number" name="rate">
    </div>
    <div class="form-group">
      <label for="hours">Hours</label>
      <input required type="number" name="hours">
    </div>
    <div class="form-group">
      <label for="job">Job</label>
      <input type="text" name="job">
    </div>
    <div class="form-group">
      <label for="company">Company</label>
      <input required type="text" name="company">
    </div>
    <div class="form-group">
      <label for="description">Description</label>
      <textarea rows="4" type="text" name="description"></textarea>
    </div>
    <div class="d-flex">
      <button type="submit">Create Listing</button>
      <button type="button" class="btn btn-info" onclick="app.controllers.jobController.viewListings()">View Job Listings</button>
    </div>
  </form>
    `
    document.querySelector(".form-dropzone").innerHTML = template
  }

  deleteJob(id) {
    _js.deleteJob(Jobid)
  }

  viewListings() {
    _js.getJobs()
  }
}