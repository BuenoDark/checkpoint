import BotaoFavorito from "../botoes/botao-favorito.componente";
import "./cardpersonagem.css";
import { favouriteThunk, setDetailPage } from "../../state/user/user.slice";
import { useNavigate } from "react-router-dom"
import { CardPersonagemProps } from "./card-personagem.type";
import { useAppDispatch } from "../../state/hooks";
import { ICharacter } from "../../types/character.type";

const styles = {
  cursor: 'pointer',
}


const CardPersonagem = (props: CardPersonagemProps) => {

  const { character: { image, name }, character } = props;

  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const seeDetailPage = (char: ICharacter) => {
    dispatch(setDetailPage(char))
    navigate("/detalhe")
  }

  return (
    <div className="card-personagem">
      <img
        onClick={() => seeDetailPage(character)}
        src={image}
        style={styles}
        alt={name}
      />
      <div className="card-personagem-body">
        <span style={styles} onClick={() => seeDetailPage(character)}>{name}</span>
        <BotaoFavorito onClick={() => dispatch(favouriteThunk(character))} isFavorito={character.favourite} />
      </div>
    </div>
  );
};

export default CardPersonagem;