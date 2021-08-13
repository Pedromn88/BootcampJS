import {createFormValidation, Validators} from '@lemoncode/fonk'
import {dayValidator, monthValidator, yearValidator} from './transfer.custom.validators'
import { iban } from '@lemoncode/fonk-iban-validator';
import {positiveNumber} from '@lemoncode/fonk-positive-number-validator'


const validationSchema = {
    field: {
      accountId: [{
        validator: Validators.required,
        }],
      iban: [
        {
          validator: iban.validator,
          message: 'IBAN inválido',
        },{
        validator: Validators.required,
        message: 'Campo requerido',}
      ],
      name: [{
        validator: Validators.required,
        message: 'Campo requerido',
        }],
      amount: [
          {
            validator: positiveNumber.validator,
            customArgs: { allowZero: true },
          },
          {
            validator: Validators.required,
            message: 'Campo Requerido',}
        ],
        concepto: [{
          validator: Validators.required,
          message: 'Campo requerido',
          }],

         
        day:[{
            validator: Validators.required,
            message: 'Campo requerido',
          },
          { validator: dayValidator,
            message: 'Inserta un día válido',
          },
        ],
        month:[
          {
            validator: Validators.required,
            message: 'Campo requerido',
          },
        { validator: monthValidator,
          message: 'Campo requerido',
        }
      ],
      year:[
        {
          validator: Validators.required,
          message: 'Campo requerido',
        },
      { validator: yearValidator,
        message: 'Campo requerido'
      }
    ],

    email: [{
      validator: Validators.email,
      message: 'Email no válido',},],
     

}};
   export const fromValidation = createFormValidation(validationSchema);





 
  