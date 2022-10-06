import { useState } from "react";
import { AddCategory, GifGrid,  } from "./components";


export const GifExpertApp = () => {
  
    const [categories, setCategories] = useState(['bumblebee']);

    const onAddCategory = ( newElement ) => {
        //categories.push('Decepticons');
        if( categories.includes( newElement )) return;
        setCategories( [newElement, ...categories]);
        //setCategories( cat => [...cat, 'autobots']);
    }

    return (
    <>
        
        <h1>GifExpertApp</h1>

   
        <AddCategory 
            //setCategories={ setCategories }
            onNewCategory={ onAddCategory }    
        />

   
        { categories.map( category => 
            (
                <GifGrid key={ category } category={ category }/>
            ))
        }
   
    </>
  )
}
