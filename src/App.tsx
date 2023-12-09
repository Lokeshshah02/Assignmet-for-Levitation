import React from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import LoginPage from './components/Forms';
import RegistrationPage from './pages/RegistrationPage';
import MultiStepForm from './pages/MultiStepForm';
import SubmissionTable from './pages/SubmissionTable';

const App: React.FC = () => {
  return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <nav className="bg-gray-800 p-4 text-white">
          <NavLink to="/" className="mr-4" >
            Login
          </NavLink>
          <NavLink to="/register" className="mr-4" >
            Register
          </NavLink>
          <NavLink to="/form" className="mr-4">
            Multi-Step Form
          </NavLink>
          <NavLink to="/submissions">
            Submission Table
          </NavLink>
        </nav>

        <div className="w-full max-w-screen-md mt-8">
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/register" element={<RegistrationPage />} />
            <Route path="/form" element={<MultiStepForm />} />
            <Route
              path="/submissions"
              element={<SubmissionTable submissions={[]} />}
            />
          </Routes>
        </div>
      </div>
  );
};

export default App;
