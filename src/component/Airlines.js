import React, { useState, useEffect } from "react";
import Sppiner from "./Sppiner";

function Airlines() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    var name = "Air";
    $.ajax({
      method: "GET",
      url: "https://api.api-ninjas.com/v1/airlines?name=" + name,
      headers: { "" },
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

export default Airlines;
