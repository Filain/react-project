import React from 'react';

import css from "./Rocket.module.css"

const Rocket = ({rocket}) => {
 return (
  <div className={css.block}>
      <div>Mission: {rocket.mission_name}</div>
      <div>Year:{rocket.launch_year}</div>
      <img src={rocket.links.mission_patch_small} alt={rocket.mission_name}/>

  </div>
 );

};

export {Rocket};