import React, { useEffect, useState } from "react";
import SongList from "../components/SongList";
import GenreSelector from "../components/GenreSelector";

const SongContainer = () => {
    const [songs, setSongs] = useState([]);
    const [selectedGenre, setSelectedGenre] = useState(null);
    const genres = [{name: "All", url: "https://itunes.apple.com/gb/rss/topsongs/limit=20/json"},
    {name: "Rock", url: "https://itunes.apple.com/gb/rss/topsongs/limit=20/genre=21/json"},
    {name: "Dance", url: "https://itunes.apple.com/gb/rss/topsongs/limit=20/genre=17/json"},
    {name: "Country", url: "https://itunes.apple.com/gb/rss/topsongs/limit=20/genre=6/json"}];

    useEffect(() => {
        getSongs();
    }, [selectedGenre])

    const getSongs = () => {
        // fetch('https://itunes.apple.com/gb/rss/topsongs/limit=20/json')
        if (selectedGenre === null) {
            fetch('https://itunes.apple.com/gb/rss/topsongs/limit=20/json')
            .then(res => res.json())
            .then(songs => setSongs(songs.feed.entry))
        } else{
            const url = selectedGenre.url
            fetch(url)
            .then(res => res.json())
            .then(songs => setSongs(songs.feed.entry))
        }
        
    }

    const onGenreSelected = function(genre){
        setSelectedGenre(genre)
    }

    return (
        <>
            <GenreSelector genres={genres} onGenreSelected={onGenreSelected}/>
            <SongList songs={songs} />
        </>
    )
}

export default SongContainer
