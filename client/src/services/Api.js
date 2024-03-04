/**
 * This axios sends  an HTTP Request to the localhost at :8081
 * The backend serves to listen to the request from that port
 */
import axios from 'axios'

export default() => {
  return axios.create({
    baseURL: `http://localhost:8081/`
  })
}
