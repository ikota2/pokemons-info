import React from "react";
import "./properties.css";

export function Properties({ height, weight }) {
  return (
    <div className='list__properties'>
      <span className='list__properties'>height:</span>
      <span className='list__properties'>{height}</span>
      <span className='list__properties'>weight:</span>
      <span className='list__properties'>{weight}</span>
    </div>
  );
}
