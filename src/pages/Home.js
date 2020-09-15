import React from 'react';
import CocktailsList from '../components/CocktailList';
import SearchForm from '../components/SearchForm';

export const Home = () => {
    //using react hooks
    const [loading, setLoading] = React.useState(false);
    const [searchTerm, setSearchTerm] = React.useState('gin');
    const [cocktails, setCocktails] = React.useState([]);

    //http get request
    React.useEffect(() => {

        async function getCocktails (){
        try {
            const response = await 
            fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`
            );
        const data = await response.json();
        const { drinks } = data;
        // console.log(drinks);
        if(drinks) {
            const newDrinks = drinks.map(item => {
                const {idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass} = item;
                return {
                    id: idDrink,
                    name: strDrink,
                    images: strDrinkThumb,
                    info: strAlcoholic,
                    glass: strGlass,
                }
            });
        setCocktails(newDrinks);
        } else {
            setCocktails([])
        }
        } catch (error) {
            console.log(error);
        }
    }
    getCocktails();      
    }, [searchTerm]);
    return (
        <main>
            <SearchForm setSearchTerm={setSearchTerm}/>
            <CocktailsList loading={loading} cocktails={cocktails} />
        </main>
    )
}

export default Home;