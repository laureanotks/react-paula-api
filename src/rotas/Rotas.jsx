import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../paginas/Login/Login";
import Home from "../paginas/Home/Home";

function Rotas(props) {

    return(
        <BrowserRouter>
        <Routes>
            <Route index element={<Login/>}/>
            <Route path="home" element={<Home news={props.news} setNews={props.setNews}/>}/>
        </Routes>
        </BrowserRouter>
    )
}

export default Rotas;