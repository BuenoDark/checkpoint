import "./detalhe.css"
import BotaoFavorito from "../componentes/botoes/botao-favorito.componente";
import CardEpisodio from "../componentes/episodios/card-episodio.componente";
import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../state/hooks";
import { detail, detailEpisodesArray, detailEpisodesThunk } from "../state/user/user.slice";

function getEpisodesId(episodes: string[]) {
  const eps = episodes.map(episode => {
    const id = episode.slice(episode.lastIndexOf('/') + 1)
    return id
  })
  return eps
}

const PaginaDetalhe = () => {

  const { name, image, gender, origin: {name: originName}, favourite, episode } = useAppSelector(detail)
  const episodesArray = useAppSelector(detailEpisodesArray)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(detailEpisodesThunk(getEpisodesId(episode)))
  }, [dispatch, episode])

  return (
    <div className="container">
      <h3>{name}</h3>
      <div className={"detalhe"}>
        <div className={"detalhe-header"}>
          <img
            src={image}
            alt={name}
          />
          <div className={"detalhe-header-texto"}>
            <p>{name}</p>
            <p>Planeta: {originName}</p>
            <p>Genero: {gender}</p>
          </div>
          <BotaoFavorito isFavorito={favourite} />
        </div>
      </div>
      <h4>Lista de episódios em que o personagem apareceu</h4>
      <div className={"episodios-grade"}>
        {episodesArray.map(episode => <CardEpisodio key={episode.id} episode={episode} />)}


      </div>
    </div>
  );
};

export default PaginaDetalhe;