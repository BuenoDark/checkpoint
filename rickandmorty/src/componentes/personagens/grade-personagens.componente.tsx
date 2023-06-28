import "./grade-personagem.css"
import CardPersonagem from "./card-personagem.componente";
import { GradePersonagemProps } from "./grade-personagem.type";

const GradePersonagem = (props: GradePersonagemProps) => {

  const { characters } = props

  return (
    <div className="grade-personagens">
      {characters.map(character => <CardPersonagem key={character.id} character={character} />)}
    </div>
  );
};

export default GradePersonagem;