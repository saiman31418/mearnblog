
import axios from 'axios';
const baseUrl = 'http://localhost:3002/users';


const getAll = () => (
    axios
        .get(baseUrl)
        .then(response => response.data)
);


const create = (user) => (
    
    axios
        .post(baseUrl, user)
        .then(response => response.data
           ).catch(
               
           )

       
       
);


const remove = id => axios.delete(`${baseUrl}/${id}`);


const update = (id, updatedPerson) => (
    axios
        .put(`${baseUrl}/${id}`, updatedPerson)
        .then(response => response.data)
        

       
);

export default {getAll, create, remove, update};