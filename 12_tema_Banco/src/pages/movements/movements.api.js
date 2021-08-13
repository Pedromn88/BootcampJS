import Axios from "axios";

const url = `${process.env.BASE_API_URL}/movements`;

export const getMovementsList = id => Axios.get(url, {params: { accountId: id}}).then(({ data }) => data);


const urlAccountList = `${process.env.BASE_API_URL}/account-list`;

export const getAccountList = (id) =>
  Axios.get(`${urlAccountList}/${id}`).then((response) => response.data);


