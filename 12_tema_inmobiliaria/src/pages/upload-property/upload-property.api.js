import Axios from 'axios';

const saleTypeListUrl = `${process.env.BASE_API_URL}/saletypes`;
export const getSaleTypeList = () => Axios.get(saleTypeListUrl).then(response => {
    return response.data
})

const provinceListUrl = `${process.env.BASE_API_URL}/provinces`;
export const getProvinceList = () => Axios.get(provinceListUrl).then(response => {
    return response.data
})


const equiptmentsurl = `${process.env.BASE_API_URL}/equipments`;

export const getEquipments = () => Axios.get(equiptmentsurl).then(response => {
    return response.data
})
const urlProperties = `${process.env.BASE_API_URL}/properties`;

export const uploadProperty = UploadEquitmepts => Axios.post(urlProperties, UploadEquitmepts).then(({ data }) => data);


