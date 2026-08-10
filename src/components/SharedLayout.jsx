import React, {useState} from "react";
import HeadNav from "./HeadNav";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

export default function SharedLayout(){

    return (
        <div>
            <Outlet>
                <HeadNav/>
                <Footer/>
            </Outlet>
        </div>
    )
    
}