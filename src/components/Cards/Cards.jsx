import React, { useState } from "react";
import Description from "../Description/Description";

import '../Description/Description.scss';

const PokemonCard = ({
  id,
  name,
  image,
  type,
  height,
  weight,
  stat1,
  stat2,
  stat3,
  bs1,
  bs2,
  bs3,
}) => {

  const style = `thumb-container ${type}`;
  const [show, setShow] = useState(false);
  return (
    <div className={style}>
      <div className="number">
        <small>#0{id}</small>
      </div>
      <img src={image} alt={name} />
      <div className="detail-wrapper">
        <h3>{name.toUpperCase()}</h3>
        <small>Tipo : {type}</small>
        <button className="pokeinfo"
          onClick={() => setShow(!show)}>
          {show === true ? "Saiba menos" : "Saiba mais"}
        </button>
        {show === true ? (
          <Description
            weightpok={weight}
            heightpok={height}
            pokstat1={stat1}
            pokstat2={stat2}
            pokstat3={stat3}
            posbs1={bs1}
            posbs2={bs2}
            posbs3={bs3}
          />
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default PokemonCard;