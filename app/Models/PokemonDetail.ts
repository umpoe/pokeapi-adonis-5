import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class PokemonDetail extends BaseModel {
  public static table = 'pokemon_details'
  @column({ isPrimary: true })
  public id: number

  @column()
  public pokemon_id: number

  @column()
  public species_name: string | null
  @column()
  public front_shiny: string | null
  @column()
  public back_shiny: string | null
  @column()
  public front_default: string | null
  @column()
  public back_default: string | null

  @column()
  public weight: number
  @column()
  public height: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
