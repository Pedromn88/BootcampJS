
/*export const mapPropertyListApiToVm = propertyList =>
Array.isArray(propertyList)
? getPropertyList.map(property => mapPropertyApiToVm(property))
: [];*/


export const mapPropertyApiToVm = (property, equipmentsList) => ({
    id: property.id,
    mainImage: property.image[0],
    title: property.title,
    city: property.city,
    rooms: `${property.rooms} ${getRoomWord(property.rooms)}`,
    squareMeter: `${property.squareMeter}m2`,
    rooms: `${property.bathrooms} ${getBathroomWord(property.bathrooms)}`,
    price: `${property.price.toLocaleString()} €`,
    notes: property.notes, 
    mainFeatures: property.mainFeatures,
    equipments: getequipmentsName(property, equipmentsList),
    locationURL: property.locationURL,
    images: property.images,
   
    });

    const getRoomWord = rooms => (rooms > 1 ? 'habitaciones' : 'habitación');
    const getBathroomWord = bathrooms => (bathrooms > 1 ? 'Baños' : 'baño');
    const getequipmentsName = (equipmentsIds, equipmentsList) => {
        return equipmentsIds.map(equipmentId => equipmentsList.find(equimentItem => equimentItem.id === equipmentId)).map(({name}) => name)
    }