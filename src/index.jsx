import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/style/index.css";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import { Home } from "./pages/Home";
import { Destination } from "./pages/Destination";
import { Crew } from "./pages/Crew";
import { Technology } from "./pages/Technology";
import { Error } from "./pages/Error";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Router>
            <Routes>
                <Route exact path="/" element={<Home />}></Route>
                <Route path="/space-tourism/destination" element={<Destination />}></Route>
                <Route path="/space-tourism/crew" element={<Crew />}></Route>
                <Route path="/space-tourism/technology" element={<Technology />}></Route>
                <Route path="*" element={<Error />}></Route>
            </Routes>
        </Router>
    </React.StrictMode>
);
