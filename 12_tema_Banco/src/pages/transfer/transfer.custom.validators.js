export const dayValidator =({ value }) => {
    const succeeded = parseInt (value) > 0 && parseInt(value) < 31;

    return {
        succeeded,
        message: succeeded
        ? ''
        :'Introduce un día que sea correcto',
        type: ''
    }
}


export const monthValidator =({ value }) => {
    const succeeded = parseInt (value) > 0 && parseInt(value) < 12;

    return {
        succeeded,
        message: succeeded
        ? ''
        :'Introduce un mes que sea correcto',
        type: ''
    }
}

export const yearValidator =({ value }) => {
    const succeeded = parseInt (value) > 2020;

    return {
        succeeded,
        message: succeeded
        ? ''
        :'Introduce un año que sea correcto',
        type: ''
    }
}