import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, X, Play, Code, FileText, Monitor, Server, Database, Sparkles, CheckCircle2 } from 'lucide-react';

export default function SlidePresentation({ onClose, onSelectLab }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 'intro',
      tag: '발표 개요',
      title: 'AI 생태계를 이루는 핵심 용어 & 데이터 포맷 입문',
      subtitle: 'JSON, Markdown, Frontend, Backend, DB에 대한 명쾌한 정리',
      icon: Sparkles,
      color: '#c084fc',
      content: (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', alignItems: 'center', textAlign: 'center' }}>
          <div style={{ background: 'var(--gradient-glow)', padding: '24px', borderRadius: '16px', border: '1px solid rgba(139, 92, 246, 0.3)', maxWidth: '750px' }}>
            <p style={{ fontSize: '1.15rem', color: '#e2e8f0', lineHeight: 1.7 }}>
              오늘 스터디에서는 **AI 모델(LLM)을 실제로 서비스화하거나 프롬프트를 다룰 때 반드시 알아야 하는 5가지 핵심 주제**를 함께 살펴보고 직접 실습해봅니다!
            </p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '14px', width: '100%', maxWidth: '850px', marginTop: '10px' }}>
            {[
              { label: 'JSON 파일', desc: '데이터 전송 포맷', color: '#8b5cf6' },
              { label: 'Markdown (.md)', desc: 'AI 지시문 작성 포맷', color: '#06b6d4' },
              { label: '프론트엔드', desc: '스트리밍 Chat UI', color: '#ec4899' },
              { label: '백엔드', desc: 'API 키 보안 & 서버', color: '#10b981' },
              { label: 'Vector DB', desc: 'RAG & 임베딩 검색', color: '#f59e0b' },
            ].map((item, idx) => (
              <div key={idx} style={{ background: 'rgba(255,255,255,0.04)', border: `1px solid ${item.color}40`, padding: '16px 12px', borderRadius: '12px', textAlign: 'center' }}>
                <div style={{ color: item.color, fontWeight: 800, fontSize: '1.05rem', marginBottom: '4px' }}>{item.label}</div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)' }}>{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      id: 'json',
      tag: 'Topic 01',
      title: 'JSON (JavaScript Object Notation)',
      subtitle: '사람과 AI, 서버가 대화하는 표준 데이터 교환 언어',
      icon: Code,
      color: '#8b5cf6',
      content: (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', alignItems: 'center' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <div className="badge badge-purple" style={{ width: 'fit-content' }}>Key Concept</div>
            <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#ffffff' }}>💡 핵심 정리</h3>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px', listStyle: 'none' }}>
              <li style={{ display: 'flex', gap: '8px', fontSize: '1rem', color: '#cbd5e1' }}>
                <CheckCircle2 color="#8b5cf6" size={20} style={{ flexShrink: 0 }} />
                <span><strong>Key-Value (키-값)</strong> 구조의 경량 데이터 포맷</span>
              </li>
              <li style={{ display: 'flex', gap: '8px', fontSize: '1rem', color: '#cbd5e1' }}>
                <CheckCircle2 color="#8b5cf6" size={20} style={{ flexShrink: 0 }} />
                <span><strong>AI에서의 용도:</strong> LLM API 요청 payload, Structured Output (JSON Mode)</span>
              </li>
              <li style={{ display: 'flex', gap: '8px', fontSize: '1rem', color: '#cbd5e1' }}>
                <CheckCircle2 color="#8b5cf6" size={20} style={{ flexShrink: 0 }} />
                <span><strong>주의 규칙:</strong> Key는 반드시 큰따옴표(<code>"key"</code>), Trailing Comma 불가</span>
              </li>
            </ul>
          </div>
          <div style={{ background: '#090d16', border: '1px solid var(--border-color)', padding: '20px', borderRadius: '12px' }}>
            <div style={{ fontSize: '0.8rem', color: '#8b5cf6', marginBottom: '8px', fontWeight: 600 }}>OpenAI API JSON Payload 예시</div>
            <pre className="code-font" style={{ fontSize: '0.88rem', color: '#38bdf8', overflowX: 'auto', lineHeight: 1.5 }}>
{`{
  "model": "gpt-4o",
  "messages": [
    { "role": "system", "content": "AI 튜터" },
    { "role": "user", "content": "JSON이란?" }
  ],
  "temperature": 0.7
}`}
            </pre>
          </div>
        </div>
      )
    },
    {
      id: 'markdown',
      tag: 'Topic 02',
      title: 'MD (Markdown) 파일',
      badge: 'Document Format',
      subtitle: '특수문자로 서식을 주는 경량 마크업 언어 (.md)',
      icon: FileText,
      color: '#06b6d4',
      content: (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', alignItems: 'center' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <div className="badge badge-cyan" style={{ width: 'fit-content' }}>AI Writing Standard</div>
            <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#ffffff' }}>💡 AI에서의 압도적 가치</h3>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px', listStyle: 'none' }}>
              <li style={{ display: 'flex', gap: '8px', fontSize: '1rem', color: '#cbd5e1' }}>
                <CheckCircle2 color="#06b6d4" size={20} style={{ flexShrink: 0 }} />
                <span><strong>System Prompt 작성:</strong> AI에게 명확한 규칙과 역할을 부여할 때 최적</span>
              </li>
              <li style={{ display: 'flex', gap: '8px', fontSize: '1rem', color: '#cbd5e1' }}>
                <CheckCircle2 color="#06b6d4" size={20} style={{ flexShrink: 0 }} />
                <span><strong>LLM 답변의 표준 출력:</strong> 제목, 코드블록, 표 형식 렌더링</span>
              </li>
              <li style={{ display: 'flex', gap: '8px', fontSize: '1rem', color: '#cbd5e1' }}>
                <CheckCircle2 color="#06b6d4" size={20} style={{ flexShrink: 0 }} />
                <span><strong>RAG 문서 저장:</strong> 지식베이스 문서를 쪼갤 때 가장 널리 쓰임</span>
              </li>
            </ul>
          </div>
          <div style={{ background: '#090d16', border: '1px solid var(--border-color)', padding: '20px', borderRadius: '12px' }}>
            <div style={{ fontSize: '0.8rem', color: '#06b6d4', marginBottom: '8px', fontWeight: 600 }}>Markdown 문법 예시</div>
            <pre className="code-font" style={{ fontSize: '0.85rem', color: '#e2e8f0', overflowX: 'auto', lineHeight: 1.5 }}>
{`# 🤖 AI 스터디 지시문

## 1. 역할 정의
너는 **친절한 AI 강사**이다.

## 2. 출력 예시
\`\`\`js
console.log("Hello AI Study!");
\`\`\``}
            </pre>
          </div>
        </div>
      )
    },
    {
      id: 'frontend',
      tag: 'Topic 03',
      title: '프론트엔드 (Frontend)',
      subtitle: '사용자가 직접 조작하는 웹 화면 & AI 스트리밍 UI',
      icon: Monitor,
      color: '#ec4899',
      content: (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', alignItems: 'center' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <div className="badge badge-pink" style={{ width: 'fit-content' }}>User Experience</div>
            <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#ffffff' }}>💡 AI UX의 핵심 요소</h3>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px', listStyle: 'none' }}>
              <li style={{ display: 'flex', gap: '8px', fontSize: '1rem', color: '#cbd5e1' }}>
                <CheckCircle2 color="#ec4899" size={20} style={{ flexShrink: 0 }} />
                <span><strong>HTML / CSS / JS / React:</strong> 웹페이지 뼈대, 디자인, 인터랙션 구현</span>
              </li>
              <li style={{ display: 'flex', gap: '8px', fontSize: '1rem', color: '#cbd5e1' }}>
                <CheckCircle2 color="#ec4899" size={20} style={{ flexShrink: 0 }} />
                <span><strong>실시간 스트리밍 (Streaming):</strong> ChatGPT처럼 글자가 한자씩 출력되는 경험</span>
              </li>
              <li style={{ display: 'flex', gap: '8px', fontSize: '1rem', color: '#cbd5e1' }}>
                <CheckCircle2 color="#ec4899" size={20} style={{ flexShrink: 0 }} />
                <span><strong>Markdown 파싱:</strong> LLM이 보내온 마크다운을 예쁜 HTML로 변환</span>
              </li>
            </ul>
          </div>
          <div style={{ background: 'rgba(236, 72, 153, 0.08)', border: '1px solid rgba(236, 72, 153, 0.3)', padding: '24px', borderRadius: '16px', textAlign: 'center' }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '12px' }}>💻 💬 ⚡</div>
            <h4 style={{ color: '#ec4899', fontWeight: 800, fontSize: '1.2rem', marginBottom: '8px' }}>Streaming Chat UI</h4>
            <p style={{ fontSize: '0.9rem', color: '#cbd5e1' }}>
              사용자가 질문하면 서버와의 SSE(Server-Sent Events) 연결을 통해 답을 실시간 수신!
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'backend',
      tag: 'Topic 04',
      title: '백엔드 (Backend)',
      subtitle: 'API 키 보안, 서버 로직 & 프롬프트 조립(Orchestration)',
      icon: Server,
      color: '#10b981',
      content: (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', alignItems: 'center' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <div className="badge badge-green" style={{ width: 'fit-content' }}>Security & Logic</div>
            <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#ffffff' }}>💡 백엔드가 필요한 이유</h3>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px', listStyle: 'none' }}>
              <li style={{ display: 'flex', gap: '8px', fontSize: '1rem', color: '#cbd5e1' }}>
                <CheckCircle2 color="#10b981" size={20} style={{ flexShrink: 0 }} />
                <span><strong>API Key 보안:</strong> OpenAI 비밀키가 프론트엔드에 노출되지 않게 방어</span>
              </li>
              <li style={{ display: 'flex', gap: '8px', fontSize: '1rem', color: '#cbd5e1' }}>
                <CheckCircle2 color="#10b981" size={20} style={{ flexShrink: 0 }} />
                <span><strong>Prompt Orchestration:</strong> DB 지식 + 유저 질문을 합쳐 LLM에 보냄</span>
              </li>
              <li style={{ display: 'flex', gap: '8px', fontSize: '1rem', color: '#cbd5e1' }}>
                <CheckCircle2 color="#10b981" size={20} style={{ flexShrink: 0 }} />
                <span><strong>주요 프레임워크:</strong> Python (FastAPI - AI 생태계 대표), Node.js</span>
              </li>
            </ul>
          </div>
          <div style={{ background: '#090d16', border: '1px solid var(--border-color)', padding: '20px', borderRadius: '12px' }}>
            <div style={{ fontSize: '0.8rem', color: '#10b981', marginBottom: '8px', fontWeight: 600 }}>Python FastAPI AI 호출 예시</div>
            <pre className="code-font" style={{ fontSize: '0.82rem', color: '#a7f3d0', overflowX: 'auto', lineHeight: 1.5 }}>
{`@app.post("/api/chat")
async def chat(user_msg: str):
    # 백엔드 서버에서만 안전하게 API Key 사용
    response = openai.chat.completions.create(
        model="gpt-4o",
        messages=[{"role": "user", "content": user_msg}]
    )
    return {"answer": response.choices[0].message.content}`}
            </pre>
          </div>
        </div>
      )
    },
    {
      id: 'database',
      tag: 'Topic 05',
      title: '데이터베이스 (DB & Vector DB)',
      subtitle: '전통적 데이터 저장소 vs AI 검색의 핵심 Vector DB',
      icon: Database,
      color: '#f59e0b',
      content: (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', alignItems: 'center' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <div className="badge badge-amber" style={{ width: 'fit-content' }}>RAG & Vector Search</div>
            <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#ffffff' }}>💡 Vector DB와 RAG(검색증강생성)</h3>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px', listStyle: 'none' }}>
              <li style={{ display: 'flex', gap: '8px', fontSize: '1rem', color: '#cbd5e1' }}>
                <CheckCircle2 color="#f59e0b" size={20} style={{ flexShrink: 0 }} />
                <span><strong>RDB / NoSQL:</strong> 일반적인 회원 정보, 결제, 대화 세션 기록 저장</span>
              </li>
              <li style={{ display: 'flex', gap: '8px', fontSize: '1rem', color: '#cbd5e1' }}>
                <CheckCircle2 color="#f59e0b" size={20} style={{ flexShrink: 0 }} />
                <span><strong>Vector DB (Chroma, Pinecone):</strong> 텍스트를 숫자 벡터(Embedding)로 저장</span>
              </li>
              <li style={{ display: 'flex', gap: '8px', fontSize: '1rem', color: '#cbd5e1' }}>
                <CheckCircle2 color="#f59e0b" size={20} style={{ flexShrink: 0 }} />
                <span><strong>Semantic Search:</strong> 키워드가 달라도 <strong>의미가 유사한 문서</strong>를 AI가 즉시 검색!</span>
              </li>
            </ul>
          </div>
          <div style={{ background: 'rgba(245, 158, 11, 0.08)', border: '1px solid rgba(245, 158, 11, 0.3)', padding: '24px', borderRadius: '16px' }}>
            <h4 style={{ color: '#fbbf24', fontWeight: 800, fontSize: '1.1rem', marginBottom: '10px' }}>🔍 RAG 동작 순서 3단계</h4>
            <ol style={{ fontSize: '0.9rem', color: '#e2e8f0', lineHeight: 1.8, paddingLeft: '20px' }}>
              <li>문서 텍스트 ➔ <strong>임베딩 벡터 변환</strong></li>
              <li>유저 질문과 가장 유사한 문서 <strong>Vector DB에서 검색</strong></li>
              <li>검색된 문서를 <strong>LLM 프롬프트에 주입하여 정확한 답변 생성!</strong></li>
            </ol>
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
      color: '#ec4899',
      content: (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '28px', alignItems: 'center', textAlign: 'center' }}>
          <p style={{ fontSize: '1.2rem', color: '#f1f5f9', maxWidth: '750px', lineHeight: 1.7 }}>
            이제 AI 생태계의 5대 필수 영역을 모두 파악하셨습니다! <br/>
            아래 버튼을 눌러 **JSON 유효성 검사**와 **마크다운 에디터**를 직접 작성해보세요.
          </p>

          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <button
              className="btn-primary"
              onClick={() => {
                onClose();
                onSelectLab('json-lab');
              }}
              style={{ padding: '14px 28px', fontSize: '1.05rem' }}
            >
              <Code size={20} /> 🧪 JSON 실습실로 이동
            </button>
            <button
              className="btn-secondary"
              onClick={() => {
                onClose();
                onSelectLab('md-lab');
              }}
              style={{ padding: '14px 28px', fontSize: '1.05rem', border: '1px solid var(--accent-cyan)', color: '#22d3ee' }}
            >
              <FileText size={20} /> ✍️ Markdown 실습실로 이동
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
      background: 'rgba(9, 13, 22, 0.96)',
      backdropFilter: 'blur(20px)',
      zIndex: 100,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      padding: '40px',
      color: '#ffffff'
    }}>
      
      {/* Top Header Bar */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <span className="badge badge-purple">{slide.tag}</span>
          <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
            {currentSlide + 1} / {slides.length}
          </span>
        </div>

        <button
          onClick={onClose}
          className="btn-secondary"
          style={{ padding: '8px 14px', borderRadius: '50px' }}
        >
          <X size={18} /> 슬라이드 닫기 (ESC)
        </button>
      </div>

      {/* Main Slide Card Container */}
      <div style={{
        maxWidth: '1000px',
        margin: '0 auto',
        width: '100%',
        background: 'rgba(17, 24, 39, 0.85)',
        border: `1px solid ${slide.color}50`,
        borderRadius: '24px',
        padding: '44px',
        boxShadow: `0 20px 50px -10px ${slide.color}25`,
        minHeight: '480px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        position: 'relative'
      }}>
        
        {/* Title Header */}
        <div style={{ marginBottom: '32px', textAlign: currentSlide === 0 || currentSlide === slides.length - 1 ? 'center' : 'left' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', color: slide.color, fontWeight: 700, marginBottom: '8px' }}>
            <Icon size={28} />
            <span style={{ fontSize: '1.05rem' }}>{slide.tag}</span>
          </div>
          <h2 style={{ fontSize: '2.4rem', fontWeight: 800, marginBottom: '8px', letterSpacing: '-0.02em' }}>
            {slide.title}
          </h2>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)' }}>
            {slide.subtitle}
          </p>
        </div>

        {/* Slide Content */}
        {slide.content}

      </div>

      {/* Bottom Navigation & Progress Controls */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', maxWidth: '1000px', margin: '0 auto', width: '100%' }}>
        
        <button
          className="btn-secondary"
          onClick={() => setCurrentSlide((prev) => Math.max(prev - 1, 0))}
          disabled={currentSlide === 0}
          style={{ opacity: currentSlide === 0 ? 0.4 : 1, padding: '10px 20px' }}
        >
          <ChevronLeft size={20} /> 이전 슬라이드
        </button>

        {/* Slide Dots Indicator */}
        <div style={{ display: 'flex', gap: '8px' }}>
          {slides.map((_, idx) => (
            <div
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              style={{
                width: idx === currentSlide ? '32px' : '10px',
                height: '10px',
                borderRadius: '5px',
                background: idx === currentSlide ? 'var(--gradient-primary)' : 'rgba(255,255,255,0.2)',
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
          style={{ opacity: currentSlide === slides.length - 1 ? 0.4 : 1, padding: '10px 20px' }}
        >
          다음 슬라이드 <ChevronRight size={20} />
        </button>

      </div>

    </div>
  );
}
