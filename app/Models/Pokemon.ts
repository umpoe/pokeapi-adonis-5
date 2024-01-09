import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Pokemon extends BaseModel {
  public static table = 'pokemons'
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public url: string | null

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
