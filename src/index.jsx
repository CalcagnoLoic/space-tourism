import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/style/index.css";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import { Home } from "./pages/Home";
import { Destination } from "./pages/Destination";
import { Crew } from "./pages/Crew";
import { Technology } from "./pages/Technology";
import { Header } from "./components/Header";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Router>
            <Header />
            <Routes>
                <Route exact path="/" element={<Home />}></Route>
                <Route path="/destination" element={<Destination />}></Route>
                <Route path="/crew" element={<Crew />}></Route>
                <Route path="/technology" element={<Technology />}></Route>
            </Routes>
        </Router>
    </React.StrictMode>
);
