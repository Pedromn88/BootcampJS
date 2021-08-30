import {onUpdateField, onSubmitForm, removeElement, onSetError, onSetFormErrors, onAddFile} from '../../common/helpers';
import {uploadProperty, getEquipments,getSaleTypeList, getProvinceList} from './upload-property.api'
import {mapPropertyUploadApiToVm} from './upload-property-mappers'
import {onAddFeature, onAddImage, setOptionList, formatCheckboxId, onRemoveFeature, formatDeleteFeatureButtonId, setCheckboxList } from './upload-property.helpers'
import {fromValidation} from './upload-property-validator'
import { history } from '../../core/router';


 let newProperty = {
    id: '',
    title: '',
    notes: '', 
    email: '',
    phone: '',
    price: '',
    salesTypeId: [],
    address: '',
    city: '',
    province: '',
    squareMeter: '',
    rooms: '',
    bathrooms:'',
    locationUrl: '',
    mainFeatures: [],
    equipmentsIds: [],
    images: [],

 }

const addElement = value => {newProperty = {...newProperty, salesTypes: {...newProperty.salesType, value} }};


const setEvents = list => {
   list.forEach(el => {
      const id = formatCheckboxId(el);
      onUpdateField(id, event => {
         const value = event.target.value;
         addElement(value);
      })
   })
}

Promise.all([getSaleTypeList(), getProvinceList(), getEquipments()]).then(
   ([saleTypeList, provinceList, equipmentsList]) => {
   setCheckboxList(saleTypeList, 'saleTypes');
   setCheckboxList(equipmentsList, 'equipments');
   setOptionList(provinceList, 'province')
  setEvents(saleTypeList, 'saleTypes');
setEvents(equipmentsList, 'equipments');
   
   }
   )
     
   onUpdateField('newFeature', event => {
      const value = event.target.value;
      newProperty = {...newProperty, mainFeatures: value}
   });


   onUpdateField('title', event =>{
      const value = event.target.value;
      newProperty = { ...newProperty, title: value};
      
      });

      onUpdateField('notes', event =>{
         const value = event.target.value;
         newProperty = { ...newProperty, notes: value};
         
         });
  
         onUpdateField('email', event => {
            const value = event.target.value;
            newProperty = { ...newProperty, email: value}
        
        
        fromValidation.validateField('email', newProperty.email).then(result =>{
            onSetError('email', result);
        })
        
        });

        onUpdateField('phone', event =>{
         const value = event.target.value;
         newProperty = { ...newProperty, phone: value};
         
         });

         onUpdateField('price', event =>{
            const value = event.target.value;
            newProperty = { ...newProperty, price: value};
            
         });

         onUpdateField('address', event =>{
            const value = event.target.value;
            newProperty = { ...newProperty, address: value};
                  
         });

         onUpdateField('city', event =>{
            const value = event.target.value;
            newProperty = { ...newProperty, city: value};
                  
         });
         onUpdateField('squareMeter', event =>{
            const value = event.target.value;
            newProperty = { ...newProperty, squareMeter: value};
                  
         });
         onUpdateField('rooms', event =>{
            const value = event.target.value;
            newProperty = { ...newProperty, rooms: value};
                  
         });
         onUpdateField('bathrooms', event =>{
            const value = event.target.value;
            newProperty = { ...newProperty, bathrooms: value};
                  
         });
         onUpdateField('locationUrl', event => {
            const value = event.target.value;
            newProperty = { ...newProperty, locationUrl: value}
        
        
        fromValidation.validateField('locationUrl', newProperty.locationUrl).then(result =>{
            onSetError('locationUrl', result);
        })

      });


   onSubmitForm('insert-feature-button', () =>{
      const value = document.getElementById('newFeature').value;
      if (value) {
         const deleteId = formatDeleteFeatureButtonId(value);
         newProperty = addElement(value, newProperty, 'mainFeatures');
         onAddFeature(value);
         onSubmitForm(deleteId, () => {
            onRemoveFeature(value);
            newProperty = removeElement(value, newProperty, 'mainFeatures')
         })
      }
   })

   onAddFile('add-image', value => {
      onAddImage(value);
      addElement(value, 'add-image')
   })





   onSubmitForm('save-button', () =>{
      fromValidation.validateForm(newProperty).then(result => {
         onSetFormErrors(result);
         const apiPropertyUpload = mapPropertyUploadApiToVm (newProperty)
         if(result.succeeded) {
            uploadProperty(apiPropertyUpload).then(() => {history.back()})
         }
      })
   })