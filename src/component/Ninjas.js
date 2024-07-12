import React, { useState, useEffect } from "react";
import Sppiner from "./Sppiner";

function Ninjas() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    var name = "Air";
    $.ajax({
      method: "GET",
      url: "https://api.api-ninjas.com/v1/airlines?name=" + name,
      headers: { "X-Api-Key": "XsCX9xpbV0Pk4OusYVzYCA==nG1FSL9mMg7XRr2r" },
      contentType: "application/json",
      success: function (result) {
        setLoading(true);
        console.log(result);
        setData(result);
      },
      error: function ajaxError(jqXHR) {
        console.error("Error: ", jqXHR.responseText);
        setLoading(false);
      },
    });
  }, []);

  return (
    <React.Fragment>
    <div className="container">
      {!loading && <Sppiner/>}
      
        {data.map((items, id) => {
          return (
            <div key={id} className="card">
              <div className="card-content">
                <h5 className="">iata: {items.iata}</h5>
                <p className="">icao: {items.icao}</p>
                <p className="">name: {items.name}</p>
              </div>
              <div className="logo">
              <a href={items.logo_url} target="_blank"><img src={items.logo_url} className="" alt="logo" /></a>
              </div>

            </div>
          );
        })}
      
    </div>
    </React.Fragment>
  );
}

export default Ninjas;
// https://pro.openweathermap.org/data/2.5/forecast/hourly?q={city name}&appid={API key}

// fetch(`https://pro.openweathermap.org/data/2.5/forecast/hourly?q=${city}&appid=${api_key}`)
// .then(res => res.json())
// .then(json => {
//     console.log(json)
//     setWeather(json)
// })
//

// "https://api.api-ninjas.com/v1/airlines?name=Lufthansa" \
//  -H "X-Api-Key: XsCX9xpbV0Pk4OusYVzYCA==nG1FSL9mMg7XRr2r" \

// {/* <div key={id} id="card-template">
// <div className="card">
//   {/* <div className="card-content"> */}
//     <h3 id="iata">iata: {items.iata}</h3>
//     <h6 className="icao" id="news-source">
//      icao: {items.icao}
//     </h6>
//     <p className="name" id="news-desc">
//       name: {items.name}
//     </p>
//     <div className="card-image">
//   <img src={items.logo_url} alt="news-image" id="news-img" />
// </div>
//   </div>

// </div> */}
