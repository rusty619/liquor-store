import React,{useState, useEffect} from "react"

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

    return(<div>hi</div>)
}

export default Home