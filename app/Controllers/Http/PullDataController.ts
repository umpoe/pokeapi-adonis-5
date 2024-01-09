// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import PullDataService from "App/Services/PullDataService"

const tag ='PullDataController'
export default class PullDataController {
  async GetCards() {
    try {
      console.log(`${tag}:: GetCards`)
      await PullDataService.PullProcessData()

      return "Finished pulling cards data"
    } catch (error) {
      throw error;
    }
  }
}
