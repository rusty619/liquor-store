import React from "react";

const BrandCard = ({brand}) => {
    const {img,name} = brand


    return(
    <div className="brand-item">
        <img src={img} alt={name} className="brand-img"/>
    </div>)
}

export default BrandCard