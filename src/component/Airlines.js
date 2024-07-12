import React, { useState, useEffect } from "react";

function Airlines() {
  const [data, setData] = useState([]);

  useEffect(() => {
    var name = "Air";
    $.ajax({
      method: "GET",
      url: "https://api.api-ninjas.com/v1/airlines?name=" + name,
      headers: "your api key",
      contentType: "application/json",
      success: function (result) {
        console.log(result);
        setData(result);
      },
      error: function ajaxError(jqXHR) {
        console.error("Error: ", jqXHR.responseText);
      },
    });
  }, []);

  return (
    <React.Fragment>
      <div className="container">
        {data.map((items, id) => {
          return (
            <div key={id} className="card">
              <div className="card-content">
                <h5 className="">iata: {items.iata}</h5>
                <p className="">icao: {items.icao}</p>
                <p className="">name: {items.name}</p>
              </div>
            </div>
          );
        })}
      </div>
    </React.Fragment>
  );
}

export default Airlines;
