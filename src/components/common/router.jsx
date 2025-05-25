import React from "react";
import { Route, Routes } from "react-router-dom";
import HomeLayout from "../layouts/homeLayout/homeLayout";
import Homepage from "../pages/homepage/homepage";



export default function Router() {


    return (
        <>
            <Routes>
                <Route path="/" element={<HomeLayout />}>
                    <Route index element={<Homepage />} />
                </Route>
            </Routes>
        </>
    )
}