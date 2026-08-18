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
import RefPage from "./pages/RefPage";
import AsyncPage from "./pages/AsyncPage";
import Quiz from "./pages/Quiz";
import UserContextProvider from "./context/UserContext";
import LoginSimulation from "./pages/LoginSimulation";


export default function App(){
  return (
    <ThemeProvider>
      <UserContextProvider>
      <BrowserRouter>
      <Routes>
        <Route element={<SharedLayout/>}>
          <Route path="/asyncpage" element={<AsyncPage/>}/>
          <Route path="/usecontext"/>
          <Route path="/quiz" element={<Quiz/>}/>
          <Route path="/refpage" element={<RefPage/>} />
          <Route path={"/timepage"} element={<TimePage/>}/>
          <Route path={'login-sim'} element={<LoginSimulation/>}/>
          <Route path="/miniquest" element={<MiniQuest/>}/>
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
      </UserContextProvider>
    </ThemeProvider>
  )
}

