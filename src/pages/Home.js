import React from 'react';
import CocktailsList from '../components/CocktailList';
import SearchForm from '../components/SearchForm';

export const Home = () => {
    //using react hooks
    const [loading, setLoading] = React.useState(false);
    const [searchTerm, setSearchTerm] = React.useState('a');
    const [cocktails, setCocktails] = React.useState([]);
    //http get request
    React.useEffect(()=>{
        fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita').then(res => res.json()).then(data => console.log(data));
    }, [])
    return (
        <main>
            <SearchForm setSearchTerm={setSearchTerm}/>
            <CocktailsList loading={loading} cocktails={cocktails} />
        </main>
    )
}

export default Home;