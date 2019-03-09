import axios from 'axios'
import { URL } from '../constants'

export default {
  getToDos(success, error) {
    axios.get(URL).then(response => success(response.data), e => error(e));
  }
}