import {Validators, createFormValidation} from '@lemoncode/fonk'

const validationSchema = {
    field: {
        email: [{
            validator: Validators.email,
            message: 'Email no válido',},],
           
        message: [Validators.required]

    }
}

export const fromValidation = createFormValidation(validationSchema);