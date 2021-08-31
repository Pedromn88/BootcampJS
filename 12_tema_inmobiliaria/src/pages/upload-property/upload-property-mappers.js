


export const mapPropertyUploadApiToVm = (property) => ({
    title: property.title,
    notes: property.notes, 
    email: property.email,
    phone: property.phone,
    price: property.price,
    saleTypesIds:property.saletypes,
    address: property.address,
    city: property.city,
    provinceId: property.province,
    squareMeter: `${property.squareMeter} m2`,
    rooms: property.rooms,
    bathrooms:property.bathrooms,
    locationUrl: property.locationUrl,
    mainFeatures: property.mainFeatures,
    equipmentIds: property.equipmentIds,
    images:Array.isArray(property.images) ? property.images[0] : '',
});
    