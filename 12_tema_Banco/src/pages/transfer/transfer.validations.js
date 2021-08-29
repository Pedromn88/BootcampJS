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
        validator: Validators.required,
        message: 'Campo requerido'},
        {
          validator: iban.validator,
          message: 'IBAN inválido',
        },
      ],
      name: [{
        validator: Validators.required,
        message: 'Campo requerido',
        }],
      amount: [
        {
            validator: Validators.required,
            message: 'Campo Requerido'
          },
          {
            validator: positiveNumber.validator,
            customArgs: { allowZero: true },
          },
          
        ],
        concept: [{
          validator: Validators.required,
          message: 'Campo requerido',
          }],

         
        day:[{
            validator: Validators.required,
            message: 'Campo requerido',
          },
          { validator: dayValidator,
            message: 'Fecha errónea',
          },
        ],
        month:[
          {
            validator: Validators.required,
            message: 'Campo requerido',
          },
        { validator: monthValidator,
          message: 'Fecha errónea',
        }
      ],
      year:[
        {
          validator: Validators.required,
          message: 'Campo requerido',
        },
      { validator: yearValidator,
        message: 'Fecha errónea'
      }
    ],

    email: [{
      validator: Validators.email,
      message: 'Email no válido',},],
     

}};
   export const fromValidation = createFormValidation(validationSchema);





 
  