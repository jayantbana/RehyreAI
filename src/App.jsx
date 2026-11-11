import React, { useState, useEffect } from 'react';
import WarmNavbar from './components/WarmNavbar.jsx';
import WarmFooter from './components/WarmFooter.jsx';
import HomeView from './components/HomeView.jsx';
import PrepareView from './components/PrepareView.jsx';
import EnterpriseView from './components/EnterpriseView.jsx';
import ScorecardView from './components/ScorecardView.jsx';
import WarmDemoModal from './components/WarmDemoModal.jsx';
import StudentDashboard from './components/student/StudentDashboard.jsx';
import AssessmentView from './components/student/AssessmentView.jsx';
import InterviewView from './components/student/InterviewView.jsx';

/**
 * Student sub-views: null | 'dashboard' | 'assessment' | 'interview'
 * When a student sub-view is active, we hide the normal PrepareView and
 * render the AI-powered experience instead.
 */
export default function App() {
  const [activeTab, setActiveTab] = useState('home'); // 'home' | 'prepare' | 'enterprise' | 'scorecard'
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState('student'); // 'student' | 'recruiter'

  // Student session state — set when student completes the modal form
  const [studentSession, setStudentSession] = useState(null); // { track, language }
  const [studentView, setStudentView] = useState(null); // null | 'dashboard' | 'assessment' | 'interview'

  // Scroll to top whenever view changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeTab, studentView]);

  const handleOpenStudentModal = () => {
    setModalMode('student');
    setModalOpen(true);
  };

  const handleOpenRecruiterModal = () => {
    setModalMode('recruiter');
    setModalOpen(true);
  };

  /** Called by WarmDemoModal when student submits track + language */
  const handleStudentStart = (track, language) => {
    setStudentSession({ track, language });
    setStudentView('dashboard');
    setActiveTab('prepare');
    setModalOpen(false);
  };

  /** Student picks "assessment" or "interview" from dashboard */
  const handleStudentSelect = (mode) => {
    setStudentView(mode); // 'assessment' | 'interview'
  };

  /** Student finishes (or exits) the AI session → back to dashboard */
  const handleStudentComplete = () => {
    setStudentView('dashboard');
  };

  /** Student clicks "back" from dashboard → back to PrepareView (marketing) */
  const handleStudentBack = () => {
    setStudentView(null);
    setStudentSession(null);
  };

  // Render the active student sub-view (overrides normal prepare tab content)
  const renderStudentView = () => {
    if (!studentView || !studentSession) return null;

    if (studentView === 'dashboard') {
      return (
        <StudentDashboard
          track={studentSession.track}
          language={studentSession.language}
          onSelect={handleStudentSelect}
          onBack={handleStudentBack}
        />
      );
    }

    if (studentView === 'assessment') {
      return (
        <AssessmentView
          track={studentSession.track}
          language={studentSession.language}
          onComplete={handleStudentComplete}
          onBack={() => setStudentView('dashboard')}
        />
      );
    }

    if (studentView === 'interview') {
      return (
        <InterviewView
          track={studentSession.track}
          language={studentSession.language}
          onComplete={handleStudentComplete}
          onBack={() => setStudentView('dashboard')}
        />
      );
    }

    return null;
  };

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <WarmNavbar
        activeTab={activeTab}
        setActiveTab={(tab) => {
          // If navigating away from prepare, also clear student sub-view
          if (tab !== 'prepare') {
            setStudentView(null);
            setStudentSession(null);
          }
          setActiveTab(tab);
        }}
        onOpenStudentModal={handleOpenStudentModal}
        onOpenRecruiterModal={handleOpenRecruiterModal}
      />

      {/* key re-runs the entrance animation on each view change */}
      <main key={activeTab + (studentView ?? '')} className="flex-1 animate-enter">
        {activeTab === 'home' && (
          <HomeView
            setActiveTab={setActiveTab}
            onOpenStudentModal={handleOpenStudentModal}
            onOpenRecruiterModal={handleOpenRecruiterModal}
          />
        )}

        {activeTab === 'prepare' && (
          studentView
            ? renderStudentView()
            : <PrepareView onOpenStudentModal={handleOpenStudentModal} />
        )}

        {activeTab === 'enterprise' && (
          <EnterpriseView onOpenRecruiterModal={handleOpenRecruiterModal} />
        )}

        {activeTab === 'scorecard' && <ScorecardView />}
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
        onStudentStart={handleStudentStart}
      />
    </div>
  );
}
