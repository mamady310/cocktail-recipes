import React from 'react';

export const SearchForm = ({setSearchTerm}) => {
    const searchValue = React.useRef("");
    console.log(searchValue);
    const handleSubmit = () => {

    };
    // user input is captured
    const searchDrinks = () => {
        // console.log(searchValue.current.value);
        setSearchTerm(searchValue.current.value)

    };

    return (
        <section className="section">
        <h2 className="section-title"> search cocktails</h2>
        <form className="form search-form" onSubmit={handleSubmit}>
            <div className="form-control">
            <label> search </label>
            <input type="text" name="name" id="name" onChange={searchDrinks} ref={searchValue}></input>
            </div>
        </form>
        </section>
    )
}

export default SearchForm;