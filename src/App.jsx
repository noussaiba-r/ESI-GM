import { useState, useContext } from 'react';
import reactLogo from './assets/react.svg';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserManagement from './Pages/UserManagement';
import MyRequestsPage from './Pages/MyRequestsPage';
import ValidationSlipPage from './Pages/ValidationSlipPage';
import Register from './Pages/Register';
import CombinedUserManagement from './Pages/AddUser.jsx';
import { RequestProvider } from './Context/RequestContext';
import { ToastProvider } from './Context/ToastContext';
import SuperAdminDashboard from './Pages/SuperAdminDashboard';
import LaboratoryInventory from './Pages/LaboratoryInventory';
import LaboratoryManagement from './Pages/LaboratoryManagement.jsx';
import RequestButtonsGuide from './Pages/RequestButtonsGuide.jsx';
import { ThemeProvider } from './Context/ThemeContext.jsx';

import './App.css';
import RequestWorkflow from './Pages/RequestWorkflow';

function App() {
  const [dark, setDark] = useState(false);
  const toggleTheme = () => setDark(!dark);

  return (
    <ThemeProvider>
      <BrowserRouter>
        <ToastProvider>
          <RequestProvider>
            <div className={dark ? 'dark' : ''}>
              <Routes>
                <Route path="/register" element={<Register />} />
                <Route
                  path="/request"
                  element={<MyRequestsPage toggleTheme={toggleTheme} dark={dark} />}
                />
                <Route path="/SuperAdminDashboard" element={<SuperAdminDashboard />} />
                <Route path="/Laboratory" element={<LaboratoryInventory />} />
                <Route path="/RequestWorkFlow" element={<RequestWorkflow />} />
                <Route path="/users" element={<UserManagement />} />
                <Route path="/labs" element={<LaboratoryManagement />} />

                <Route path="/RequestButtonsGuide" element={<RequestButtonsGuide />} />
              </Routes>
            </div>
          </RequestProvider>
        </ToastProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}
export default App;
