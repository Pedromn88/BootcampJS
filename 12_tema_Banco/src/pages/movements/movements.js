import { getMovementsList } from './movements.api';
import { addMovementsRows } from './movements.helpers';
import { mapMovementsListApiToVm } from './movements.mappers';
import { onUpdateField, onSetValues } from '../../common/helpers';
import { history } from '../../core/router';
import { getAccountList} from '../account-list/account-list.api'
import { mapAccountApiToVm } from '../account/account.mappers'
import { getAccount } from '../account/account.api';


const getId = () => {
    if (window.location.search) {
        const index = Array.from(window.location.search).findIndex(el => el ===  "=") + 1;
        const id = Array.from(window.location.search).slice(index).join('');
        return id;
    } else {
        const id = '';
        return id
    }
};


getAccountList().then(data => {
    if (getId ()){
        const account = data.filter (el => el.id === getId());
        const balance = document.getElementById('balance');
        const iban = document.getElementById('iban');
        const name = document.getElementById('alias');
        balance.innerText = `${account[0].balance} €`
        iban.innerText = account[0].iban;
        name.innerText = account[0].name
    } 
});

getMovements (account).then(movementsList => addMovementsRows(movementsList))


const params = history.getParams();
const isEditMode = Boolean(params.id);
if (isEditMode) {
getAccount(params.id).then(apiAccount => {
account = mapAccountApiToVm(apiAccount);
onSetValues(account);
});
}


const setEvents = movementsList => {
movementsList.forEach(account => {
onUpdateField(`select-${account.id}`, event => {
const route = event.target.value;
history.push(route);
});
});
};
getMovementsList().then(movementsList => {
 const vmMovementsList = mapMovementsListApiToVm(movementsList);
 addMovementsRows(vmMovementsList);
setEvents(vmMovementsList);
});
