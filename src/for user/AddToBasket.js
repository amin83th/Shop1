import { createContext,useState } from "react";
const BasketsContext=
    createContext({
        baskets:[],
        totalBaskets: 0,
        addBasket:(basketMeetup)=>{},
        removeBasket:(meetupId)=>{},
        itemIsBasket:(meetupId)=>{},
   });


export function BaketsContextProvider(props){
    const[userBaskets,setUserBasket]=useState([]);


    function addBasketHandler(basketMeetup){
        setUserBasket((preUserBaskets)=>{
            return preUserBaskets.concat(basketMeetup)
        })
    };
    function removeBasketHandler(meetupId){
        setUserBasket((preUserBaskets)=>{
            return preUserBaskets.filter(meetup => meetup.Id !== meetupId);
        })
    };
    function itemIsBasketHandler(meetupId){
        return userBaskets.some(meetup => meetup.Id === meetupId);
    };

    const context={
        baskets:userBaskets,
        totalBasket:userBaskets.length,
        addBasket:addBasketHandler,
        removeBasket:removeBasketHandler,
        itemIsBasket:itemIsBasketHandler,
    }

    return <BasketsContext.Provider value={context}>
        {props.children}
    </BasketsContext.Provider>
}


export default BasketsContext;