import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../../componentes/Card/Card";


function Home(props){

    const navigate = useNavigate()

    useEffect(()=>{
        const token = localStorage.getItem('token')
        if(!token){
            navigate('/')
        }

    }, {navigate})

    const hadleLogout = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('email')
        navigate('/')
    }

    return(
        <>
        <button onClick={hadleLogout}>Logout</button>
        <Card news={props.news} setNews={props.setNews}/>
        </>
    )
}

export default Home;