import {useContext} from 'react';
import BasketsContext from '../for user/AddToBasket';
import List from '../data/List';
function Basket(){
    const BasketsCtx=useContext(BasketsContext);
    let content;
    if(BasketsCtx.totalBaskets === 0){
        content = <p>YOU DONT HAVE ANYTING</p>
    }
    else{
        content=<List meetups={BasketsCtx.baskets} />
    }

    return(
        <section>
            MY Favorite
            {content}
        </section>
    )
}

export default Basket;