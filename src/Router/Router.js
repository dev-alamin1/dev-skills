import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';

/*
|---------------------------
| Website Router And Element 
|---------------------------
*/
const router = createBrowserRouter([

    {
      path:'/',
      element:<Main/>
    }
  ]);

 export default router;
