import React from "react";

const Song = ({song}) => {
    return <li><b>{song["im:name"].label}</b> : <i>{song["im:artist"].label}</i></li>
};

export default Song;