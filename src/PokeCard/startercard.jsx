import React, { useState,useEffect } from "react";

export default function StarterCard({ inComeData }) {
    const [data, setData] = useState()
    useEffect(() => {
        inComeData.then(res => setData(res))
    })
    
    
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

  //so only mounts if data is present
  if(data)
  return (
    <div className="Card_Body">
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
    </div>
  );
}
