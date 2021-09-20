import { createContext,useState } from "react";
const FavoritesContext=
    createContext({
        favorites:[],
        totalFavorites: 0,
        addFavorite:(favoriteMeetup)=>{},
        removeFavorite:(meetupId)=>{},
        itemIsFavorite:(meetupId)=>{},
   });


export function FavoritesContextProvider(props){
    const[userFavorites,setUserFavorite]=useState([]);


    function addFavoriteHandler(favoriteMeetup){
        setUserFavorite((preUserFavorites)=>{
            return preUserFavorites.concat(favoriteMeetup)
        })
    };
    function removeFavoriteHandler(meetupId){
        setUserFavorite((preUserFavorites)=>{
            return preUserFavorites.filter(meetup => meetup.Id !== meetupId);
        })
    };
    function itemIsFavoriteHandler(meetupId){
        return userFavorites.some(meetup => meetup.Id === meetupId);
    };

    const context={
        favorites:userFavorites,
        totalFavorites:userFavorites.length,
        addFavorite:addFavoriteHandler,
        removeFavorite:removeFavoriteHandler,
        itemIsFavorite:itemIsFavoriteHandler,

    }

    return <FavoritesContext.Provider value={context}>
        {props.children}
    </FavoritesContext.Provider>
}


export default FavoritesContext;