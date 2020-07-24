//Add pokemon to car
export function addPokemonToCar(pokemon) {
    return { type: 'ADD_NEW_POKEMON', payload: pokemon }
}

//Atualizar o total do carrinh
export const updateTotalPrice = (price) => {
    return { type: 'UPDATE_TOTAL_PRICE', payload: price }
}

//Remove Pokemon from car
export const removePokemon = (pokemon) => {
    return { type: 'REMOVE_POKEMON_SAGA', payload: pokemon }
}