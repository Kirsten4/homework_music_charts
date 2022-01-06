import React from "react";
import Song from "./Song";

const SongList = ({songs}) => {
    
    const songsItems = songs.map((song, index) => {
        return <Song song={song} key={index}/>
    });

    return (
        <ol>
            {songsItems} 
        </ol>
    );
};

export default SongList;