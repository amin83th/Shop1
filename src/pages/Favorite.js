import {useContext} from 'react';
import FavoritesContext from '../for user/AddToFavorite';
import List from '../data/List';
function Favorite(){
    const FavoritesCtx=useContext(FavoritesContext);
    let content;
    if(FavoritesCtx.totalFavorites === 0){
        content = <p>YOU DONT HAVE ANYTING</p>
    }
    else{
        content=<List meetups={FavoritesCtx.favorites} />
    }

    return(
        <section>
            MY Favorite
            {content}
        </section>
    )
}

export default Favorite;