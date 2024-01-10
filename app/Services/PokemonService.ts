import axios from 'axios';
import Pokemon from 'App/Models/Pokemon';
import PokemonDetail from 'App/Models/PokemonDetail';
import Database from '@ioc:Adonis/Lucid/Database'

const tag ='PokemonService'

class PokemonService {
  async GetCards({page, limit}) {
    try {
      console.log(`${tag} :: GetCards`)
      let pokemons = await Database.from('pokemons').paginate(page, limit)
      let pokemons_ = pokemons.toJSON()
      const {meta, data} = pokemons_
     let { perPage, currentPage, firstPage, isEmpty, total, hasTotal, lastPage, hasMorePages, hasPages } = meta

     for (const key in data) {
      if (Object.prototype.hasOwnProperty.call(data, key)) {
        const element = data[key]
        let pokemon_detail = await PokemonDetail.findBy('pokemon_id', element.id)
        data[key].pokemon_detail = pokemon_detail
      }
     }

    return {
      data,
      totalItems: total,
      totalPages: lastPage,
      currentPage: currentPage,
      limit: perPage
    }

    } catch (error) {
      throw error;
    }
  }

}
export default new PokemonService
