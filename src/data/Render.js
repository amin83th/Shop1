import classes from "./Render.module.css";
import { useContext } from "react";
import FavoritesContext from "../for user/AddToFavorite";
import BasketsContext from "../for user/AddToBasket";
function Render(props) {

  // Favorite
  const FavoritesCtx = useContext(FavoritesContext);
  const itemIsFavorite = FavoritesCtx.itemIsFavorite(props.Id);
  function togglefavoriteStatusHandler() {
    if (itemIsFavorite) {
      FavoritesCtx.removeFavorite(props.Id);
    } else {
      FavoritesCtx.addFavorite({
        key: props.Id,
        Id: props.Id,
        Title: props.Title,
        ImgUrl: props.ImgUrl,
        Description: props.Description,
        Price: props.Price,
      });
    }
  }
  // basket
  const BasketsCtx = useContext(BasketsContext);
  const itemIsBasket = BasketsCtx.itemIsBasket(props.Id);

  function togglebasketStatusHandler() {
    if (itemIsBasket) {
      BasketsCtx.removeBasket(props.Id);
    } else {
      BasketsCtx.addBasket({
        key: props.Id,
        Id: props.Id,
        Title: props.Title,
        ImgUrl: props.ImgUrl,
        Description: props.Description,
        Price: props.Price,
      });
    }
  }
  return (
    <li className={classes.li}>
      <div className={classes.image}>
        <img src={props.ImgUrl} alt={props.Title} />
      </div>
      <div>
        <h1>{props.Title}</h1>
      </div>
      <div>
        $ : <span>{props.Price}</span>
      </div>
      <div className={classes.favorite}>
        <button onClick={togglefavoriteStatusHandler}>
          {itemIsFavorite ? "Remove Favorite" : "Add Favorite"}
        </button>
      </div>
      <div className={classes.basket}>
      <button onClick={togglebasketStatusHandler}>
          {itemIsBasket ? "Remove Basket" : "Add Basket"}
        </button>
      </div>
      <div className={classes.shadow}></div>
      <div className={classes.dcp}>{props.Description}</div>
    </li>
  );
}

export default Render;
