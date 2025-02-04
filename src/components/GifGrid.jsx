 export const GifGrid = ({ category }) => {
  
   return (
     <>
        <h3>{ category }</h3>
        {
          gifs.map( gif => (
            <p>{ gif }</p>
          ))
        }
     </>
   )
 }
 