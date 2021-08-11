import { onUpdateField, onSubmitForm, onSetError, onSetFormErrors, onSetValues } from '../../common/helpers';


onUpdateField('select-account', event => {
    const value = event.target.value;
    account = { ...account, type: value };
        formValidation.validateField('select-account', account.type).then(result => {
            onSetError('select-account', result);
        });
    });

onSubmitForm('transfer-button', () => {
    formValidation.validateForm(account).then(result => {
    onSetFormErrors(result);
    if (result.succeeded) {
    onSave().then(() => {
    history.back();
    });
    }
    });
                
});