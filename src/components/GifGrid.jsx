//Importaciones, order jerarquico
/* 1: React
2: Importacion de terceros
3: Nuestro codigo */

import { GitItem } from './GitItem';
import { useFetchGifs } from '../hooks/useFetchGifs';
import loading from '../assets/loading.png'




export const GifGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifs(category); //Custom Hooks


    return (
        <>
            <h3 style={{ marginBottom: '2.5rem' }}>{category}</h3>
            {
                isLoading && <div className='isLoading' ><img className='imageLoadin' src={loading} alt="loading" /></div>
            }



            <div className='card-grid'>
                {
                    images.map((image) => (
                        <GitItem
                            key={image.id}
                            title={image.title}//mando como props estos datos
                            url={image.url}
                        // description={image.description}
                        />

                    ))
                }
            </div>

        </>
    )
}



/* 

// *NOTA

Esto es:

 title={image.title}
 url={image.url} 


 Lo mismo que : 

 ...image

 Con ese codigo(...image) me permite esparcir todas las props. 
 Se ultiliza cuando tengo muchas props.

*/
