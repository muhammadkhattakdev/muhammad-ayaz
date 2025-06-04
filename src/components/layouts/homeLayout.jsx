import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../pages/homepage/components/navbar/navbar";
import Finale from "../pages/homepage/components/finale/finale";

export default function HomeLayout() {

    return (
        <>
            <Navbar />
            <Outlet />
            <Finale />
        </>
    )
}