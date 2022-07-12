import React,{useState, useEffect} from "react"
import BrandContainer from "./BrandContainer"

const Home = () => {
    const [brandData, setBrandData] = useState([])
    
    const request = async () => {
        let req = await fetch('/brands')
        let res = await req.json()
        setBrandData(res)
    }

    useEffect( () => {
        request()
    },[])

    console.log(brandData)

    return(
    <div>
        <BrandContainer brandData={brandData}/>
    </div>)
}

export default Home