//Add pokemon to car
export function addPokemonToCar(pokemon) {
    return { type: 'ADD_NEW_POKEMON', payload: pokemon }
}

//Atualizar o total do carrinh
export const updateTotalPrice = (price) => {
    return { type: 'UPDATE_TOTAL_PRICE', payload: price }
}