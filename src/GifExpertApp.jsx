import { useState } from "react";

export const GiftExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch', 'Data']);

    const onAddCategory = () => {
        setCategories([ ...categories, 'new']);
    }
    return (
        <>
            {/* titulo */}
            <h1>GifExpertApp</h1>
            
            {/* input */}

            {/* Listado de gift */}
            <button onClick={ onAddCategory }>Agregar</button>
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