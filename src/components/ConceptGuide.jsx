import React, { useState } from 'react';
import { Code, FileText, Monitor, Server, Database, ArrowRight, CheckCircle2, Lightbulb, Zap } from 'lucide-react';

export default function ConceptGuide({ onSelectLab }) {
  const [selectedConcept, setSelectedConcept] = useState('json');

  const concepts = [
    {
      id: 'json',
      title: 'JSON 파일 형태',
      badge: 'Data Format',
      badgeClass: 'badge-purple',
      icon: Code,
      summary: '사람과 컴퓨터가 모두 읽기 쉬운 경량 데이터 교환 포맷 (Key-Value 구조)',
      aiImportance: 'LLM API 요청/응답(Prompt payload), JSON Mode (구조화 데이터 추출), JSONL 데이터셋 저장용 표준',
      description: `JSON(JavaScript Object Notation)은 데이터를 키-값(Key-Value) 쌍의 형태로 표현하는 세계적인 표준 데이터 포맷입니다. AI 개발 및 LLM(대형 언어 모델) 활용에서 데이터를 주고받는 모든 과정의 기본이 됩니다.`,
      keyPoints: [
        '키(Key)는 반드시 큰따옴표("")로 감싸야 합니다.',
        '문자열, 숫자, 불리언(true/false), 배열([]), 객체({}), null 타입을 지원합니다.',
        '마지막 데이터 요소 뒤에 콤마(Trailing Comma)를 찍으면 문법 에러가 발생합니다.',
        'LLM API(OpenAI, Claude 등) 호출 시 메시지 목록과 파라미터를 보낼 때 JSON을 사용합니다.'
      ],
      codeExample: `{
  "model": "gpt-4o",
  "messages": [
    { "role": "system", "content": "너는 AI 전문 스터디 튜터야." },
    { "role": "user", "content": "JSON이 왜 중요해?" }
  ],
  "temperature": 0.7,
  "stream": true
}`,
      labTarget: 'json-lab',
      labLabel: 'JSON 직접 편집 & 검증 실습하기'
    },
    {
      id: 'markdown',
      title: 'MD (Markdown) 파일',
      badge: 'Document Format',
      badgeClass: 'badge-cyan',
      icon: FileText,
      summary: '쉬운 특수문자 기호로 문서 서식을 작성하는 경량 마크업 언어',
      aiImportance: 'AI System Prompt 규칙 작성, LLM 답변 표준 출력, RAG 지식 문서 원본 저장',
      description: `마크다운(Markdown, .md)은 일반 텍스트 문서에 간단한 기호(#, **, -, \` 등)를 추가하여 제목, 강조, 목록, 코드 블록 등의 visual 서식을 부여하는 포맷입니다. AI가 가장 잘 이해하고 생성하는 문서 형식입니다.`,
      keyPoints: [
        '# ~ ###### : 제목 크기 지정 (h1 ~ h6)',
        '**텍스트** : 굵은 글씨 (Bold 강조)',
        '`코드` 및 ```언어 : 코드 하이라이팅 및 AI 블록 구분',
        'AI에게 복잡한 Prompt 지시문 작성 시 가독성을 극대화하여 환각(Hallucination)을 줄임',
        'RAG(검색 증강 생성) 시스템에서 지식 베이스 문서를 파싱하고 쪼갤(Chunking) 때 가장 선호됨'
      ],
      codeExample: `# AI 스터디 지시사항 (System Prompt)

## 1. 페르소나 정의
너는 친절하고 명확한 **AI 전문 강사**이다.

## 2. 응답 규칙
- 답변 시 반드시 예시 코드를 포함할 것
- 어려운 용어는 쉬운 비유를 활용할 것

\`\`\`json
{ "status": "ready", "role": "tutor" }
\`\`\``,
      labTarget: 'md-lab',
      labLabel: '마크다운 라이브 에디터 실습하기'
    },
    {
      id: 'frontend',
      title: '프론트엔드 (Frontend)',
      badge: 'Client UI/UX',
      badgeClass: 'badge-pink',
      icon: Monitor,
      summary: '사용자가 직접 눈으로 보고 상호작용하는 웹/앱 인터페이스 (HTML, CSS, JS, React)',
      aiImportance: 'AI 챗봇 채팅창 UI, 실시간 글자 스트리밍(Streaming UI), 마크다운 코드 파싱 렌더링',
      description: `프론트엔드는 사용자가 AI 모델과 대화하거나 서비스를 이용할 수 있는 화면(UI)과 사용자 경험(UX)을 구축하는 영역입니다. AI 서비스에서는 단순히 이쁜 화면을 넘어서 **실시간 스트리밍 답변**과 **상호작용 렌더링**이 핵심입니다.`,
      keyPoints: [
        'HTML: 웹페이지의 뼈대와 구조를 정의',
        'CSS: 디자인, 색상, 애니메이션, 현대적인 다크모드/글래스모피즘 스타일 적용',
        'JavaScript / React: 데이터 처리, AI 서버와의 통신, 사용자 클릭 이벤트 반응',
        'AI UX 핵심: LLM 특유의 글자가 한자씩 나오는 Streaming 텍스트 처리 및 Markdown UI 파싱'
      ],
      codeExample: `// React 프론트엔드의 AI 답변 스트리밍 수신 예시
const [response, setResponse] = useState("");

async function startStream() {
  const res = await fetch("/api/chat", { method: "POST" });
  const reader = res.body.getReader();
  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    setResponse(prev => prev + new TextDecoder().decode(value));
  }
}`
    },
    {
      id: 'backend',
      title: '백엔드 (Backend)',
      badge: 'Server Architecture',
      badgeClass: 'badge-green',
      icon: Server,
      summary: '눈에 보이지 않는 서버 비즈니스 로직, API 키 보호, AI 프롬프트 오케스트레이션',
      aiImportance: 'OpenAI API 키 보안 보존, LangChain/LlamaIndex 파이프라인, 토큰 및 Rate Limit 관리',
      description: `백엔드는 사용자의 요청을 처리하고, 비밀스러운 **AI API Key**가 노출되지 않도록 안전하게 보호하며, LLM 모델에 전달할 프롬프트를 조립(Orchestration)하여 전달하는 서버 영역입니다.`,
      keyPoints: [
        '보안: 프론트엔드에 API 키가 노출되면 남용될 수 있으므로 백엔드 서버에서 호출해야 함',
        '프롬프트 조립: 사용자 질문 + DB 지식(RAG) + 과거 대화 내역을 하나로 묶어 LLM에 전송',
        '비동기 & 스트리밍: SSE (Server-Sent Events) 방식으로 프론트에 글자를 쪼개서 송신',
        '주요 언어/프레임워크: Python (FastAPI, Flask - AI 분야 압도적 1위), Node.js, Go'
      ],
      codeExample: `# Python FastAPI 백엔드의 AI API 호출 예시
from fastapi import FastAPI
from openai import OpenAI

app = FastAPI()
client = OpenAI(api_key="sk-SECRET_KEY_ON_SERVER")

@app.post("/api/ask")
async def ask_ai(prompt: str):
    completion = client.chat.completions.create(
        model="gpt-4o",
        messages=[{"role": "user", "content": prompt}]
    )
    return {"answer": completion.choices[0].message.content}`
    },
    {
      id: 'database',
      title: '데이터베이스 (DB & Vector DB)',
      badge: 'Storage & RAG',
      badgeClass: 'badge-amber',
      icon: Database,
      summary: '데이터의 효율적 저장/조회 시스템 + AI 시대를 이끄는 벡터 DB(Semantic Search)',
      aiImportance: 'RAG (검색 증강 생성) 필수 구성요소, 임베딩 벡터 저장, 의미 기반 유사도 검색',
      description: `데이터베이스는 사용자 데이터, 서비스 정보, 대화 기록을 저장합니다. 특히 AI 시대에는 단어의 의미를 고차원 숫자 배열(Vector)로 바꿔 저장하고 **의미적 유사도**를 찾는 **Vector Database**가 핵심으로 떠올랐습니다.`,
      keyPoints: [
        '관계형 DB (RDB: PostgreSQL, MySQL): 사용자 계정, 결제, 정형화된 서비스 데이터 저장',
        'NoSQL (MongoDB, Redis): 세션 대화 기록, 캐시 데이터 저장',
        'Vector DB (Chroma, Pinecone, Qdrant): 문장을 숫자의 배열(Embedding)로 저장 후 유사 문장 검색',
        'RAG (검색 증강 생성): AI가 환각(Hallucination) 없이 최신 내부 문서를 바탕으로 대답하게 만드는 기술'
      ],
      codeExample: `// Vector DB (ChromaDB 등) 지식 검색 메커니즘
1. 문서 텍스트: "회사의 연차 사용 규정은..."
   ⬇️ [Embedding AI Model]
2. 벡터 변환: [0.12, -0.45, 0.88, 0.31, ...] (1536 차원)
   ⬇️ [Vector DB 저장 및 Cosine Similarity 검색]
3. 사용자 질문 "휴가 어떻게 써?"와 가장 가까운 문서 벡터 추출 -> LLM에 주입!`
    }
  ];

  const activeData = concepts.find(c => c.id === selectedConcept) || concepts[0];

  return (
    <div className="animate-fade-in" style={{ paddingBottom: '40px' }}>
      
      {/* Introduction Banner */}
      <div className="glass-panel" style={{ padding: '28px', marginBottom: '28px', background: 'var(--gradient-card)' }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
              <span className="badge badge-purple">AI Study Key concepts</span>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>5가지 필수 개발 개념</span>
            </div>
            <h2 style={{ fontSize: '1.75rem', fontWeight: 800, marginBottom: '8px' }}>
              AI 서비스 개발을 위한 <span className="gradient-text">핵심 5대 용어</span>
            </h2>
            <p style={{ color: 'var(--text-secondary)', maxWidth: '750px', fontSize: '0.95rem' }}>
              AI 모델을 활용하고 서비스를 만드는데 필수적인 <strong>JSON, Markdown, 프론트엔드, 백엔드, DB(Vector DB)</strong>의 
              개념과 AI 생태계에서의 실질적인 역할을 학습하세요.
            </p>
          </div>
          <div style={{ display: 'flex', gap: '12px' }}>
            <button 
              className="btn-primary" 
              onClick={() => onSelectLab('json-lab')}
              style={{ fontSize: '0.85rem' }}
            >
              <Zap size={16} /> JSON 실습하기
            </button>
            <button 
              className="btn-secondary" 
              onClick={() => onSelectLab('md-lab')}
              style={{ fontSize: '0.85rem' }}
            >
              <FileText size={16} /> MD 실습하기
            </button>
          </div>
        </div>
      </div>

      {/* Grid Layout: Left Cards selector, Right Detail View */}
      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(300px, 1fr) minmax(400px, 1.8fr)', gap: '24px' }}>
        
        {/* Left Column: Concept Selector List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {concepts.map((concept) => {
            const Icon = concept.icon;
            const isSelected = selectedConcept === concept.id;
            return (
              <div
                key={concept.id}
                onClick={() => setSelectedConcept(concept.id)}
                className="glass-panel"
                style={{
                  padding: '18px 20px',
                  cursor: 'pointer',
                  transition: 'all 0.25 ease',
                  borderLeft: isSelected ? '4px solid var(--accent-purple)' : '1px solid var(--border-color)',
                  background: isSelected ? 'var(--bg-card-hover)' : 'rgba(17, 24, 39, 0.6)',
                  boxShadow: isSelected ? 'var(--shadow-glow)' : 'none',
                  transform: isSelected ? 'translateX(4px)' : 'none'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '8px',
                      background: isSelected ? 'var(--gradient-primary)' : 'rgba(255,255,255,0.05)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#fff'
                    }}>
                      <Icon size={18} />
                    </div>
                    <h3 style={{ fontSize: '1.05rem', fontWeight: 700 }}>{concept.title}</h3>
                  </div>
                  <span className={`badge ${concept.badgeClass}`}>{concept.badge}</span>
                </div>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.4 }}>
                  {concept.summary}
                </p>
              </div>
            );
          })}
        </div>

        {/* Right Column: Detailed View of Selected Concept */}
        <div className="glass-panel" style={{ padding: '30px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
          
          {/* Header of Detail */}
          <div style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
              <span className={`badge ${activeData.badgeClass}`}>{activeData.badge}</span>
              <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>AI 발표 주요 포인트</span>
            </div>
            <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#ffffff' }}>{activeData.title}</h2>
          </div>

          {/* AI Importance Highlight Box */}
          <div style={{ 
            background: 'var(--gradient-glow)', 
            border: '1px solid rgba(139, 92, 246, 0.3)', 
            borderRadius: '12px', 
            padding: '16px 20px',
            display: 'flex',
            gap: '12px',
            alignItems: 'flex-start'
          }}>
            <Lightbulb size={24} color="#c084fc" style={{ flexShrink: 0, marginTop: '2px' }} />
            <div>
              <h4 style={{ fontSize: '0.9rem', color: '#c084fc', fontWeight: 700, marginBottom: '4px' }}>
                🤖 AI 스터디에서의 중요성 & 활용
              </h4>
              <p style={{ fontSize: '0.92rem', color: '#e2e8f0', lineHeight: 1.5 }}>
                {activeData.aiImportance}
              </p>
            </div>
          </div>

          {/* Description */}
          <div>
            <h4 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '8px', color: 'var(--text-primary)' }}>
              📌 개념 정의
            </h4>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
              {activeData.description}
            </p>
          </div>

          {/* Key Feature Bullet Points */}
          <div>
            <h4 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '10px', color: 'var(--text-primary)' }}>
              ⚙️ 핵심 특징 및 규칙
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {activeData.keyPoints.map((pt, idx) => (
                <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.9rem', color: '#cbd5e1' }}>
                  <CheckCircle2 size={16} color="#10b981" style={{ flexShrink: 0, marginTop: '3px' }} />
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Real Code Example Box */}
          <div>
            <h4 style={{ fontSize: '0.95rem', fontWeight: 700, marginBottom: '8px', color: 'var(--text-primary)' }}>
              💻 실체 예시
            </h4>
            <pre style={{
              background: 'var(--bg-input)',
              border: '1px solid var(--border-color)',
              borderRadius: '10px',
              padding: '16px',
              color: '#38bdf8',
              fontSize: '0.85rem',
              overflowX: 'auto',
              lineHeight: 1.5
            }}>
              <code>{activeData.codeExample}</code>
            </pre>
          </div>

          {/* Quick Lab Button if available */}
          {activeData.labTarget && (
            <div style={{ marginTop: 'auto', paddingTop: '16px', borderTop: '1px solid var(--border-color)' }}>
              <button
                className="btn-primary"
                onClick={() => onSelectLab(activeData.labTarget)}
                style={{ width: '100%', justifyContent: 'center' }}
              >
                <span>{activeData.labLabel}</span>
                <ArrowRight size={18} />
              </button>
            </div>
          )}

        </div>

      </div>

    </div>
  );
}
