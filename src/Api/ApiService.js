import axios from 'axios'
let url="http://localhost:8096"
class ApiService

{
    saveUser(loginData){
        return axios.post(`${url}/admin/adds`,loginData);
    }
fetchAllUser(){
    return axios.get(`${url}/hr/getalljobs`);
}
}
export default new ApiService