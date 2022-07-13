import React from "react";
import BrandCard from "./BrandCard";

const BrandContainer = ({brandData}) => {
    return(
    <div className="brand-container">
        {brandData.map((brand) => {
            return(
                <BrandCard key={brand.id} brand={brand}/>
            )
        })}
    </div>)
}

export default BrandContainer