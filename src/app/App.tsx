import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import AllCases from '../pages/all-cases';
import CompletedCases from '../pages/completed-cases';
import NotFound from '../pages/not-found';
import ErrorPage from '../pages/error-page';
import NavBar from '../components/nav-bar';

const App: React.FC = () => {
  return (
    <Router basename={'/test-task-raccoon'}>
      <>
        <NavBar />
        <Routes>
          <Route path="/" element={<AllCases />} errorElement={<ErrorPage />} />
          <Route
            path="/completed-cases"
            element={<CompletedCases />}
            errorElement={<ErrorPage />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </>
    </Router>
  );
};

export default App;
