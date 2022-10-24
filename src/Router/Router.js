import { createBrowserRouter } from 'react-router-dom';
import Error from '../Components/Error';
import Home from '../Components/Pages/Home';
import Main from '../Layout/Main';

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
            path:'/',
            element:<Home/>
        }
      ]
    }
  ]);

 export default router;
