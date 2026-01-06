
import React, { useEffect, useState } from 'react';
import { Layout } from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Platform from './pages/Platform';
import Programs from './pages/Programs';
import ForStartups from './pages/ForStartups';
import ForInvestors from './pages/ForInvestors';
import FaithValues from './pages/FaithValues';
import Resources from './pages/Resources';
import Contact from './pages/Contact';
import ApplyFlow from './pages/ApplyFlow';
import Dashboard from './pages/Dashboard';

const App: React.FC = () => {
  const [currentHash, setCurrentHash] = useState(window.location.hash || '#/');

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentHash(window.location.hash || '#/');
      window.scrollTo(0, 0);
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const renderContent = () => {
    switch (currentHash) {
      case '#/': return <Home />;
      case '#/about': return <About />;
      case '#/platform': return <Platform />;
      case '#/programs': return <Programs />;
      case '#/startups': return <ForStartups />;
      case '#/investors': return <ForInvestors />;
      case '#/faith': return <FaithValues />;
      case '#/resources': return <Resources />;
      case '#/contact': return <Contact />;
      case '#/apply': return <ApplyFlow />;
      case '#/dashboard': return <Dashboard />;
      default: return <Home />;
    }
  };

  return (
    <Layout>
      {renderContent()}
    </Layout>
  );
};

export default App;
