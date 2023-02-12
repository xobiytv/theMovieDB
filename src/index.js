import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Movies from "./Componets/Movies/Movies";
// import Main from './Componets/Main'
// import SingleMovies from './Componets/Movies/SingleMovies';
import People from './Componets/Movies/People';
import SinglePeople from './Componets/Movies/SinglePeople';
import Search from './Componets/Search/Search';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Search />}></Route>
          <Route path="/movie" element={<Movies />} />
          <Route path="/people" element={<People/>} />
          <Route path='/people/:id' element={<SinglePeople/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
