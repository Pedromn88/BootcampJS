import { onUpdateField, onSubmitForm, onSetError, onSetFormErrors } from '../../common/helpers';
import { setAccountOptions } from './transfer.helpers'
import { history } from '../../core/router';
import { insertTransfer, getAccountList } from './transfer.api';
import { fromValidation } from './transfer.validations';

const params = history.getParams();

let transferForm = {
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
    transferForm.accountId = params.id;
})

onUpdateField('select-account', event =>{
const value = event.target.value;
transferFrom = { ...transferFrom, accountId: value};
});

formValidation.validateField('accountId', transfer.iban).then(result =>{
    onSetError('accountId', result);
})

onUpdateField('iban', event => {
    const value = event.target.value;
    transfer = { ...transfer, notes: value}
});

formValidation.validateField('iban', transfer.iban).then(result =>{
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



onUpdateField('day', event => {
    const value = parseInt(event.target.value);
    transfer = { ...transfer, day: value, date: `${transfer.year}-${transfer.month}-${value}` }
});

formValidation.validateField('day', transfer.email).then(result =>{
    onSetError('day', result);
})


onUpdateField('month', event => {
    const value = parseInt(event.target.value);
    transfer = { ...transfer, month: value, date: `${transfer.year}-${value}-${transfer.day}`}
});

formValidation.validateField('month', transfer.email).then(result =>{
    onSetError('month', result);
})


onUpdateField('year', event => {
    const value = parseInt(event.target.value);
    transfer = { ...transfer, year: value, date: `${value}-${transfer.month}-${transfer.day}` }
});

formValidation.validateField('year', transfer.email).then(result =>{
    onSetError('year', result);
})

onUpdateField('date', event => {
    const value = parseInt(event.target.value);
    transfer = { ...transfer, month: value}
});

formValidation.validateField('date', transfer.email).then(result =>{
    onSetError('date', result);
})


onUpdateField('email', event => {
    const value = event.target.value;
    transfer = { ...transfer, notes: value}
});

formValidation.validateField('email', transfer.email).then(result =>{
    onSetError('email', result);
})

const onSave = () => {
    return insertTransfer(transferForm)
}

onSubmitForm('transfer-button', event =>{
    fromValidation.validateForm(transferFrom).then(result => {
        onSetFormErrors(result);
        if (result.succeeded){
            onSave().then(result => {
                history.back(); });
        };
    });
});