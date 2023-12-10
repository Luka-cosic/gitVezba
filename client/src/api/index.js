import axios from "axios";

// const API = axios.create({ 
//     baseURL: "http://localhost:6000",
//     withCredentials: true,
//     headers: {'X-Custom-Header': 'foobar'}
//  });


export const getServer = ()=>{ return axios.get("/sarma", {text: "Milojko"}); }