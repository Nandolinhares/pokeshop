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

//Get old purchase
export const getOldPurchase = (oldPurchase) => {
    return { type: 'SET_OLD_PURCHASE_SAGA', payload: oldPurchase}
}

//Mudar Tema
export function changeTheme(theme) {
    return { type: 'CHANGE_THEME', payload: theme }
}

//Limpar Carrinho
export const clearShopCar = () => {
    return { type: 'CLEAR_SHOP_CAR' }
}

//Busca
export const setAllPokemon = (allPokemon) => {
    return { type: 'SET_ALL_POKEMON', payload: allPokemon }
}

//Resultado da busca
export const searchPokemon = (params) => {
    return { type: 'SET_SEARCH_RESULT_SAGA', payload: params }
}