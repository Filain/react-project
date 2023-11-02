import {useEffect, useState} from "react";
import {caracterServise} from "../../servsces/caracterServise";


const Character = ({item}) => {

    const [char, setChar] = useState({});
    useEffect(() => {
        caracterServise.getAll(item).then(({data}) => setChar(data))

    }, []);
    console.log(char)
    const {id, name, image} = char
    return (
        char&&<div>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <img src={image} alt={name} style={{width:'50px'}}/>
        </div>
    );
};

export {Character};