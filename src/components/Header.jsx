import React from 'react';
import { BookOpen, Code, FileText, Presentation, HelpCircle, Sparkles } from 'lucide-react';

export default function Header({ activeTab, setActiveTab, slideMode, setSlideMode }) {
  const navItems = [
    { id: 'concepts', label: '핵심 개념 학습', icon: BookOpen },
    { id: 'json-lab', label: 'JSON 실습실', icon: Code },
    { id: 'md-lab', label: 'Markdown 실습실', icon: FileText },
    { id: 'quiz', label: 'AI 퀴즈 & 복습', icon: HelpCircle },
  ];

  return (
    <header className="glass-panel" style={{ borderRadius: '0 0 18px 18px', borderTop: 'none', position: 'sticky', top: 0, zIndex: 50, marginBottom: '24px' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '14px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
        
        {/* Logo & Title */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ 
            width: '42px', 
            height: '42px', 
            borderRadius: '12px', 
            background: 'var(--gradient-primary)', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            boxShadow: 'var(--shadow-glow)'
          }}>
            <Sparkles size={24} color="#fff" />
          </div>
          <div>
            <h1 style={{ fontSize: '1.25rem', fontWeight: 800, letterSpacing: '-0.02em', display: 'flex', alignItems: 'center', gap: '8px' }}>
              AI Tech <span className="gradient-text">Study Master</span>
            </h1>
            <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
              AI 스터디 발표용 필수 용어 & 실습 가이드
            </p>
          </div>
        </div>

        {/* Navigation Tabs */}
        <nav style={{ display: 'flex', gap: '6px', background: 'rgba(0,0,0,0.25)', padding: '4px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id && !slideMode;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setSlideMode(false);
                  setActiveTab(item.id);
                }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '8px 16px',
                  borderRadius: '8px',
                  border: 'none',
                  fontSize: '0.88rem',
                  fontWeight: isActive ? 600 : 500,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  background: isActive ? 'var(--gradient-primary)' : 'transparent',
                  color: isActive ? '#ffffff' : 'var(--text-secondary)',
                  boxShadow: isActive ? '0 4px 12px rgba(139, 92, 246, 0.3)' : 'none'
                }}
              >
                <Icon size={16} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Presentation Slide Mode Toggle Button */}
        <div>
          <button
            onClick={() => setSlideMode(!slideMode)}
            className={slideMode ? 'btn-primary' : 'btn-secondary'}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              border: slideMode ? 'none' : '1px solid var(--accent-purple)',
              color: slideMode ? '#fff' : '#c084fc'
            }}
          >
            <Presentation size={18} />
            <span>{slideMode ? '일반 모드로 전환' : '🎤 발표용 슬라이드 모드'}</span>
          </button>
        </div>

      </div>
    </header>
  );
}
