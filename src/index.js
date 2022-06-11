import React from 'react';
import ReactDOM from 'react-dom';
import Home from './component/Home';
import About from './component/About';
import Courses from './component/Courses.jsx';
import Tab1 from './component/Tab1.jsx';
import Tab2 from './component/Tab2.jsx';
import Content from './component/content.jsx';
import Dashbord from './component/dashbord.jsx';
import {BrowserRouter as Router , Routes , Route , Navigate} from 'react-router-dom';
import './index.css';


// const root = ReactDOM.createRoot(document.getElementById('root'));
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
    
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();


ReactDOM.render(

    <Router>
      <Routes>
        <Route path='/Home' element={<Navigate replace to="/" />}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Dashbord' element={<Dashbord/>}/>
        <Route path='/Courses' element={<Courses/>}>
          <Route path='Tab1' element={<Tab1/>}>
            <Route path=':id' element={<Content/>}/>
          </Route>
          <Route path='Tab2' element={<Tab2/>}/>
        </Route> 
        <Route path='/' element={<Home/>}/>
      </Routes>
    </Router>,
    document.getElementById('root')
);