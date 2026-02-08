import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Attivita from './pages/Attivita';
import ChiSiamo from './pages/ChiSiamo';
import Sostienici from './pages/Sostienici';
import ArticleDetail from './pages/ArticleDetail';
import ProjectDetail from './pages/ProjectDetail';

// Using a Layout component pattern
const Layout = ({ children }) => {
  return (
    <div className="app-layout" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <main style={{ flex: 1, paddingTop: 'var(--header-height)' }}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/attivita" element={<Attivita />} />
          <Route path="/chi-siamo" element={<ChiSiamo />} />
          <Route path="/sostienici" element={<Sostienici />} />
          <Route path="/news/:id" element={<ArticleDetail />} />
          <Route path="/progetti/:id" element={<ProjectDetail />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App;

