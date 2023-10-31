import React from 'react'
import ListCard from './ListCard';

function ListView({ foodItems, foodPrice, totalPrice, setTotalPrice, totalItems, setTotalItems }) {
    const cardItems = foodItems.map((item, index) => {
        return <ListCard key={index} name={item.name} price={foodPrice[item.name]} totalPrice={totalPrice} setTotalPrice={setTotalPrice} totalItems={totalItems} setTotalItems={setTotalItems} />
    });

    return (
        <div style={{ textAlign: "center", alignItems: "center", alignContent: "center", justifyContent: "center" }}>
            {cardItems}
        </div>
    )
}

export default ListView