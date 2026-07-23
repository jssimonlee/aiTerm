import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, X, Code, FileText, Monitor, Server, Database, Sparkles, CheckCircle2 } from 'lucide-react';

export default function SlidePresentation({ onClose, onSelectLab }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 'intro',
      tag: '초보자 발표 개요',
      title: 'AI 생태계를 이루는 5가지 쉬운 개발 용어 입문',
      subtitle: 'JSON, Markdown, Frontend, Backend, DB 완벽 이해하기',
      icon: Sparkles,
      color: '#7c3aed',
      content: (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', alignItems: 'center', textAlign: 'center' }}>
          <div style={{ background: '#f3e8ff', padding: '32px', borderRadius: '20px', border: '1px solid #e9d5ff', maxWidth: '850px' }}>
            <p style={{ fontSize: '1.2rem', color: '#4c1d95', lineHeight: 1.8, fontWeight: 600 }}>
              복잡한 코딩 지식 없이도 OK! **웹/앱 개발의 5가지 핵심 개념**을 일반적인 역할과 AI 활용법으로 쉽게 풀어드립니다.
            </p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '18px', width: '100%', maxWidth: '920px', marginTop: '8px' }}>
            {[
              { label: 'JSON 메모지', desc: '앱 ↔ AI 통신 서류', color: '#7c3aed', bg: '#f3e8ff' },
              { label: 'Markdown 문서', desc: 'AI ↔ 사람 최고 언어', color: '#0284c7', bg: '#e0f2fe' },
              { label: '프론트엔드', desc: '손님이 보는 카페 카운터', color: '#db2777', bg: '#fce7f3' },
              { label: '백엔드', desc: '보이지 않는 카페 주방', color: '#059669', bg: '#d1fae5' },
              { label: 'DB (SQL vs Vector)', desc: '일반 금고 vs AI 도서관', color: '#d97706', bg: '#fef3c7' },
            ].map((item, idx) => (
              <div key={idx} style={{ background: item.bg, border: `1px solid ${item.color}30`, padding: '20px 14px', borderRadius: '16px', textAlign: 'center' }}>
                <div style={{ color: item.color, fontWeight: 800, fontSize: '1.1rem', marginBottom: '6px' }}>{item.label}</div>
                <div style={{ fontSize: '0.88rem', color: '#475569', fontWeight: 500 }}>{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      id: 'json',
      tag: 'Topic 01',
      title: 'JSON: 앱 간 통신의 표준 메모지',
      subtitle: '서로 다른 서비스(스마트폰 앱 ↔ AI 서버)가 대화하는 포장된 택배 상자!',
      icon: Code,
      color: '#7c3aed',
      content: (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px', alignItems: 'center' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
            <div className="badge badge-purple" style={{ width: 'fit-content' }}>앱 간 통신의 핵심</div>
            <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0f172a' }}>💡 초보자를 위한 개념 설명</h3>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '14px', listStyle: 'none' }}>
              <li style={{ display: 'flex', gap: '12px', fontSize: '1.05rem', color: '#334155', lineHeight: 1.6 }}>
                <CheckCircle2 color="#7c3aed" size={24} style={{ flexShrink: 0 }} />
                <span><strong>API 통신 서류:</strong> 앱에서 AI로 질문을 보내고 대답을 받을 때 쓰는 메모지</span>
              </li>
              <li style={{ display: 'flex', gap: '12px', fontSize: '1.05rem', color: '#334155', lineHeight: 1.6 }}>
                <CheckCircle2 color="#7c3aed" size={24} style={{ flexShrink: 0 }} />
                <span><strong>Key-Value 방식:</strong> "질문": "안녕" 처럼 이름표와 값이 짝을 이룸</span>
              </li>
              <li style={{ display: 'flex', gap: '12px', fontSize: '1.05rem', color: '#334155', lineHeight: 1.6 }}>
                <CheckCircle2 color="#7c3aed" size={24} style={{ flexShrink: 0 }} />
                <span><strong>DB와의 차이점:</strong> JSON은 [주고받는 택배 상자/파일]이고, DB는 [수백만 개를 안전하게 보관하는 대형 도서관 금고]!</span>
              </li>
            </ul>
          </div>
          <div style={{ background: '#0f172a', border: '1px solid #1e293b', padding: '24px', borderRadius: '16px' }}>
            <div style={{ fontSize: '0.88rem', color: '#a7f3d0', marginBottom: '10px', fontWeight: 700 }}>스마트폰 ➔ AI 전송 메세지 예시</div>
            <pre className="code-font" style={{ fontSize: '0.92rem', color: '#38bdf8', overflowX: 'auto', lineHeight: 1.6 }}>
{`{
  "보낸이": "사용자",
  "AI모델": "ChatGPT",
  "질문": "JSON이 뭐야?",
  "답변언어": "한국어"
}`}
            </pre>
          </div>
        </div>
      )
    },
    {
      id: 'markdown',
      tag: 'Topic 02',
      title: 'MD (Markdown): AI와 사람의 최고 대화 언어',
      subtitle: '사람도 읽기 쉽고 AI도 가장 잘 이해하는 친절한 문서 포맷!',
      icon: FileText,
      color: '#0284c7',
      content: (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px', alignItems: 'center' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
            <div className="badge badge-cyan" style={{ width: 'fit-content' }}>AI 대화 전용 언어</div>
            <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0f172a' }}>💡 왜 AI에게 마크다운이 최고일까?</h3>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '14px', listStyle: 'none' }}>
              <li style={{ display: 'flex', gap: '12px', fontSize: '1.05rem', color: '#334155', lineHeight: 1.6 }}>
                <CheckCircle2 color="#0284c7" size={24} style={{ flexShrink: 0 }} />
                <span><strong>명확한 규칙 전달:</strong> `# 제목`, `**강조**` 만으로 AI가 지시문(System Prompt)을 찰떡같이 인식</span>
              </li>
              <li style={{ display: 'flex', gap: '12px', fontSize: '1.05rem', color: '#334155', lineHeight: 1.6 }}>
                <CheckCircle2 color="#0284c7" size={24} style={{ flexShrink: 0 }} />
                <span><strong>거짓말(환각) 방지:</strong> 마크다운으로 역할을 정돈해서 알려주면 AI가 헛소리를 줄임!</span>
              </li>
              <li style={{ display: 'flex', gap: '12px', fontSize: '1.05rem', color: '#334155', lineHeight: 1.6 }}>
                <CheckCircle2 color="#0284c7" size={24} style={{ flexShrink: 0 }} />
                <span><strong>표/코드 구분:</strong> AI가 답변을 정리된 표나 코드 상자로 예쁘게 전달함</span>
              </li>
            </ul>
          </div>
          <div style={{ background: '#0f172a', border: '1px solid #1e293b', padding: '24px', borderRadius: '16px' }}>
            <div style={{ fontSize: '0.88rem', color: '#38bdf8', marginBottom: '10px', fontWeight: 700 }}>AI 지시문 (System Prompt) 예시</div>
            <pre className="code-font" style={{ fontSize: '0.9rem', color: '#e2e8f0', overflowX: 'auto', lineHeight: 1.6 }}>
{`# 🤖 AI 선생님 지시문

## 1. 역할
너는 **친절한 AI 선생님**이다.

## 2. 규칙
- 답변은 반드시 마크다운 표로 정리할 것!`}
            </pre>
          </div>
        </div>
      )
    },
    {
      id: 'frontend',
      tag: 'Topic 03',
      title: '프론트엔드 (Frontend): 카페 카운터 & 메뉴판',
      subtitle: '사용자가 직접 조작하는 웹 화면 & 타이핑 스트리밍 UI',
      icon: Monitor,
      color: '#db2777',
      content: (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px', alignItems: 'center' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
            <div className="badge badge-pink" style={{ width: 'fit-content' }}>사용자 접점</div>
            <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0f172a' }}>💡 손님이 접하는 화면의 역할</h3>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '14px', listStyle: 'none' }}>
              <li style={{ display: 'flex', gap: '12px', fontSize: '1.05rem', color: '#334155', lineHeight: 1.6 }}>
                <CheckCircle2 color="#db2777" size={24} style={{ flexShrink: 0 }} />
                <span><strong>카페 카운터 비유:</strong> 손님이 메뉴판을 보고 주문(버튼 클릭)하는 화면</span>
              </li>
              <li style={{ display: 'flex', gap: '12px', fontSize: '1.05rem', color: '#334155', lineHeight: 1.6 }}>
                <CheckCircle2 color="#db2777" size={24} style={{ flexShrink: 0 }} />
                <span><strong>타이핑 스트리밍 UI:</strong> AI의 대답이 답답하지 않게 한 글자씩 쳐지는 반응형 대화창</span>
              </li>
              <li style={{ display: 'flex', gap: '12px', fontSize: '1.05rem', color: '#334155', lineHeight: 1.6 }}>
                <CheckCircle2 color="#db2777" size={24} style={{ flexShrink: 0 }} />
                <span><strong>예쁜 서식 변환:</strong> AI가 보낸 마크다운 글씨를 사용자가 보기 쉽게 가공</span>
              </li>
            </ul>
          </div>
          <div style={{ background: '#fce7f3', border: '1px solid #fbcfe8', padding: '32px', borderRadius: '20px', textAlign: 'center' }}>
            <div style={{ fontSize: '2.8rem', marginBottom: '14px' }}>☕ 💬 ⚡</div>
            <h4 style={{ color: '#db2777', fontWeight: 800, fontSize: '1.3rem', marginBottom: '10px' }}>손님이 보는 대화창</h4>
            <p style={{ fontSize: '1rem', color: '#831843', lineHeight: 1.6 }}>
              사용자의 클릭과 질문을 받고, AI의 생생한 답변을 실시간으로 그려주는 화면!
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'backend',
      tag: 'Topic 04',
      title: '백엔드 (Backend): 카페 주방 & 비밀 레시피',
      subtitle: 'API 키 보안 유지 및 서버에서 질문 조립하기',
      icon: Server,
      color: '#059669',
      content: (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px', alignItems: 'center' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
            <div className="badge badge-green" style={{ width: 'fit-content' }}>보안 및 서버 로직</div>
            <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0f172a' }}>💡 보이지 않는 주방의 역할</h3>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '14px', listStyle: 'none' }}>
              <li style={{ display: 'flex', gap: '12px', fontSize: '1.05rem', color: '#334155', lineHeight: 1.6 }}>
                <CheckCircle2 color="#059669" size={24} style={{ flexShrink: 0 }} />
                <span><strong>비밀 열쇠(API Key) 보호:</strong> 해커가 비싼 AI 비밀키를 훔쳐가지 못하게 방어</span>
              </li>
              <li style={{ display: 'flex', gap: '12px', fontSize: '1.05rem', color: '#334155', lineHeight: 1.6 }}>
                <CheckCircle2 color="#059669" size={24} style={{ flexShrink: 0 }} />
                <span><strong>질문 요리하기:</strong> 유저 질문 + 과거 대화 + 회사 문서를 묶어서 AI에 전송</span>
              </li>
              <li style={{ display: 'flex', gap: '12px', fontSize: '1.05rem', color: '#059669', lineHeight: 1.6 }}>
                <CheckCircle2 color="#059669" size={24} style={{ flexShrink: 0 }} />
                <span><strong>대표 기술:</strong> Python (FastAPI - AI 서비스 개발 필수)</span>
              </li>
            </ul>
          </div>
          <div style={{ background: '#0f172a', border: '1px solid #1e293b', padding: '24px', borderRadius: '16px' }}>
            <div style={{ fontSize: '0.88rem', color: '#a7f3d0', marginBottom: '10px', fontWeight: 700 }}>Python 서버 백엔드 예시</div>
            <pre className="code-font" style={{ fontSize: '0.88rem', color: '#a7f3d0', overflowX: 'auto', lineHeight: 1.6 }}>
{`@app.post("/ask-ai")
def ask_ai(question):
    # 비밀 키는 서버 주방 안에서만 안전하게!
    answer = call_ai_model(
        question, 
        secret_key="SK-SECRET"
    )
    return {"answer": answer}`}
            </pre>
          </div>
        </div>
      )
    },
    {
      id: 'database',
      tag: 'Topic 05',
      title: '데이터베이스 (DB): 일반 SQL DB vs Vector DB',
      subtitle: '정확한 엑셀표 형태의 [일반 DB] + 의미로 찾는 [Vector DB] 비교!',
      icon: Database,
      color: '#d97706',
      content: (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px', alignItems: 'center' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
            <div className="badge badge-amber" style={{ width: 'fit-content' }}>DB 역할 비교</div>
            <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0f172a' }}>💡 일반 DB(SQL) vs Vector DB</h3>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '14px', listStyle: 'none' }}>
              <li style={{ display: 'flex', gap: '12px', fontSize: '1.05rem', color: '#334155', lineHeight: 1.6 }}>
                <CheckCircle2 color="#d97706" size={24} style={{ flexShrink: 0 }} />
                <span><strong>일반 SQL DB (메인 금고):</strong> 엑셀표처럼 행/열 정형 데이터 보관 (MySQL 등 개발 실무의 99% 담당)</span>
              </li>
              <li style={{ display: 'flex', gap: '12px', fontSize: '1.05rem', color: '#d97706', lineHeight: 1.6 }}>
                <CheckCircle2 color="#d97706" size={24} style={{ flexShrink: 0 }} />
                <span><strong>Vector DB (AI 특화 도서관):</strong> 문장의 "뜻(의미)"을 숫자로 변환해 비슷한 문서 탐색</span>
              </li>
              <li style={{ display: 'flex', gap: '12px', fontSize: '1.05rem', color: '#334155', lineHeight: 1.6 }}>
                <CheckCircle2 color="#d97706" size={24} style={{ flexShrink: 0 }} />
                <span><strong>검색 방식 차이:</strong> SQL은 `ID='hong'` 정확한 조건 검색, Vector DB는 `배고파` ➔ `음식점 안내 문서` 의미 검색</span>
              </li>
            </ul>
          </div>
          <div style={{ background: '#fef3c7', border: '1px solid #fde68a', padding: '28px', borderRadius: '20px' }}>
            <h4 style={{ color: '#b45309', fontWeight: 800, fontSize: '1.15rem', marginBottom: '10px' }}>⚖️ DB 핵심 차이 1초 요약</h4>
            <div style={{ fontSize: '0.98rem', color: '#78350f', lineHeight: 1.7 }}>
              • <strong>일반 SQL DB</strong>: "정확히 일치하는 회원/결제 데이터 조회!"<br/>
              • <strong>AI Vector DB</strong>: "키워드가 달라도 문장 뜻이 비슷한 문서 조회!"
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'summary',
      tag: 'Conclusion',
      title: '발표 요약 & 직접 실습해보기',
      subtitle: '준비된 JSON & Markdown 실습실에서 직접 테스트해보세요!',
      icon: Sparkles,
      color: '#db2777',
      content: (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', alignItems: 'center', textAlign: 'center' }}>
          <p style={{ fontSize: '1.25rem', color: '#1e293b', maxWidth: '800px', lineHeight: 1.8, fontWeight: 500 }}>
            축하합니다! 개발의 기본 개념부터 AI 시대 활용법까지 모두 파악하셨습니다! <br/>
            아래 버튼을 눌러 **JSON 규격 메모지**와 **마크다운 문서**를 직접 편집해보세요.
          </p>

          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
            <button
              className="btn-primary"
              onClick={() => {
                onClose();
                onSelectLab('json-lab');
              }}
              style={{ padding: '16px 32px', fontSize: '1.1rem' }}
            >
              <Code size={22} /> 🧪 JSON 실습실로 이동
            </button>
            <button
              className="btn-secondary"
              onClick={() => {
                onClose();
                onSelectLab('md-lab');
              }}
              style={{ padding: '16px 32px', fontSize: '1.1rem', border: '1px solid #0284c7', color: '#0284c7', background: '#e0f2fe' }}
            >
              <FileText size={22} /> ✍️ Markdown 실습실로 이동
            </button>
          </div>
        </div>
      )
    }
  ];

  // Keyboard Event Navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        setCurrentSlide((prev) => Math.min(prev + 1, slides.length - 1));
      } else if (e.key === 'ArrowLeft') {
        setCurrentSlide((prev) => Math.max(prev - 1, 0));
      } else if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [slides.length, onClose]);

  const slide = slides[currentSlide];
  const Icon = slide.icon;

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      background: 'rgba(248, 250, 252, 0.97)',
      backdropFilter: 'blur(20px)',
      zIndex: 100,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      padding: '44px',
      color: '#0f172a'
    }}>
      
      {/* Top Header Bar */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          <span className="badge badge-purple">{slide.tag}</span>
          <span style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', fontWeight: 600 }}>
            {currentSlide + 1} / {slides.length}
          </span>
        </div>

        <button
          onClick={onClose}
          className="btn-secondary"
          style={{ padding: '10px 20px', borderRadius: '50px' }}
        >
          <X size={20} /> 슬라이드 닫기 (ESC)
        </button>
      </div>

      {/* Main Slide Card Container */}
      <div style={{
        maxWidth: '1080px',
        margin: '0 auto',
        width: '100%',
        background: '#ffffff',
        border: `2px solid ${slide.color}30`,
        borderRadius: '28px',
        padding: '52px',
        boxShadow: `0 25px 60px -15px ${slide.color}20`,
        minHeight: '520px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        position: 'relative'
      }}>
        
        {/* Title Header */}
        <div style={{ marginBottom: '40px', textAlign: currentSlide === 0 || currentSlide === slides.length - 1 ? 'center' : 'left' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', color: slide.color, fontWeight: 800, marginBottom: '10px' }}>
            <Icon size={32} />
            <span style={{ fontSize: '1.15rem' }}>{slide.tag}</span>
          </div>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#0f172a', marginBottom: '10px', letterSpacing: '-0.02em' }}>
            {slide.title}
          </h2>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', fontWeight: 500 }}>
            {slide.subtitle}
          </p>
        </div>

        {/* Slide Content */}
        {slide.content}

      </div>

      {/* Bottom Navigation & Progress Controls */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', maxWidth: '1080px', margin: '0 auto', width: '100%' }}>
        
        <button
          className="btn-secondary"
          onClick={() => setCurrentSlide((prev) => Math.max(prev - 1, 0))}
          disabled={currentSlide === 0}
          style={{ opacity: currentSlide === 0 ? 0.4 : 1, padding: '12px 24px' }}
        >
          <ChevronLeft size={22} /> 이전 슬라이드
        </button>

        {/* Slide Dots Indicator */}
        <div style={{ display: 'flex', gap: '10px' }}>
          {slides.map((_, idx) => (
            <div
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              style={{
                width: idx === currentSlide ? '36px' : '12px',
                height: '12px',
                borderRadius: '6px',
                background: idx === currentSlide ? 'var(--gradient-primary)' : '#cbd5e1',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
            />
          ))}
        </div>

        <button
          className="btn-primary"
          onClick={() => setCurrentSlide((prev) => Math.min(prev + 1, slides.length - 1))}
          disabled={currentSlide === slides.length - 1}
          style={{ opacity: currentSlide === slides.length - 1 ? 0.4 : 1, padding: '12px 24px' }}
        >
          다음 슬라이드 <ChevronRight size={22} />
        </button>

      </div>

    </div>
  );
}
