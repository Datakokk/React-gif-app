import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const ReactGifApp =( () => {

    const [categories, setCategories] = useState(['Fernando Calvo']);    
    
    return (
        <div id='app'>
            <h2>ReactGifApp</h2>
            <AddCategory setCategories={ setCategories }/>
            <hr/>

            <ol>
                { categories.map( category => 
                    <GifGrid 
                        key={ category }
                        category = { category }
                    />
                  ) 
                }
            </ol>
            
        </div>
    )
})

export {
    ReactGifApp
}