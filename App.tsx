import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import { ThemeProvider } from './context/ThemeContext';
import { UserRole } from './types';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Admin from './pages/Admin';
import { About, Services, Media, Contact } from './pages/StaticPages';

// Protected Route Component
const ProtectedRoute: React.FC<{ children: React.ReactNode, roles?: UserRole[] }> = ({ children, roles }) => {
  const { user, isAuthenticated, isLoading } = useAuth();

  if (isLoading) return <div className="min-h-screen flex items-center justify-center">Loading...</div>;

  if (!isAuthenticated || !user) {
    return <Navigate to="/login" />;
  }

  if (roles && !roles.includes(user.role)) {
    return <Navigate to="/dashboard" />;
  }

  return <>{children}</>;
};

const AppContent: React.FC = () => {
    return (
        <Router>
          <div className="flex flex-col min-h-screen font-sans bg-gray-50 text-gray-900 transition-colors duration-200">
            <Header />
            <main id="main-content" className="flex-grow focus:outline-none scroll-mt-20" tabIndex={-1}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/media" element={<Media />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route 
                  path="/dashboard" 
                  element={
                    <ProtectedRoute>
                      <Dashboard />
                    </ProtectedRoute>
                  } 
                />
                <Route 
                  path="/admin" 
                  element={
                    <ProtectedRoute roles={[UserRole.ADMIN]}>
                      <Admin />
                    </ProtectedRoute>
                  } 
                />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
    )
}

const App: React.FC = () => {
  return (
    <AuthProvider>
      <ThemeProvider>
         <AppContent />
      </ThemeProvider>
    </AuthProvider>
  );
};

export default App;
