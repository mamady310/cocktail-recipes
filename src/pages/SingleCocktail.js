import React from 'react';
import { useParams } from 'react-router-dom';

export const SingleCocktail = () => {
    console.log(useParams());
    return (
        <div>
            Hello from cocktail page
        </div>
    )
}

export default SingleCocktail;