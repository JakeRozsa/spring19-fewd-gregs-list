import Job from "../../models/Job.js";

let jobAPI = axios.create({
  baseURL: "https://bcw-gregslist.herokuapp.com/api/jobs/"
})

let _jobs = []


export default class JobService {
  constructor(drawCB) {
    this.drawCallback = drawCB
  }

  get jobs() {
    return _jobs.map(job => job)
  }

  addJob(formData) {
    jobAPI.post('', formData)
      .then(() => {
        this.getJobs()
      })
      .catch(error => console.error(error))
  }

  getJobs() {
    jobAPI.get('')
      .then(res => {
        let jobsFromAPI = res.data.data
        _jobs = jobsFromAPI.map(job => new Job(job))
        this.drawCallback()
      })
  }

  deleteJob(jobID) {
    jobAPI.delete(jobID)
      .then(res => {
        this.getJobs()
      })
      .catch(e => console.error(e))
  }


}