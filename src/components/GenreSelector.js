import React from "react";

const GenreSelector = ({genres, onGenreSelected}) => {
    
    console.log(genres);

    const handleChange = function(event) {
        const chosenGenre = genres[event.target.value];
        onGenreSelected(chosenGenre);
    };

    const genreOptions = genres.map((genre, index) => {
        return <option value={index} key={index}>{genre.name}</option>
    })

    return(
        <select defaultValue="" onChange={handleChange}>
            <option value="">Choose a genre...</option>
            {genreOptions}
        </select>
    )
};

export default GenreSelector;