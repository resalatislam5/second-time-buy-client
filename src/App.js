import { RouterProvider } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import './App.css';
import { routes } from './Routes/routers';

function App() {
  return (
    <div className="App">
      <Toaster
            position="top-center"
            reverseOrder={false}
          />
        <RouterProvider router={routes} />
    </div>
  );
}

export default App;
