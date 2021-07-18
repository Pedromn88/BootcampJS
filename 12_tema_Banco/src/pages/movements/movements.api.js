import Axios from 'axios';

const url = `${process.env.BASE_API_URL}/movements`;

export const getMovements = () => Axios.get(url, {params: {accountId:id}}).then(({ data }) => data); 

export const getAccount = id => Axios.get (url, {params: {accountId:id}}).then(( { data }) => data); 


