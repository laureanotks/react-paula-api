import axios from "axios";
import { useEffect } from "react";

function Card(props){

    const pegarNews=()=>{
        axios.get('http://localhost:8000/news')
        .then(response => props.setNews(response.data))
        .catch(error => console.log(error))
    }

    useEffect( () => {
        pegarNews()
    }, [])

    const novasNews = props.news.map((item) => {
        return(
            <div key={item.id}>
                <h2>{item.titulo}</h2>
                <p>{item.content}</p>
            </div>
        )
    })

    return(
        <>
        {novasNews}
        </>

    )
}

export default Card;