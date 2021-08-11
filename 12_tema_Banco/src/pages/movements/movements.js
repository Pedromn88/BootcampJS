import { getMovementsList } from './movements.api';
import { addMovementRows } from './movements.helpers';
import { mapMovementsListApiToVm } from './movements.mappers';
import { history } from '../../core/router';
import { onSetValues} from '../../common/helpers';



    
const params = history.getParams();
const isEditMode = Boolean(params.id);
if (isEditMode) {
getMovementsList(params.id).then(apiMovements => {
const movementsList = mapMovementsListApiToVm(apiMovements);
onSetValues(movementsList);
});
} else {
    getMovementsList().then((movementsList) => {
    vmMovementsList = mapMovementsListApiToVm(movementsList);
    addMovementRows(vmMovementsList);
    setEvents(vmMovementsList);
  });
       
}
