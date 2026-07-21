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
    <header className="glass-panel" style={{ 
      borderRadius: '0 0 24px 24px', 
      borderTop: 'none', 
      position: 'sticky', 
      top: 0, 
      zIndex: 50, 
      marginBottom: '40px',
      background: 'rgba(255, 255, 255, 0.9)',
      backdropFilter: 'blur(16px)',
      boxShadow: '0 4px 20px rgba(15, 23, 42, 0.05)'
    }}>
      <div style={{ maxWidth: '1320px', margin: '0 auto', padding: '18px 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '24px' }}>
        
        {/* Logo & Title */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div style={{ 
            width: '48px', 
            height: '48px', 
            borderRadius: '16px', 
            background: 'var(--gradient-primary)', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            boxShadow: 'var(--shadow-glow)'
          }}>
            <Sparkles size={26} color="#fff" />
          </div>
          <div>
            <h1 style={{ fontSize: '1.35rem', fontWeight: 800, letterSpacing: '-0.02em', color: '#0f172a', display: 'flex', alignItems: 'center', gap: '8px' }}>
              AI Tech <span className="gradient-text">Study Master</span>
            </h1>
            <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', fontWeight: 500 }}>
              AI 스터디 발표용 필수 용어 & 실습 가이드
            </p>
          </div>
        </div>

        {/* Navigation Tabs */}
        <nav style={{ display: 'flex', gap: '8px', background: '#f1f5f9', padding: '6px', borderRadius: '14px', border: '1px solid #e2e8f0' }}>
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
                  gap: '10px',
                  padding: '10px 20px',
                  borderRadius: '10px',
                  border: 'none',
                  fontSize: '0.92rem',
                  fontWeight: isActive ? 700 : 600,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  background: isActive ? '#ffffff' : 'transparent',
                  color: isActive ? 'var(--accent-purple)' : 'var(--text-secondary)',
                  boxShadow: isActive ? '0 4px 12px rgba(15, 23, 42, 0.08)' : 'none'
                }}
              >
                <Icon size={18} />
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
              gap: '10px',
              border: slideMode ? 'none' : '1px solid #c084fc',
              background: slideMode ? 'var(--gradient-primary)' : '#f3e8ff',
              color: slideMode ? '#fff' : '#6d28d9',
              padding: '10px 20px'
            }}
          >
            <Presentation size={20} />
            <span>{slideMode ? '일반 모드로 전환' : '🎤 발표용 슬라이드 모드'}</span>
          </button>
        </div>

      </div>
    </header>
  );
}
