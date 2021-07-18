export const mapMovementsListApiToVm = movementsList =>
 Array.isArray(movementsList)
 ? movementsList.map(movements => mapMovementsApiToVm(movements))
 : [];
const mapMovementsApiToVm = movements => ({
    id: movements.id,
    transaction: new Date (movements.transaction).toLocaleDateString(),
    realTransaction: new Date(movements.realTransaction).toLocaleDateString(),
    description: movements.description,
    amount: `${movements.amount} €`,
    balance: `${movements.balance} €`
});