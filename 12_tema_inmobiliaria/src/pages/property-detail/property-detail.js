import { onSetFormErrors, onUpdateField, onSubmitForm, onSetError } from '../../common/helpers/element.helpers';
import { getDetail, getEquipments,savedData } from './property-detail.api';
import { setPropertyValues } from './property-detail.helpers';
import { mapPropertyApiToVm } from './property-detail.mappers';
import { fromValidation } from './property-detail-validations'
import { history } from '../../core/router';


 let propertyseenDetail = {
    id: '',
    mainImage: '',
    title: '',
    notes: '', 
    rooms: '',
    squareMeter: '',
    bathrooms: '',
    price: '',
    images: '', 
    adress: '',
    city: '',
    mainFeatures: '',
    equipmentIds: '',
    locationUrl: '',
 }


 let askDetails = {
     email: '',
     message: '',
 }

 const params = history.getParams();
 console.log(params.id)


Promise.all([
    getDetail(params.id),
    getEquipments(),
]).then(([detail, equipmentList]) => {
    propertyseenDetail = mapPropertyApiToVm(detail, equipmentList);
    setPropertyValues(propertyseenDetail)
})


onUpdateField('email', event => {
    const value = event.target.value;
    askDetails = { ...askDetails, email: value}


fromValidation.validateField('email', askDetails.email).then(result =>{
    onSetError('email', result);
})

});


onUpdateField('message', event => {
    const value = event.target.value;
    askDetails = {...askDetails, message: value};

});



const onSave = () => {
    return savedData(askDetails)
}

onSubmitForm('contact-button', event =>{
    fromValidation.validateForm(askDetails).then(result => {
        onSetFormErrors(result);
        if (result.succeeded){
            onSave().then(result => {
                history.back(); 
            });
        };
    });
});


