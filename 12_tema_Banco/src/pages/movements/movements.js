import { getMovementsList } from './movements.api';
import { addMovementRows } from './movements.helpers';
import { mapMovementsListApiToVm } from './movements.mappers';
import { history } from '../../core/router';
import { onSetValues} from '../../common/helpers';


const params = history.getParams();
const isEditMode = Boolean(params.AccountId);
if (isEditMode) {
getMovementsList(params.AccountId).then(apiMovements => {
movementsLits = mapMovementsApiToVm(apiMovements);
onSetValues(movementsList);
});
}


getMovementsList().then(movementsList => {
 const vmMovementsList = mapMovementsListApiToVm(movementsList);
 addMovementRows(vmMovementsList);
setEvents(vmMovementsList);
});


