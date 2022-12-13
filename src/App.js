import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { Router } from './Router/Router';

function App() {
  return (
    <div className='App lg:w-[1230px] lg:mx-auto'>
     <RouterProvider router={Router}></RouterProvider>
     <Toaster />
    </div>
  );
}
export default App;
