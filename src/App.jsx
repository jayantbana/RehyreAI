import React, { useState, useEffect } from 'react';
import WarmNavbar from './components/WarmNavbar.jsx';
import WarmFooter from './components/WarmFooter.jsx';
import HomeView from './components/HomeView.jsx';
import PrepareView from './components/PrepareView.jsx';
import EnterpriseView from './components/EnterpriseView.jsx';
import ScorecardView from './components/ScorecardView.jsx';
import WarmDemoModal from './components/WarmDemoModal.jsx';

export default function App() {
  const [activeTab, setActiveTab] = useState('home'); // 'home' | 'prepare' | 'enterprise' | 'scorecard'
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState('student'); // 'student' | 'recruiter'

  // Scroll to top whenever view changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeTab]);

  const handleOpenStudentModal = () => {
    setModalMode('student');
    setModalOpen(true);
  };

  const handleOpenRecruiterModal = () => {
    setModalMode('recruiter');
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#FAFAF7] text-[#1C1E21] flex flex-col font-sans selection:bg-[#1E3A8A]/15 selection:text-[#1E3A8A]">
      {/* 1. Glassmorphic Warm Ivory Navigation */}
      <WarmNavbar 
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenStudentModal={handleOpenStudentModal}
        onOpenRecruiterModal={handleOpenRecruiterModal}
      />

      {/* 2. Multi-Page Active View Layout */}
      <main className="flex-1">
        {activeTab === 'home' && (
          <HomeView 
            setActiveTab={setActiveTab}
            onOpenStudentModal={handleOpenStudentModal}
            onOpenRecruiterModal={handleOpenRecruiterModal}
          />
        )}

        {activeTab === 'prepare' && (
          <PrepareView 
            onOpenStudentModal={handleOpenStudentModal}
          />
        )}

        {activeTab === 'enterprise' && (
          <EnterpriseView 
            onOpenRecruiterModal={handleOpenRecruiterModal}
          />
        )}

        {activeTab === 'scorecard' && (
          <ScorecardView />
        )}
      </main>

      {/* 3. Minimalist Warm Editorial Footer */}
      <WarmFooter 
        setActiveTab={setActiveTab}
        onOpenStudentModal={handleOpenStudentModal}
        onOpenRecruiterModal={handleOpenRecruiterModal}
      />

      {/* 4. Interactive Modal (Student Mock Loop & Recruiter Demo) */}
      <WarmDemoModal 
        isOpen={modalOpen}
        mode={modalMode}
        onClose={handleCloseModal}
      />
    </div>
  );
}
