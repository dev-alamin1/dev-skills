import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './Router/Router';
import toast, { Toaster } from 'react-hot-toast';

function App() {
  
  return (
     <div>
         <Toaster/>
         <RouterProvider  router={router}/>
     </div>
  );
}

export default App;
