
import { AiOutlineStar, AiFillStar } from "react-icons/ai"
import './favorito.css'
import { BotoesProps } from "./botoes.types";

const BotaoFavorito = (props: BotoesProps) => {
  const { isFavorito, onClick } = props
  const src = isFavorito ? <AiFillStar /> : <AiOutlineStar />;

  return (
    <div onClick={onClick} className="botao-favorito">
      {src}
    </div>
  );
};

export default BotaoFavorito;
