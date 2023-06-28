import GradePersonagens from "../componentes/personagens/grade-personagens.componente";
import { useAppDispatch, useAppSelector } from "../state/hooks";
import { clearFavourites, favouritesSelector } from "../state/user/user.slice";

const PaginaFavoritos = () => {

  const dispatch = useAppDispatch()

  const favourites = useAppSelector(favouritesSelector)

  return (
    <div className="container">
      <div className="actions">
        <h3>Personagens Favoritos</h3>
        <button onClick={() => dispatch(clearFavourites())} className="danger">Limpar tudo</button>
      </div>
      <GradePersonagens characters={favourites} />
    </div>
  );
};

export default PaginaFavoritos;