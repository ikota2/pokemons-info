import React from "react";
import "./properties.css";

export function Properties({ height, weight }) {
  return (
    <div className='properties'>
      <span className='properties__details'>height:</span>
      <span className='properties__details'>{height}</span>
      <span className='properties__details'>weight:</span>
      <span className='properties__details'>{weight}</span>
    </div>
  );
}
