import { fetchNextPageThunk } from '../../store/actions/characters.actions';
import { useDispatch, useSelector } from 'react-redux';
import { GlobalState } from '../../types'

import "./style.css";

/**
 * Componente que contém os botões para paginar *
 * Você deve adicionar as propriedades necessárias para que funcione corretamente*
 *
 * @returns Elemento JSX
 */


export const Paginacao = () => {
    const { paginacao } = useSelector((state: GlobalState) => state.person);

    const dispatch = useDispatch();

    /**
     * Função que confirma a existencia de paginacao.prev para ser utilizada pelo fetchNextPageThunk que recebe e faz uma nova requisição na API carregando a página anterior 
     * @function handleNextPage
     * @returns retorna uma nova pagina
     */
    const handleNextPage = () => {
        if (paginacao.next) {
            fetchNextPageThunk(paginacao.next)(dispatch);
        }
    };

    /**
      * Função que confirma a existencia de paginacao.prev para ser utilizada pelo fetchNextPageThunk que recebe e faz uma nova requisição na API carregando a página anterior 
     * @function handlePrevPage
     * @returns retorna uma pagina anterior
     */
    const handlePrevPage = () => {
        if (paginacao.prev) {
            fetchNextPageThunk(paginacao.prev)(dispatch);
        }
    };


    /**
     * Função que desabilita o botão caso o paginacao.prev seja null 
     * 
     * @function buttonDisabled
     * @returns retorna true ou false a depender do paginacao.prev
     */

    const buttonDisabled = () => {
        if (paginacao.prev === null) return true;
        return false;
    }


    return (
        <div className="paginacao">
            <button disabled={buttonDisabled()} onClick={handlePrevPage} className={"primary"}>
                Anterior
            </button>
            <button disabled={false} onClick={handleNextPage} className={"primary"}>
                Próximo
            </button>
        </div>
    );
};
