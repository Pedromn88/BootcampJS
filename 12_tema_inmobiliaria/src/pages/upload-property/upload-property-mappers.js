export const mapPropertyUploadApiToVm = (property) => ({
    title: property.title,
    notes: property.notes, 
    email: property.email,
    phone: property.phone,
    price: `${property.prince} €`,
    salesTypeId:property.salesTypeId,
    address: property.address,
    city: property.city,
    provinceId: '',
    squareMeter: `${property.squareMeter} m2`,
    rooms: property.rooms,
    bathrooms:property.bathrooms,
    locationUrl: property.locationUrl,
    mainFeatures: property.mainFeatures,
    equipmentIds: property.equipmentIds,
    images: property.images
    
    });