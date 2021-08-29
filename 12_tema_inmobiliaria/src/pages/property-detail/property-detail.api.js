import Axios from 'axios';



const url = `${process.env.BASE_API_URL}/properties`;


export const getDetail = id =>
Axios.get(`${url}/${id}`).then(({ data }) => data);



const equiptmentsurl = `${process.env.BASE_API_URL}/equipments`;

export const getEquipments = () => Axios.get(equiptmentsurl).then(response => {
    return response.data
})

export const savedData = askDetails => Axios.post(url, askDetails).then (({data})=> data);


const urlContact = `${process.env.BASE_API_URL}/contact`;

export const getContactList = contact => Axios.post(urlContact, contact).then(({ data }) => data);