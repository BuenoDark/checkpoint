import "./episodio.css";

import { CardEpisodioProps } from "./card-episodio.types";

const CardEpisodio = (props: CardEpisodioProps) => {
  const { name, air_date, episode } = props.episode

  return (
    <div className="card-episodio">
      <h4>{name}</h4>
      <div>
        <span>{episode}</span>
        <span>Lançado em: {air_date}</span>
      </div>
    </div>
  );
};

export default CardEpisodio;