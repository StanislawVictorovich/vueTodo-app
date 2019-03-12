import { URL } from './constants'
import { get } from './services/ToDo.service'

export const getToDos = async () => await get(URL);