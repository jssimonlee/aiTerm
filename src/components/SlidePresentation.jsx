import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, X, Code, FileText, Monitor, Server, Database, Sparkles, CheckCircle2 } from 'lucide-react';

export default function SlidePresentation({ onClose, onSelectLab }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 'intro',
      tag: '발표 개요',
      title: 'AI 생태계를 이루는 핵심 용어 & 데이터 포맷 입문',
      subtitle: 'JSON, Markdown, Frontend, Backend, DB에 대한 명쾌한 정리',
      icon: Sparkles,
      color: '#7c3aed',
      content: (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', alignItems: 'center', textAlign: 'center' }}>
          <div style={{ background: '#f3e8ff', padding: '32px', borderRadius: '20px', border: '1px solid #e9d5ff', maxWidth: '820px' }}>
            <p style={{ fontSize: '1.2rem', color: '#4c1d95', lineHeight: 1.8, fontWeight: 500 }}>
              오늘 스터디에서는 **AI 모델(LLM)을 실제로 서비스화하거나 프롬프트를 다룰 때 반드시 알아야 하는 5가지 핵심 주제**를 함께 살펴보고 직접 실습해봅니다!
            </p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '18px', width: '100%', maxWidth: '900px', marginTop: '8px' }}>
            {[
              { label: 'JSON 파일', desc: '데이터 전송 포맷', color: '#7c3aed', bg: '#f3e8ff' },
              { label: 'Markdown (.md)', desc: 'AI 지시문 작성 포맷', color: '#0284c7', bg: '#e0f2fe' },
              { label: '프론트엔드', desc: '스트리밍 Chat UI', color: '#db2777', bg: '#fce7f3' },
              { label: '백엔드', desc: 'API 키 보안 & 서버', color: '#059669', bg: '#d1fae5' },
              { label: 'Vector DB', desc: 'RAG & 임베딩 검색', color: '#d97706', bg: '#fef3c7' },
            ].map((item, idx) => (
              <div key={idx} style={{ background: item.bg, border: `1px solid ${item.color}30`, padding: '20px 14px', borderRadius: '16px', textAlign: 'center' }}>
                <div style={{ color: item.color, fontWeight: 800, fontSize: '1.1rem', marginBottom: '6px' }}>{item.label}</div>
                <div style={{ fontSize: '0.85rem', color: '#475569', fontWeight: 500 }}>{item.desc}</div>
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
      color: '#7c3aed',
      content: (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px', alignItems: 'center' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
            <div className="badge badge-purple" style={{ width: 'fit-content' }}>Key Concept</div>
            <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0f172a' }}>💡 핵심 정리</h3>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '14px', listStyle: 'none' }}>
              <li style={{ display: 'flex', gap: '12px', fontSize: '1.05rem', color: '#334155', lineHeight: 1.6 }}>
                <CheckCircle2 color="#7c3aed" size={24} style={{ flexShrink: 0 }} />
                <span><strong>Key-Value (키-값)</strong> 구조의 경량 데이터 포맷</span>
              </li>
              <li style={{ display: 'flex', gap: '12px', fontSize: '1.05rem', color: '#334155', lineHeight: 1.6 }}>
                <CheckCircle2 color="#7c3aed" size={24} style={{ flexShrink: 0 }} />
                <span><strong>AI에서의 용도:</strong> LLM API 요청 payload, Structured Output (JSON Mode)</span>
              </li>
              <li style={{ display: 'flex', gap: '12px', fontSize: '1.05rem', color: '#334155', lineHeight: 1.6 }}>
                <CheckCircle2 color="#7c3aed" size={24} style={{ flexShrink: 0 }} />
                <span><strong>주의 규칙:</strong> Key는 반드시 큰따옴표(<code>"key"</code>), Trailing Comma 불가</span>
              </li>
            </ul>
          </div>
          <div style={{ background: '#0f172a', border: '1px solid #1e293b', padding: '24px', borderRadius: '16px' }}>
            <div style={{ fontSize: '0.85rem', color: '#a7f3d0', marginBottom: '10px', fontWeight: 700 }}>OpenAI API JSON Payload 예시</div>
            <pre className="code-font" style={{ fontSize: '0.92rem', color: '#38bdf8', overflowX: 'auto', lineHeight: 1.6 }}>
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
      subtitle: '특수문자로 서식을 주는 경량 마크업 언어 (.md)',
      icon: FileText,
      color: '#0284c7',
      content: (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px', alignItems: 'center' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
            <div className="badge badge-cyan" style={{ width: 'fit-content' }}>AI Writing Standard</div>
            <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0f172a' }}>💡 AI에서의 압도적 가치</h3>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '14px', listStyle: 'none' }}>
              <li style={{ display: 'flex', gap: '12px', fontSize: '1.05rem', color: '#334155', lineHeight: 1.6 }}>
                <CheckCircle2 color="#0284c7" size={24} style={{ flexShrink: 0 }} />
                <span><strong>System Prompt 작성:</strong> AI에게 명확한 규칙과 역할을 부여할 때 최적</span>
              </li>
              <li style={{ display: 'flex', gap: '12px', fontSize: '1.05rem', color: '#334155', lineHeight: 1.6 }}>
                <CheckCircle2 color="#0284c7" size={24} style={{ flexShrink: 0 }} />
                <span><strong>LLM 답변의 표준 출력:</strong> 제목, 코드블록, 표 형식 렌더링</span>
              </li>
              <li style={{ display: 'flex', gap: '12px', fontSize: '1.05rem', color: '#334155', lineHeight: 1.6 }}>
                <CheckCircle2 color="#0284c7" size={24} style={{ flexShrink: 0 }} />
                <span><strong>RAG 문서 저장:</strong> 지식베이스 문서를 쪼갤 때 가장 널리 쓰임</span>
              </li>
            </ul>
          </div>
          <div style={{ background: '#0f172a', border: '1px solid #1e293b', padding: '24px', borderRadius: '16px' }}>
            <div style={{ fontSize: '0.85rem', color: '#38bdf8', marginBottom: '10px', fontWeight: 700 }}>Markdown 문법 예시</div>
            <pre className="code-font" style={{ fontSize: '0.9rem', color: '#e2e8f0', overflowX: 'auto', lineHeight: 1.6 }}>
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
      color: '#db2777',
      content: (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px', alignItems: 'center' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
            <div className="badge badge-pink" style={{ width: 'fit-content' }}>User Experience</div>
            <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0f172a' }}>💡 AI UX의 핵심 요소</h3>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '14px', listStyle: 'none' }}>
              <li style={{ display: 'flex', gap: '12px', fontSize: '1.05rem', color: '#334155', lineHeight: 1.6 }}>
                <CheckCircle2 color="#db2777" size={24} style={{ flexShrink: 0 }} />
                <span><strong>HTML / CSS / JS / React:</strong> 웹페이지 뼈대, 디자인, 인터랙션 구현</span>
              </li>
              <li style={{ display: 'flex', gap: '12px', fontSize: '1.05rem', color: '#334155', lineHeight: 1.6 }}>
                <CheckCircle2 color="#db2777" size={24} style={{ flexShrink: 0 }} />
                <span><strong>실시간 스트리밍 (Streaming):</strong> ChatGPT처럼 글자가 한자씩 나타나는 경험</span>
              </li>
              <li style={{ display: 'flex', gap: '12px', fontSize: '1.05rem', color: '#334155', lineHeight: 1.6 }}>
                <CheckCircle2 color="#db2777" size={24} style={{ flexShrink: 0 }} />
                <span><strong>Markdown 파싱:</strong> LLM이 보내온 마크다운을 예쁜 HTML로 변환</span>
              </li>
            </ul>
          </div>
          <div style={{ background: '#fce7f3', border: '1px solid #fbcfe8', padding: '32px', borderRadius: '20px', textAlign: 'center' }}>
            <div style={{ fontSize: '2.8rem', marginBottom: '14px' }}>💻 💬 ⚡</div>
            <h4 style={{ color: '#db2777', fontWeight: 800, fontSize: '1.3rem', marginBottom: '10px' }}>Streaming Chat UI</h4>
            <p style={{ fontSize: '1rem', color: '#831843', lineHeight: 1.6 }}>
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
      color: '#059669',
      content: (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px', alignItems: 'center' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
            <div className="badge badge-green" style={{ width: 'fit-content' }}>Security & Logic</div>
            <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0f172a' }}>💡 백엔드가 필요한 이유</h3>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '14px', listStyle: 'none' }}>
              <li style={{ display: 'flex', gap: '12px', fontSize: '1.05rem', color: '#334155', lineHeight: 1.6 }}>
                <CheckCircle2 color="#059669" size={24} style={{ flexShrink: 0 }} />
                <span><strong>API Key 보안:</strong> OpenAI 비밀키가 프론트엔드에 노출되지 않게 방어</span>
              </li>
              <li style={{ display: 'flex', gap: '12px', fontSize: '1.05rem', color: '#334155', lineHeight: 1.6 }}>
                <CheckCircle2 color="#059669" size={24} style={{ flexShrink: 0 }} />
                <span><strong>Prompt Orchestration:</strong> DB 지식 + 유저 질문을 합쳐 LLM에 보냄</span>
              </li>
              <li style={{ display: 'flex', gap: '12px', fontSize: '1.05rem', color: '#334155', lineHeight: 1.6 }}>
                <CheckCircle2 color="#059669" size={24} style={{ flexShrink: 0 }} />
                <span><strong>주요 프레임워크:</strong> Python (FastAPI - AI 생태계 대표), Node.js</span>
              </li>
            </ul>
          </div>
          <div style={{ background: '#0f172a', border: '1px solid #1e293b', padding: '24px', borderRadius: '16px' }}>
            <div style={{ fontSize: '0.85rem', color: '#a7f3d0', marginBottom: '10px', fontWeight: 700 }}>Python FastAPI AI 호출 예시</div>
            <pre className="code-font" style={{ fontSize: '0.88rem', color: '#a7f3d0', overflowX: 'auto', lineHeight: 1.6 }}>
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
      color: '#d97706',
      content: (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px', alignItems: 'center' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
            <div className="badge badge-amber" style={{ width: 'fit-content' }}>RAG & Vector Search</div>
            <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0f172a' }}>💡 Vector DB와 RAG(검색증강생성)</h3>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '14px', listStyle: 'none' }}>
              <li style={{ display: 'flex', gap: '12px', fontSize: '1.05rem', color: '#334155', lineHeight: 1.6 }}>
                <CheckCircle2 color="#d97706" size={24} style={{ flexShrink: 0 }} />
                <span><strong>RDB / NoSQL:</strong> 일반적인 회원 정보, 결제, 대화 세션 기록 저장</span>
              </li>
              <li style={{ display: 'flex', gap: '12px', fontSize: '1.05rem', color: '#334155', lineHeight: 1.6 }}>
                <CheckCircle2 color="#d97706" size={24} style={{ flexShrink: 0 }} />
                <span><strong>Vector DB (Chroma, Pinecone):</strong> 텍스트를 숫자 벡터(Embedding)로 저장</span>
              </li>
              <li style={{ display: 'flex', gap: '12px', fontSize: '1.05rem', color: '#334155', lineHeight: 1.6 }}>
                <CheckCircle2 color="#d97706" size={24} style={{ flexShrink: 0 }} />
                <span><strong>Semantic Search:</strong> 키워드가 달라도 <strong>의미가 유사한 문서</strong>를 AI가 즉시 검색!</span>
              </li>
            </ul>
          </div>
          <div style={{ background: '#fef3c7', border: '1px solid #fde68a', padding: '32px', borderRadius: '20px' }}>
            <h4 style={{ color: '#b45309', fontWeight: 800, fontSize: '1.2rem', marginBottom: '14px' }}>🔍 RAG 동작 순서 3단계</h4>
            <ol style={{ fontSize: '1rem', color: '#78350f', lineHeight: 1.8, paddingLeft: '24px' }}>
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
      color: '#db2777',
      content: (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', alignItems: 'center', textAlign: 'center' }}>
          <p style={{ fontSize: '1.25rem', color: '#1e293b', maxWidth: '800px', lineHeight: 1.8, fontWeight: 500 }}>
            이제 AI 생태계의 5대 필수 영역을 모두 파악하셨습니다! <br/>
            아래 버튼을 눌러 **JSON 유효성 검사**와 **마크다운 에디터**를 직접 작성해보세요.
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
          <h2 style={{ fontSize: '2.6rem', fontWeight: 800, color: '#0f172a', marginBottom: '10px', letterSpacing: '-0.02em' }}>
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
