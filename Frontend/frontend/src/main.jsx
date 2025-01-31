import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import { Adminpage } from './pages/AdminPage/Adminpage.jsx'
import { AdminAddProduct } from './pages/AdminPage/AdminAddProduct.jsx'
import { SignUpPage } from './pages/UserPages/SignUpPage.jsx'
import { LoginPage } from './pages/UserPages/LoginPage.jsx'
import { AdminLogin } from './Admin/AdminComponents/AdminLogin/AdminLogin.jsx'
import { AdminLoginPage } from './pages/AdminPage/AdminLoginPage.jsx'
import { AdminAuthRoute } from './AdminAuthRoute.jsx'
import { UserAuthRoute } from './UserAuthRoute.jsx'
import { Homepage } from './pages/UserPages/Homepage.jsx'
import { MenPage } from './pages/UserPages/MenPage.jsx'
import { WomenPage } from './pages/UserPages/WomenPage.jsx'
import { KidPage } from './pages/UserPages/KidPage.jsx'
import { ProductPage } from './pages/UserPages/ProductPage.jsx'
import store from './Components/CartAdding/store.js'
import { CartPage } from './pages/UserPages/CartPage.jsx'

const router=createBrowserRouter([
  {path:"/admin",element:(
<AdminAuthRoute>
  <Adminpage/>
</AdminAuthRoute>
  )},
 
  {path:"/adminAddProduct",element:(
  <AdminAuthRoute>
    <AdminAddProduct/>
  </AdminAuthRoute>

)},
{path:"/home",element:(
<UserAuthRoute>
  <Homepage/>
</UserAuthRoute>
)},
{path:"/men",element:(
  <UserAuthRoute>
    <MenPage/>
  </UserAuthRoute>
)},
{path:"/women",element:(
  <UserAuthRoute>
    <WomenPage/>
  </UserAuthRoute>
)},
{path:"/kid",element:(
  <UserAuthRoute>
    <KidPage/>
  </UserAuthRoute>
)},
{path:"/product/:id",element:(
<UserAuthRoute>
  <ProductPage/>
</UserAuthRoute>
)},
{path:"/cart",element:(
  <UserAuthRoute>
    <CartPage/>
  </UserAuthRoute>
)},
  {path:"/",element:<SignUpPage/>},
  {path:"/login",element:<LoginPage/>},
  {path:"/adminlogin",element:<AdminLoginPage/>}
])

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
      <RouterProvider router={router}>
    <App />
    </RouterProvider>
  </Provider>


)
