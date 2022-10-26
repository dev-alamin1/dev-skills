import { createBrowserRouter } from 'react-router-dom';
import Error from '../Components/Error';
import Home from '../Components/Pages/Home';
import Main from '../Layout/Main';
import Login from '../Components/Auth/Login';
import Register from '../Components/Auth/Register';
import Courses from '../Components/Pages/Courses';

/*
|---------------------------
| Website Router And Element 
|---------------------------
*/
const router = createBrowserRouter([

    {
      path:'/',
      element:<Main/>,
      errorElement: <Error/>,
      children:[
        {
            path:'/home',
            element:<Home/>
        },
        {
          path:'/courses',
          loader:()=>fetch('http://localhost:5000/courses'),
          element:<Courses/>
        },
        {
          path:'/login',
          element:<Login/>
        }
        ,
        {
          path:'/register',
          element:<Register/>

        }
      ]
    }
  ]);

 export default router;
