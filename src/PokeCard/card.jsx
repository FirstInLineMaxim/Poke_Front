import React, { useState } from "react";

export default function Card({ data }) {
  //trasforms id into a 3 digit exampl 1 => 001 etc for image link url
  function changeNumber(num) {
    if (num.toString().length === 1) {
      return `00` + num;
    } else if (num.toString().length === 2) {
      return "0" + num;
    } else if (num.toString().length === 3) {
      return num;
    }
  }
  const url = (id) => {
    // link options i found pokedex/ detail or full
    return `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${changeNumber(
      id
    )}.png`;
  };

  const [filterType, setFilterType] = useState([]);
  function filter(value) {
    const filtered = data.filter(
      (ele) => ele.type[0] === value || ele.type[1] === value
    );
    setFilterType(filtered);
    console.log(filterType);
  }
  return (
    <div key={data.id} className="Card_Container">
      {console.log({ data })}
      <img src={url(data.id)} alt={data.name.english} />
      {/* Description */}
      <div className="Descript_Container">
        <p>#{changeNumber(data.id)}</p>
        <div>
          <h3>{data.name.english}</h3>
          <div className="Types_Container">
            {data.type.map((data, i) => (
              <span key={i} className={data}>
                {data}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
