import Axios from 'axios';



const url = `${process.env.BASE_API_URL}/properties`;


export const getDetail = id =>
Axios.get(`${url}/${id}`).then(({ data }) => data);



const equiptmentsurl = `${process.env.BASE_API_URL}/equipments`;

export const getEquipments = () => Axios.get(equiptmentsurl).then(response => {
    return response.data
})






const urlContact = `${process.env.BASE_API_URL}/contact`;

export const savedData = askDetails => Axios.post(urlContact, askDetails).then(({ data }) => data);