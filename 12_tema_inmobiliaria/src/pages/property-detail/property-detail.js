import { getDetail, getequipments } from './property-detail.api';
import { setPropertyValues } from './property-detail.helpers';
import { mapPropertyApiToVm } from './property-detail.mappers';


 let propertyseenDetail = {
    id: '',
    title: '',
    city: '',
    rooms: '',
    squareMeter: '',
    rooms: '', 
    price: '',
    notes: '',
    mainFeatures: '',
    equipmentIds: '',
    images: '',
 }





 const params = history.getParams();

 Promise.all ([
    getDetail(),
    getequipments(),
])
 getDetail(params.id).then(apiPropertyDetail =>{
     propertyseenDetail = mapPropertyApiToVm (apiPropertyDetail);
     setPropertyValues(propertyseenDetail);

 })






