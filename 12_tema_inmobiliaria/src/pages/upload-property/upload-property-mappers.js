export const mapPropertyUpdateListApiToVm = propertyList =>
Array.isArray(propertyList)
? getPropertyUpdateList.map(property => mapPropertyUpdateApiToVm(property))
: [];


export const mapPropertyUpdateApiToVm = (property) => ({
    title: property.title,
    notes: property.notes, 
    email: property.email,
    phone: property.phone,
    price: property.price,
    saletypes:property.saletypes,
    address: property.address,
    city: property.city,
    province: property.province,
    squareMeter: `${property.squareMeter} m2`,
    rooms: property.rooms,
    bathrooms:property.bathrooms,
    locationUrl: property.locationUrl,
    mainFeatures: property.mainFeatures,
    equipments: property.equipmentIds,
    images:Array.isArray(property.images) ? property.images : [], 
});
    



