import {validators, createFormValidation} from '@lemoncode/fonk'
import { iban } from '@lemoncode/fonk-iban-validator';
import {positiveNumber} from '@lemoncode/fonk-positive-number-validator'
import {laterDate} from '@lemoncode/fonk-latger-date-validator';


const validationSchema = {
    field: {
    iban: [
    {
    validator: Validators.required,
    message: 'Campo requerido',
    },
    ],
    name: [
    {
    validator: Validators.required,
    message: 'Campo requerido',
    },
    ],
    },
   };
   export const formValidation = createFormValidation(validationSchema);