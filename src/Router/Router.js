import { createBrowserRouter } from 'react-router-dom';
import Error from '../Components/Error';
import Home from '../Components/Pages/Home';
import Main from '../Layout/Main';
import Login from '../Components/Auth/Login';
import Register from '../Components/Auth/Register';
import Courses from '../Components/Pages/Courses';
import CourseDetails from '../Components/Pages/CourseDetails';
import Checkout from '../Components/Pages/Checkout';
import PrivateRoute from './PrivateRoute';

/*
|---------------------------
| Website Router And Element 
|---------------------------
*/
const router = createBrowserRouter([

    {
      path:'/',
      loader:()=>fetch('http://localhost:5000/courses'),
      element:<Main/>,
      errorElement: <Error/>,
      children:[
        {
            path:'/home',
            element:<Home/>
        },
        {
          path:'/courses',
          element:<Courses/>
        },

        {
            path:'/course/:id',
            loader:({params})=>{
              return fetch(`http://localhost:5000/course/${params.id}`);
            },
            element:<CourseDetails/>
        },

        {
            path:'/checkout/course/:id',
            loader:({params})=>{
              return fetch(`http://localhost:5000/course/${params.id}`);
            },
            element:<PrivateRoute><Checkout/></PrivateRoute>
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
