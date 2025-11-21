import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {HashRouter, Route, Routes} from "react-router";
import Home, { Confirmation, Navbar, Services} from "./App.tsx";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <HashRouter>
            <Routes>
                <Route path="/" element={<Navbar />}>
                    <Route index element={<Home/>} />
                    <Route path="services" element={<Services/>}/>
                    <Route path="confirmation" element={<Confirmation/>} />
                </Route>
            </Routes>
        </HashRouter>
    </StrictMode>,
)
