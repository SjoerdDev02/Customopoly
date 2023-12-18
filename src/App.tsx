import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./assets/pages/Home/Home";
import Login from "./assets/pages/Login/Login";
import Register from "./assets/pages/Register/Register";
import NotFound from "./assets/pages/NotFound/NotFound";
import Dashboard from "./assets/pages/Dashboard/Dashboard";
import Customizer from "./assets/pages/Customizer/Customizer";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/register' element={<Register />} />
                <Route path='/login' element={<Login />} />
                <Route path='/dashboard' element={<Dashboard />} />
                <Route path='/customizer' element={<Customizer />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
