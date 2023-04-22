import React from "react";
import { Routes, Route } from 'react-router-dom'
import Main from "../pages/Main";
import Detail from "../pages/Detail";

function Routepage() {
    return (
        <>
            <Routes>
                <Route path="/"
                    element={<Main />} />
                <Route path="/detail/:id" element={<Detail />} />
            </Routes>
        </>
    );
}

export default Routepage