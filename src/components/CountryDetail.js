import React from 'react';

const CountryDetail = (props) => {
  if (!props.country) return null;
  return (
    <>
    <h3>Name: {props.country.name}</h3>
    <h4>Region: {props.country.region}</h4>
    <h4>Sub Region: {props.country.subregion}</h4>
    </>
  )
}

export default CountryDetail;
