import React from "react";

const Song = ({song}) => {
    return <li>
        <b>{song["im:name"].label}</b> : <i>{song["im:artist"].label}</i><br/>
        <img src={song["im:image"]["0"].label} width="50" height="50" /> 
        <audio controls  src={song.link["1"].attributes.href} ></audio>
        </li>
};

export default Song;