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
            } 
            setLoading(false);
        }
        getCocktail();
    }, [id])
    if(loading) {
        return <h2 className="section-title">Loading...</h2>
    }if (!cocktail) {
        return <h2>No Cocktail to Display</h2>
    }
    else {
        const{name, image, category, info, glass, instructions, ingredients}= cocktail;
        return <section className="section cocktail-section">
            {/* <Link to="/" className="btn btn-primary"> Home </Link> */}
            <h2>{name}</h2>
            <div className="drink">
             <img src={image} alt={name} />
             <div>
                 <p>Name: {name}</p>
                 <p>Category: {category}</p>
                 <p>Info: {info}</p>
                 <p>Glass: {glass}</p>
                 <p>Instructions: {instructions}</p>
                 <p>Ingredients :{" "}
                 {ingredients.map((item, index)=> {
                         return item? <span key={index}>{item}</span>: null;
                     })}</p>
             </div>
            </div>
        </section>
    }
  
}

export default SingleCocktail;