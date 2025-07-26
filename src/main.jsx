import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import './style/index.scss'
import './style/shop.scss'

import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import Shopcontext from './context/Shopcontext.jsx';




createRoot(document.getElementById('root')).render(
    <>

<Shopcontext>

   <BrowserRouter>

    
    <App />
     



    <ToastContainer/>
    </BrowserRouter>
</Shopcontext>



   
 
    </>
)
