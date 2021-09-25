import React from "react";
import "./Country.css";

const Country = (props) => {
  const { name, flags, capital, population, region } = props.country;
  //   console.log(props.country);

  return (
    <div className="country bg-info">
      <h4>Country Name: {name}</h4>
      <img src={flags[0]} alt="" />
      <p>
        <small>Region: {region}</small>
      </p>
      <p>Capital: {capital}</p>
      <p>Population: {population}</p>
    </div>
  );
};

export default Country;
