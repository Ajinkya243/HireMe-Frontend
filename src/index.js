import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import {QueryClient,QueryClientProvider} from '@tanstack/react-query';
import JobDetails from './components/details/JobDetails';
import PostJob from './components/post/PostJob';
import { ToastContainer } from 'react-toastify';

const queryClient=new QueryClient({
  defaultOptions:{
    quries:{
      staleTime:Infinity,
      cacheTime:Infinity
    }
  }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <QueryClientProvider client={queryClient}>
    <Routes>
      <Route path="/" element={<App/>}/>
      <Route path="/jobs/_id" element={<JobDetails/>}/>
      <Route path="/jobs/post" element={<PostJob/>}/>
    </Routes>
    </QueryClientProvider>
    </BrowserRouter>
    <ToastContainer/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
