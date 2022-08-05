import axiosClient from './axiosClient';

export const getjuegos = async () => {  
    axiosClient
    .get("/contenidos/juegos")
        .then((response) => {
            console.log("ok")
        return response.data;
        })
        .catch((e) => {
            console.log(`register error`, e.response);
        });
        return response.data
};