import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import App from './app/App';
import reportWebVitals from './app/reportWebVitals';
import Layout from './core/components/Layout';
import { CreatePlansScreen } from './modules/createPlans/screen/CreatePlans.screen';
import { Dashboard } from './modules/dashboard/screen/Dashboard';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Router>
    <Routes>
      <Route path='/create' element={<Layout><CreatePlansScreen /></Layout>} />
      <Route path='/dashboard' element={<Layout><Dashboard /></Layout>} />
    </Routes>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
