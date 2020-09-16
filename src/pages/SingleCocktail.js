import React from 'react';
import { useParams } from 'react-router-dom';

export const SingleCocktail = () => {
    // console.log(useParams());
    const {id} = useParams();
    const [loading, setLoading] = React.useState(false);
    const [cocktail, setCocktail] = React.useState(null);

    React.useEffect(()=> {
        setLoading(true);   

        async function getCocktail(){
            try {
                const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
                const data = await response.json();
                if(data.drinks) {

                } else {
                    setCocktail(null);
                }
            } catch (error) {
                console.log(error);
                setLoading(false);
            }
        }
    }, [id])
    return (
        <div>
            Hello from cocktail page id : {id}
        </div>
    )
}

export default SingleCocktail;