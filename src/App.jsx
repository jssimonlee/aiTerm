import React, { useState } from 'react';
import Header from './components/Header';
import ConceptGuide from './components/ConceptGuide';
import JsonLab from './components/JsonLab';
import MarkdownLab from './components/MarkdownLab';
import SlidePresentation from './components/SlidePresentation';
import QuizSection from './components/QuizSection';
import { Sparkles, Heart } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('concepts');
  const [slideMode, setSlideMode] = useState(false);

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      
      {/* Header Navigation */}
      <Header 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        slideMode={slideMode} 
        setSlideMode={setSlideMode} 
      />

      {/* Main Content Area */}
      <main style={{ maxWidth: '1280px', width: '100%', margin: '0 auto', padding: '0 24px', flex: 1 }}>
        {activeTab === 'concepts' && (
          <ConceptGuide onSelectLab={(labId) => setActiveTab(labId)} />
        )}
        {activeTab === 'json-lab' && (
          <JsonLab />
        )}
        {activeTab === 'md-lab' && (
          <MarkdownLab />
        )}
        {activeTab === 'quiz' && (
          <QuizSection />
        )}
      </main>

      {/* Full Screen Slide Presentation Mode Modal */}
      {slideMode && (
        <SlidePresentation 
          onClose={() => setSlideMode(false)}
          onSelectLab={(labId) => {
            setSlideMode(false);
            setActiveTab(labId);
          }}
        />
      )}

      {/* Footer */}
      <footer className="glass-panel" style={{ borderRadius: '18px 18px 0 0', marginTop: '40px', borderBottom: 'none' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '20px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Sparkles size={16} color="var(--accent-purple)" />
            <span>AI 용어 & 데이터 포맷 스터디 발표용 웹앱</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span>Designed for AI Study Group Presentation</span>
          </div>
        </div>
      </footer>

    </div>
  );
}
