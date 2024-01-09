// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import PokemonService from "App/Services/PokemonService"

const tag ='PokemonController'
export default class PokemonController {
  async GetCards({request, response}) {
    try {
      console.log(`${tag}:: GetCards`)

      const page = parseInt(request.input('page', 1)); // Default to 1 if not provided
      const limit = parseInt(request.input('limit', 10)) // Default to 10 if not provided

      let data = await PokemonService.GetCards({page, limit})
      response.send(data)
    } catch (error) {
      throw error;
    }
  }
}
