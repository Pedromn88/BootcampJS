import {createFormValidation, Validators} from '@lemoncode/fonk'
import { isUrl } from '@lemoncode/fonk-is-url-validator';

const validationSchema = {
    field: {

    title: [{
        validator:Validators.required,
        message: 'Campo requerido'
    }],
    notes: [{
        validator:Validators.required,
        message: 'Campo requerido'
    }], 
    email: [{
        validator: Validators.email,
        message: 'Email no válido',
    },],
    phone: [{
        validator:Validators.required,
        message: 'Campo requerido'
    }], 
    price: [{
        validator:Validators.required,
        message: 'Campo requerido'
    }], 
    saleTypeId: [{
        validator:Validators.required,
        message: 'Campo requerido'
    }], 
    address: [{
        validator:Validators.required,
        message: 'Campo requerido'
    }], 
    city: [{
        validator:Validators.required,
        message: 'Campo requerido'
    }], 
    /*province: [{
        validator:Validators.required,
        message: 'Campo requerido'
    }], */
    squareMeter: [{
        validator:Validators.required,
        message: 'Campo requerido'
    }], 
    rooms: [{
        validator:Validators.required,
        message: 'Campo requerido'
    }], 
    bathrooms:[{
        validator:Validators.required,
        message: 'Campo requerido'
    }], 
    locationUrl: [
        {
          validator: isUrl.validator,
          message: 'URL no válida',
        },
      ],
    mainFeatures: [],
    equipmentsIds: [],
    images: [],


    }};

    export const fromValidation = createFormValidation(validationSchema);