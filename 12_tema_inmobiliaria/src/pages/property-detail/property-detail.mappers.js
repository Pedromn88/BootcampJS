

export const mapPropertyListApiToVm = propertyList =>
Array.isArray(propertyList)
? getPropertyList.map(property => mapPropertyApiToVm(property))
: [];



export const mapPropertyApiToVm = (property, equipmentList) => ({
    id: property.id,
    mainImage: property.images[0],
    title: property.title,
    notes: property.notes, 
    rooms: `${property.rooms} ${getRoomWord(property.rooms)}`,
    squareMeter: `${property.squareMeter} m2`,
    rooms: `${property.bathrooms} ${getBathroomWord(property.bathrooms)}`,
    price: `${property.price.toLocaleString()} €`,
    images: Array.isArray(property.images) ? property.images : [], 
    address: property.address,
    city: property.city,
    mainFeatures: property.mainFeatures,
    equipments: transfromEquipmentIds(property, equipmentList),
    locationUrl: property.locationUrl,
    
    });

    const getRoomWord = rooms => (rooms > 1 ? 'habitaciones' : 'habitación');
    const getBathroomWord = bathrooms => (bathrooms > 1 ? 'Baños' : 'baño');
    const transfromEquipmentIds = (property, equipmentList) => {
        let transformado = '';
        transformado = property.equipmentIds.map(function (obj){
        const encontrado = equipmentList.find (element => element.id === obj)
        return encontrado.name

        });
        return transformado

    }
    