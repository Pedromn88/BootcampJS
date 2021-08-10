import { getMovementsList } from './movements.api';
import { addMovementRows } from './movements.helpers';
import { mapMovementsListApiToVm } from './movements.mappers';
import { history } from '../../core/router';
import { onSetValues} from '../../common/helpers';





const params = history.getParams();
const isEditMode = Boolean(params.Id);
if (isEditMode) {
getMovementsList(params.Id).then(apiMovements => {
movements = mapMovementsApiToVm(apiMovements);
onSetValues(movements);
});
}


getMovementsList().then(movementsList => {
 const vmMovementsList = mapMovementsListApiToVm(movementsList);
 addMovementRows(vmMovementsList);
setEvents(vmMovementsList);
});


