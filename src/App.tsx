// import { useState } from 'react'
// import Header from './components/Header'
// import Home from './components/Home'

// function App() {

//   return (
//     <>
//     <Header/>
//     <Home/>
      
//     </>
//   )
// }

// export default App

import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes';

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
