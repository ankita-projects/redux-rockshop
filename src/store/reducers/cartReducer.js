import React from 'react';
import item1 from "../../images/item1.jpg";
import item2 from "../../images/item2.jpg";
import item3 from "../../images/item3.jpg";
import item4 from "../../images/item4.jpg";


const initState = {
    items: [
        {id:1,title:'Winter body', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:110,img:item1},
        {id:2,title:'Adidas', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:80,img: item2},
        {id:3,title:'Vans', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",price:120,img: item3},
        {id:4,title:'White', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:260,img:item4}
    ],
    addedItems:[],
    total: 0

}
const cartReducer = (state = initState,action) => {


    return state;
}

export default cartReducer;

