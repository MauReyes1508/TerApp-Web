import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.js"


const App = () => (
    <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<Home/>}></Route>
        </Routes>
    </BrowserRouter>
)

export default App