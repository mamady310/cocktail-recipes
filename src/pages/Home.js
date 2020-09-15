import React from 'react';
import CocktailsList from '../components/CocktailList';
import SearchForm from '../components/SearchForm';

export const Home = () => {
    //using react hooks
    const [loading, setLoading] = React.useState(false);
    const [searchTerm, setSearchTerm] = React.useState("");
    const [cocktails, setCocktails] = React.useState([]);
    //http get request
    React.useEffect(()=>{
        async function getCocktails() {
            try {
                const response = await   fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`);
                
            } catch (error) {
               console.log(error); 
            }
        }
       
    }, [searchTerm]);
    return (
        <main>
            <SearchForm setSearchTerm={setSearchTerm}/>
            <CocktailsList loading={loading} cocktails={cocktails} />
        </main>
    )
}

export default Home;