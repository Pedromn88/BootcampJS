import Axios from "axios";

const url = `${process.env.BASE_API_URL}/transfer`;

export const insertTransfer = transfer => Axios.post(url, transfer).then(({ data }) => data);


const urlAccountList = `${process.env.BASE_API_URL}/account-list`;



export const getAccountList = () => 
Axios.get(urlAccountList).then(response => {
    return response.data;
});
