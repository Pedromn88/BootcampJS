
import { getMovementsList, getAccountList } from './movements.api';
import { addMovementRows } from './movements.helpers';
import { mapMovementsListApiToVm } from './movements.mappers';
import { history } from '../../core/router';
import { onSetValues} from '../../common/helpers';
import { mapAccountApiToVm } from '../account/account.mappers'

  
const params = history.getParams();
const isEditMode = Boolean(params.id);
if (isEditMode) {
getMovementsList(params.id).then(apiMovements => {
const movementsList = mapMovementsListApiToVm(apiMovements);
onSetValues(movementsList);
addMovementRows(movementsList)
getAccountList(params.id).then((accountList) => {
  const vmAccountList = mapAccountApiToVm(accountList);
  console.log(vmAccountList)
  onSetValues(vmAccountList);
});


});
} else {
    getMovementsList().then((movementsList) => {
    const vmMovementsList = mapMovementsListApiToVm(movementsList);
    addMovementRows(vmMovementsList);
    setEvents(vmMovementsList);
    });
    
    getAccountList(params.id).then((accountList) => {
      const vmAccountList = mapAccountApiToVm(accountList);
      onSetValues(vmAccountList);
     console.log(vmAccountList)
    });
}





