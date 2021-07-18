import { getMovementsList } from './movements.api';
import { addMovementRows } from './movements.helpers';
import { mapMovementsListApiToVm } from './movements.mappers';
import { onUpdateField } from '../../common/helpers';
import { history } from '../../core/router';


const params = history.getParams();
const isEditMode = Boolean(params.id);

const setEvents = movementsList => {
    movementsList.forEach(movements => {
    onUpdateField(`select-${movements.id}`, event => {
    const route = event.target.value;
    history.push(route);
    });
    });
    };


getMovementsList().then(movementsList => {
    const vmMovementsList = mapMovementsListApiToVm(movementsList);
    addMovementRows(vmMovementsList);
   setEvents(vmMovementsList);
   });
