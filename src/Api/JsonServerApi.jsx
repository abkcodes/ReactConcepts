import axios from 'axios'
let url="http://localhost:3003/user"
class JsonServerApi{
    saveUser(user)
    {
        return axios.post(`${url}`,user)
    }
}
export default new JsonServerApi