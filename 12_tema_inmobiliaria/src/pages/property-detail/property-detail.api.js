import Axios from 'axios';



const url = `${process.env.BASE_API_URL}/properties`;

export const getDetail = id =>
Axios.get(`${url}/${id}`).then(({ data }) => data);

const equiptmentsurl = `${process.env.BASE_API_URL}/equipments`;

const equipments = `${process.env.BASE_API_URL}/provinces`;
export const getequipments = () => Axios.get(equiptmentsurl).then(response => {
    return response.data
})