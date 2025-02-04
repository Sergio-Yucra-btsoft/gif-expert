import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GiftExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch', 'Data']);

    const onAddCategory = ( newCategory ) => {
        // console.log(newCategory);
        if ( categories.includes(newCategory)) return;
        setCategories([ newCategory, ...categories]);
    }
    return (
        <>
            {/* titulo */}
            <h1>GifExpertApp</h1>

            {/* input */}
            <AddCategory 
                // setCategories={setCategories} 
                onNewCategory = { onAddCategory }
            />
            {/* Listado de gift */}
            {/* <button onClick={ onAddCategory }>Agregar</button> */}
            <ol>
                {
                    categories.map( category => {
                        return <li key={ category }>{category}</li>
                    })
                }
            </ol>
            {/* Gif Item */}
        </>
    )
}