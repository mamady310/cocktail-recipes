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
                // console.log(data.drinks);
                // setting alias equal to properties to return from get request
                if(data.drinks) {
                const {
                    strDrink: name,
                    strDrinkThumb: image,
                    strCategory: category,
                    strGlass: glass,
                    strAlcoholic: info,
                    strInstructions: instructions,
                    strIngredient1, strIngredient2, 
                    strIngredient3,
                    strIngredient4,
                    strIngredient5
                } = data.drinks[0];
                  // array for ingredients
                    const ingredients = [    strIngredient1,  
                    strIngredient2, 
                    strIngredient3,
                    strIngredient4,
                    strIngredient5];
                    // creating new cocktail
                    const newDrinks = {name, image, info, category, glass, instructions, ingredients};
                    setCocktail(newDrinks);
                } else {
                    setCocktail(null);
                }
            } catch (error) {
                console.log(error);
                setLoading(false);
            }
        }
        getCocktail();
    }, [id])
    return (
        <div>
            Hello from cocktail page id : {id}
        </div>
    )
}

export default SingleCocktail;