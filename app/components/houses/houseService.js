import House from "../../models/House.js";

let houseAPI = axios.create({
  baseURL: "https://bcw-gregslist.herokuapp.com/api/houses/",
})

let _houses = []


export default class HouseService {
  constructor(drawCB) {
    this.drawCallback = drawCB
  }

  get houses() {
    return _houses.map(house => house)
  }

  addHouse(formData) {
    houseAPI.post('', formData)
      .then(() => {
        this.getHouses()
      })
      .catch(error => console.error(error))
  }

  getHouses() {
    houseAPI.get('')
      .then(res => {
        let housesFromAPI = res.data.data
        _houses = housesFromAPI.map(house => new House(house))
        this.drawCallback()
      })
  }

  deleteHouse(houseID) {
    houseAPI.delete(houseID)
      .then(res => {
        this.getHouses()
      })
      .catch(e => console.error(e))
  }
  placeBid(id) {
    let bidHouse = _houses.find(house => house._id == id)
    bidHouse.price += 1
    houseAPI.put(id, {
      price: bidHouse.price
    })
      .then(res => {
        console.log(res)
        this.getHouses()
      })
      .catch(e => console.error(e))
  }


}
