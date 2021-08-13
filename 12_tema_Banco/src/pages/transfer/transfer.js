import { onUpdateField, onSubmitForm, onSetError, onSetFormErrors } from '../../common/helpers';
import { setAccountOptions } from './transfer.helpers'
import { history } from '../../core/router';
import { insertTransfer, getAccountList } from './transfer.api';
import { fromValidation } from './transfer.validations';

const params = history.getParams();

let transfer = {
    id: '',
    accountId: '',
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

getAccountList().then(apiListAccount =>{
    setAccountOptions(apiListAccount, params.id);
    transfer.accountId = params.id;
})

onUpdateField('select-account', event =>{
const value = event.target.value;
transfer = { ...transfer, accountId: value};

/*fromValidation.validateField('accountId', transfer.iban).then(result =>{
    onSetError('accountId', result);
})*/
});


onUpdateField('iban', event => {
    const value = event.target.value;
    transfer = { ...transfer, notes: value}


fromValidation.validateField('iban', transfer.iban).then(result =>{
    onSetError('iban', result);
})

});
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



onUpdateField('day', event => {
    const value = parseInt(event.target.value);
    transfer = { ...transfer, day: value, date: `${transfer.year}-${transfer.month}-${value}` }


fromValidation.validateField('day', transfer.day).then(result =>{
    onSetError('day', result);
})
});

onUpdateField('month', event => {
    const value = parseInt(event.target.value);
    transfer = { ...transfer, month: value, date: `${transfer.year}-${value}-${transfer.day}`}

fromValidation.validateField('month', transfer.month).then(result =>{
    onSetError('month', result);
})

});

onUpdateField('year', event => {
    const value = parseInt(event.target.value);
    transfer = { ...transfer, year: value, date: `${value}-${transfer.month}-${transfer.day}` }


fromValidation.validateField('year', transfer.day).then(result =>{
    onSetError('year', result);
})

});
onUpdateField('email', event => {
    const value = event.target.value;
    transfer = { ...transfer, notes: value}


fromValidation.validateField('email', transfer.email).then(result =>{
    onSetError('email', result);
})

});
const onSave = () => {
    return insertTransfer(transfer)
}

onSubmitForm('transfer-button', event =>{
    fromValidation.validateForm(transfer).then(result => {
        onSetFormErrors(result);
        if (result.succeeded){
            onSave().then(result => {
                history.back(); });
        };
    });
});