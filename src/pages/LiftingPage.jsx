import React, {useState} from "react";
import {menuData} from "../data/menuData";
import ProductList from "../pages/ProductList";
import ResultCount from "../pages/ResultCount";
import SearchBar from "../pages/SearchBar";


export default function LiftingPage(){
    const [query, setQuery] = useState("")
    const filtered = menuData.filter((item) => item.nama.toLowerCase().includes(query.toLocaleLowerCase()));

    return (
        <div>
            <SearchBar query={query} setQuery={setQuery}/>
            <ResultCount count={filtered.length} />
            <ProductList products={filtered} />
            
        </div>
    )

}