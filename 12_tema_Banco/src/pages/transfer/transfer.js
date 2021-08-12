import { onUpdateField, onSubmitForm, onSetError, onSetFormErrors, onSetValues } from '../../common/helpers';
import {setAccountOptions} from './transfer.helpers'
import { history } from '../../core/router';
import { getTransferList, insertTransfer } from './transfer.api';
import { createFormValidation } from '@lemoncode/fonk';


let transfer = {
    select: '',
    iban: '',
    name: '',
    concept: '',
    notes: '',
    day:'',
    month: '',
    year:'',
    date: '',
    email:''
}


const params = history.getParams()
const isEditMOde = Boolean (params.id)

if(isEditMOde) {
    getAccountList().then(accounts => {
        setAccountOptions(accounts, params.id)
        transfer = { ...transfer, sourceAccount: params.id};
        
    })
} else {
    getAccountList().then(accounts => {
        setAccountOptions(accounts);
        transfer = { ...transfer, sourceAccount: '1'};
    })
}

onUpdateField('select-account', event =>{
setAccountOptions(accounts);
transfer = { ...transfer, sourceAccount: value};
});


onUpdateField('iban', event => {
    const value = event.target.value;
    transfer = { ...transfer, notes: value}
});

FormValidation.validateField('iban', transfer.iban).then(result =>{
    onSetError('iban', result);
})

onUpdateField('name', event => {
    const value = event.target.value;
    transfer = { ...transfer, notes: value}
});


onUpdateField('concept', event => {
    const value = event.target.value;
    transfer = { ...transfer, concept: value}
});

onUpdateField('amount', event => {
    const value = event.target.value;
    transfer = { ...transfer, amount: value}
});


onUpdateField('notes', event => {
    const value = event.target.value;
    transfer = { ...transfer, notes: value}
});



onUpdateField('iban', event => {
    const value = event.target.value;
    transfer = { ...transfer, notes: value}
});

FormValidation.validateField('iban', transfer.iban).then(result =>{
    onSetError('iban', result);
})




onUpdateField('day', event => {
    const value = event.target.value;
    transfer = { ...transfer, day: value, }
});

FormValidation.validateField('day', transfer.iemail).then(result =>{
    onSetError('day', result);
})



onUpdateField('email', event => {
    const value = event.target.value;
    transfer = { ...transfer, notes: value}
});

FormValidation.validateField('email', transfer.iemail).then(result =>{
    onSetError('email', result);
})





/*const updateDate = () => {
    const newDate = [transfer.day, transfer.month, transfer.year].join('-')
    console.log(newDate)
    transfer = { ...transfer, date: newDate};

    FormValidation.validateField('date', trnasfer.date).then(result =>{
        console.log(result);
    });
}*/

onSubmitForm('transfer-button', () =>{
    //updateDate();
    FormValidation.validateForm(transfer).then(result => {
        onSetFormErrors(result);

        console.log(result);
        console.log(transfer);

        const apiTransfer = mapAccountVmtoApi(transfer);
        console.log(apiTransfer);
        if (result.succeeded){
            insertTransfer(transfer).then(() => {history.back() })
        }
    });
})