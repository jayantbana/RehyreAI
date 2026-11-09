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

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <WarmNavbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenStudentModal={handleOpenStudentModal}
        onOpenRecruiterModal={handleOpenRecruiterModal}
      />

      {/* key re-runs the entrance animation on each view change */}
      <main key={activeTab} className="flex-1 animate-enter">
        {activeTab === 'home' && (
          <HomeView
            setActiveTab={setActiveTab}
            onOpenStudentModal={handleOpenStudentModal}
            onOpenRecruiterModal={handleOpenRecruiterModal}
          />
        )}

        {activeTab === 'prepare' && (
          <PrepareView onOpenStudentModal={handleOpenStudentModal} />
        )}

        {activeTab === 'enterprise' && (
          <EnterpriseView onOpenRecruiterModal={handleOpenRecruiterModal} />
        )}

        {activeTab === 'scorecard' && (
          <ScorecardView />
        )}
      </main>

      <WarmFooter
        setActiveTab={setActiveTab}
        onOpenStudentModal={handleOpenStudentModal}
        onOpenRecruiterModal={handleOpenRecruiterModal}
      />

      <WarmDemoModal
        open={modalOpen}
        onOpenChange={setModalOpen}
        mode={modalMode}
      />
    </div>
  );
}
