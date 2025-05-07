
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Home from './Home';

const Index = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    // Redirect to home component
    navigate('/', { replace: true });
  }, [navigate]);

  // Render Home component directly to avoid blank page during redirect
  return <Home />;
};

export default Index;
