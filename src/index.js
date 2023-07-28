import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { DarkModeContextProvider } from './context/darkModeContext';
import { AuthContextProvider } from './context/AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <DarkModeContextProvider>
          <App />
        </DarkModeContextProvider>
      </AuthContextProvider>
    </BrowserRouter>,
  </React.StrictMode>
);

// ReactDOM.render(
//   <React.StrictMode>
//     <DarkModeContextProvider>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//     </DarkModeContextProvider>
//   </React.StrictMode>,
//   document.getElementById("root")
// );
