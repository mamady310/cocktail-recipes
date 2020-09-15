import { findAllByTitle } from '@testing-library/react'
import React from 'react'

export const CocktailList = (cocktails,loading) => {
    if (loading) {
        return  <h2 className="section-title"> Loading...</h2>
    } 
    if (cocktails.length < 1) {
        return (
            <h2 className="section-title">
                No cocktails match your search
            </h2>
        );
    }
    return (
        <div>
            hello from CocktailList
        </div>
    )
}

export default CocktailList;