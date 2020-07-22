import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReactPaginate from 'react-paginate';

//Components
import ElectricPokemon from '../Components/Electric/Pokemon';

export default function Home() {

    const [pokemonType, setPokemonType] = useState([]);
    const [offset, setOffset] = useState(0);
    //Padrão de Pokemon mostrados por page
    const [perPage, setPerPage] = useState(9)
    const [currentPage, setCurrentPage] = useState(0);
    //Número de pages
    const [pageCount, setPageCount] = useState(0);

    //Função para mudar de página
    const handlePageChange = (event) => {
        const selectedPage = event.selected;
        //Exemplo: Página 3 = 3 x 9 = 27. Seleciono depois do Pokemon 27
        const newOffset = selectedPage * perPage;

        setOffset(newOffset);
        setCurrentPage(selectedPage);
    }
    
    useEffect(() => {
        //Pegando o array contendo informações do pokemon do tipo electric na PokeApi usando o axios get. Depois, salvo no estado pokemonType do component.
        const unsubscribeListener = axios.get('https://pokeapi.co/api/v2/type/electric')
            .then(res => {
                //Todos os pokemon do tipo elétrico
                const pokeType = res.data.pokemon;
                //Aqui eu seleciono os 9 pokemon da respectiva página
                setPokemonType(pokeType.slice(offset, offset + perPage));
                //O número de páginas vai ser equivalente a divisão entre a quantidade de pokemon / pela quantidade per page
                setPageCount(Math.ceil(pokeType.length / perPage))
            })
            .catch(err => {
                //Se algo der errado no acesso a api
                console.error(err);
            })
        return () => unsubscribeListener;    
    }, [offset, perPage])

    return (
        <main>
            <h1>Pokemon do tipo Elétrico</h1>
            {pokemonType.map(pokemon => {
                return (
                    <section key={pokemon.pokemon.name}>
                        <ElectricPokemon pokemon={pokemon} />
                    </section>
                )
            })}
            <ReactPaginate
                previousLabel={"Voltar"}
                nextLabel={"Avançar"}
                breakLabel={"..."}
                breakClassName={"break-me"}
                pageCount={pageCount}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={handlePageChange}
                containerClassName={"pagination"}
                subContainerClassName={"pages pagination"}
                activeClassName={"active"}
            />
        </main>
    )
}
