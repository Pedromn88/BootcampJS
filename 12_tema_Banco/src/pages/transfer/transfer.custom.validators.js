export const dayValidator =({ value }) => {
    const sucedded = parseInt (value) > 0 && parseInt(value) < 31;

    return {
        sucedded,
        message: succeeded
        ? ''
        :'Introduce un día que sea correcto',
        type: ''
    }
}


export const monthValidator =({ value }) => {
    const sucedded = parseInt (value) > 0 && parseInt(value) < 12;

    return {
        sucedded,
        message: succeeded
        ? ''
        :'Introduce un mes que sea correcto',
        type: ''
    }
}

export const yearValidator =({ value }) => {
    const sucedded = parseInt (value) > 2020;

    return {
        sucedded,
        message: succeeded
        ? ''
        :'Introduce un año que sea correcto',
        type: ''
    }
}