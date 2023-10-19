import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Rocket} from "../Rocket/Rocket";
import css from "./Rockets.module.css"


const Rockets = () => {
    const [rockets, setRockets] = useState([]);
    useEffect(() => {
        axios.get('https://api.spacexdata.com/v3/launches/').then(({data})=>setRockets(data))
    }, []);
    const filrerLaunches = rockets.filter(rocket=>rocket.launch_year !=='2020')


 return (
  <div className={css.wrap}>
      {filrerLaunches.map(rocket=><Rocket key={rocket.flight_number} rocket={rocket}/>)}
  </div>
 );

};

export {Rockets};

