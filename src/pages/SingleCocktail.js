import React from 'react';
import { useParams } from 'react-router-dom';

export const SingleCocktail = () => {
    // console.log(useParams());
    const {id} = useParams();
    return (
        <div>
            Hello from cocktail page id :(id)
        </div>
    )
}

export default SingleCocktail;