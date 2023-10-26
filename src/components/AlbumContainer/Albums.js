import {useEffect, useState} from "react";

import {albumsServise} from "../../services/albumsServise";
import {Album} from "./Album";

const Albums = () => {
    const [albums, setAlbums] = useState([]);
    
    useEffect(() => {
        albumsServise.getAll().then(({data}) => setAlbums(data));

    }, []);
    
    return (
        <div>
            {albums.map(album=><Album key={album.id} album={album}/>)}
        </div>
    );
};

export {Albums};