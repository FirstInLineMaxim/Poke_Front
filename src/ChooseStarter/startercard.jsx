import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export default function StarterCard({ data,pokeid }) {
  // const [data, setData] = useState()
  // useEffect(() => {
  //     inComeData.then(res => setData(res))
  // })


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

  // TODO:make filter
  function showInfo(){
  }

  //so only mounts if data is present
  if (data)
    return (
      <div className="Card_Body">
        <div key={data.id} className="Card_Container">
          <span onclick={showInfo}className="info"><img src="https://www.pngitem.com/pimgs/m/195-1951784_info-icon-svg-transparent-background-information-icon-hd.png"></img></span>
          <Link to={`Battle/${pokeid}`}>
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
          </div></Link>
        </div>
      </div>
    );
}
