import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './Router/Router';
import toast, { Toaster } from 'react-hot-toast';
import MouseParticles from 'react-mouse-particles'

function App() {
  
  return (
     <div>
         <MouseParticles g={1} color="random" cull="col,image-wrapper"/>
         <Toaster/>
         <RouterProvider  router={router}/>
     </div>
  );
}

export default App;
