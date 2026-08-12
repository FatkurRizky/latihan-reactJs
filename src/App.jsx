import React, {useState} from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import PPDB from "./pages/PPDB";
import Try from "./pages/Try";
import Tombol from "./pages/ButtonFalse";
import SharedLayout from "./components/SharedLayout";
import ThemeProvider from "./context/ThemeContext";
import LiftingPage from "./pages/LiftingPage";
import SearchBar from "./pages/SearchBar";
import UsePage from "./pages/usePage";
import TimePage from "./pages/TimePage";
import FetchPage from "./pages/FetchPage";
import TodosPage from "./pages/TodoPage";
import MiniQuest from "./pages/MiniQuest";


export default function App(){
  return (
    <ThemeProvider>
      <BrowserRouter>
      <Routes>
        <Route element={<SharedLayout/>}>
          <Route path={"/timepage"} element={<TimePage/>}/>
          <Route path="/miniquest" element={<MiniQuest/>}></Route>
          <Route path="/todopage" element={<TodosPage/>} />
          <Route path={"/fetchpage"} element={<FetchPage/>} />
          <Route path="/usePage" element={<UsePage/>}/>
          <Route path={"/searchbar"} element={<SearchBar/>}/>
          <Route path={"/"} element={<Home/>}/>
          <Route path="/try" element={<Try/>} />
          <Route path={"/ppdb"} element={<PPDB/>}/>
          <Route path="/tombol" element={<Tombol/>}/>
        </Route>
      </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

