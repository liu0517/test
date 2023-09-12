import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from '../view/App/App'
import Login from '../page/Login'
import Reg from '../page/Reg'
import Page404 from '../page/Page404'

const ConfigRoute = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App />}></Route>
                <Route path='login' element={<Login />}></Route>
                <Route path='reg' element={<Reg />}></Route>
                <Route path='*' element={<Page404 />}></Route>
            </Routes>
        </BrowserRouter>
    )
}


export default ConfigRoute


