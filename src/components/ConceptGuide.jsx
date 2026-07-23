import React, { useState } from 'react';
import { Code, FileText, Monitor, Server, Database, ArrowRight, CheckCircle2, Lightbulb, Zap, HelpCircle, HardDrive } from 'lucide-react';

export default function ConceptGuide({ onSelectLab }) {
  const [selectedConcept, setSelectedConcept] = useState('database');

  const concepts = [
    {
      id: 'json',
      title: 'JSON 파일 형태',
      badge: '앱 간의 대화 서류',
      badgeClass: 'badge-purple',
      icon: Code,
      summary: '서로 다른 앱(프로그램)끼리 데이터를 주고받을 때 사용하는 표준 규격의 데이터 메모지!',
      aiImportance: '스마트폰 앱이 AI에게 "이 질문 답해줘!" 하고 데이터를 전달하거나, AI가 정리된 결과를 돌려줄 때 쓰는 택배 상자',
      description: `JSON(제이슨)은 서로 다른 컴퓨터 프로그램이나 앱(예: 카카오톡과 서버, 웹사이트와 AI)이 대화할 때 사용하는 '세계 표준 규격 메모지'입니다.
      
"이름: 홍길동, 나이: 20" 처럼 [이름표: 내용] 형태로 깔끔하게 적혀 있어서 사람도 읽기 쉽고 컴퓨터도 순식간에 해석할 수 있습니다.`,
      keyPoints: [
        '🤝 앱 간 통신의 핵심: 스마트폰 앱 ↔ AI 서버 간에 데이터를 주고받는 표준 대화 수단',
        '🏷️ 이름표(Key)와 내용(Value)의 쌍: "이름": "홍길동" 형태로 정돈해서 적음',
        '⚠️ DB와의 차이점: JSON은 데이터를 주고받기 위해 작게 포장한 [택배 상자/파일]이고, DB는 수백만 개의 데이터를 안전하게 보관하고 번개처럼 찾아내는 [거대한 도서관 금고]입니다!',
        '🤖 AI에서의 용도: ChatGPT API에 질문을 보낼 때나, AI에게 "결과를 엑셀처럼 표 형태로 정리해서 줘!"(JSON Mode) 할 때 필수'
      ],
      codeExample: `// 📦 스마트폰 앱이 AI에게 전달하는 JSON 대화 상자 예시
{
  "보내는사람": "사용자",
  "AI모델": "ChatGPT",
  "질문내용": "초보자도 이해하기 쉬운 JSON 설명해줘!",
  "답변길이": 300
}`,
      labTarget: 'json-lab',
      labLabel: 'JSON 직접 편집 & 검증 실습하기'
    },
    {
      id: 'markdown',
      title: 'MD (Markdown) 파일',
      badge: 'AI와 사람의 대화 언어',
      badgeClass: 'badge-cyan',
      icon: FileText,
      summary: '사람과 AI가 대화할 때 서로 가장 읽고 쓰기 좋은 친절한 문서 서식!',
      aiImportance: 'AI에게 "너는 선생님이야, 이 규칙을 지켜!"(프롬프트)라고 명령할 때와 AI가 대답을 깔끔하게 출력할 때 쓰는 세계 공통 문서 언어',
      description: `마크다운(Markdown, .md)은 복잡한 워드나 한글 프로그램 없이도, 메모장에샵(#)이나 별표(**)만 붙이면 멋진 문서 서식이 만들어지는 가장 쉬운 글쓰기 방식입니다.

특히 **AI와 사람이 대화할 때 가장 쓰기 좋은 언어**입니다! 복잡한 프로그램 코드가 아니면서도 제목, 강조, 목록이 명확하게 구분되어 AI가 사람의 의도를 찰떡같이 이해합니다.`,
      keyPoints: [
        '💬 AI와 대화할 때 최고: 사람도 읽기 쉽고, AI도 지시사항(프롬프트)을 가장 찰떡같이 이해함',
        '# 큰 제목: 글자 앞에 #만 붙이면 AI가 "아, 이게 중요한 주제구나!" 하고 한눈에 파악',
        '**굵은 글씨**: 중요한 강조 사항을 AI에게 확실하게 전달',
        '```코드 블록```: AI가 프로그래밍 코드나 데이터를 깔끔하게 구분해서 답변해줌',
        '🎯 환각(거짓말) 방지: 마크다운으로 1. 역할, 2. 규칙을 정리해서 주면 AI가 헛소리를 안 함!'
      ],
      codeExample: `# 🤖 AI 선생님에게 주는 지시문 (System Prompt)

## 1. 당신의 역할
너는 아주 친절한 **초보자 전용 AI 강사**이다.

## 2. 대답할 때 규칙
- 어려운 전문 용어는 **쉬운 비유**를 들어 설명할 것!
- 답변 마지막에는 퀴즈 1개를 넣어줄 것.`,
      labTarget: 'md-lab',
      labLabel: '마크다운 라이브 에디터 실습하기'
    },
    {
      id: 'frontend',
      title: '프론트엔드 (Frontend)',
      badge: '손님이 보는 카페 카운터',
      badgeClass: 'badge-pink',
      icon: Monitor,
      summary: '사용자가 직접 눈으로 보고 조작하는 웹 화면 (메뉴판 & 대화창)',
      aiImportance: 'ChatGPT 채팅창처럼 글자가 또박또박 한 글자씩 써지는 화면 UX 구현',
      description: `프론트엔드는 사용자가 직접 눈으로 보는 웹사이트의 화면(UI)입니다. 카페에 비유하자면 **손님이 접하는 예쁜 인테리어, 메뉴판, 주문 카운터**와 같습니다.`,
      keyPoints: [
        '🎨 화면 꾸미기: HTML(뼈대), CSS(디자인), JavaScript/React(움직이는 기능)',
        '⚡ AI 스트리밍 채팅창: AI가 대답할 때 답답하지 않게 타이핑치듯 글자가 쪼르르 나타나는 화면 구현',
        '✍️ 마크다운 렌더링: AI가 보내온 마크다운 텍스트를 사용자가 보기 좋게 예쁜 글씨와 표로 바꿔줌'
      ],
      codeExample: `// 🖥️ 프론트엔드: AI의 대답이 타이핑 치듯 나오는 화면 기능
function ChatScreen() {
  return (
    <div className="chat-box">
      <h3>AI의 답변:</h3>
      <p>안녕하세요! 오늘 스터디에 오신 것을 환영합니다! 😊</p>
    </div>
  );
}`
    },
    {
      id: 'backend',
      title: '백엔드 (Backend)',
      badge: '보이지 않는 카페 주방',
      badgeClass: 'badge-green',
      icon: Server,
      summary: '눈에 보이지 않는 서버 비즈니스 로직 & AI 비밀 열쇠(API Key) 안전 보관소',
      aiImportance: 'AI 회사(OpenAI)에 보낼 진짜 질문을 조립하고, 비싼 비밀 열쇠가 유출되지 않게 방어',
      description: `백엔드는 손님 눈에는 보이지 않는 **카페의 주방과 재료 창고**입니다. 

AI 서비스를 만들 때 가장 중요한 **AI 비밀 열쇠(API Key)**를 안전하게 보관하고, 손님의 질문을 AI 모델에게 제대로 전달해주는 역할을 합니다.`,
      keyPoints: [
        '🔐 비밀 열쇠(API Key) 보호: 프론트엔드(손님 화면)에 열쇠를 놓아두면 도둑맞으므로 백엔드 주방에 안전하게 보관!',
        '🍲 질문 요리하기: 손님이 "오늘 날씨 어때?" 물어보면 [과거 대화 + 날씨 데이터 + 유저 질문]을 맛있게 섞어서 AI에게 전달',
        '🐍 주요 언어: AI 분야에서 가장 많이 쓰이는 Python(FastAPI) 또는 Node.js'
      ],
      codeExample: `# 🐍 백엔드 (Python): 서버에서 안전하게 AI에게 질문 전달
@app.post("/ask-ai")
def ask_ai(user_question):
    # 비밀 키는 서버 안에서만 몰래 사용!
    answer = call_openai_api(user_question, secret_key="SK-SECRET")
    return {"answer": answer}`
    },
    {
      id: 'database',
      title: '데이터베이스 (DB)',
      badge: '데이터 금고 & AI 도서관',
      badgeClass: 'badge-amber',
      icon: Database,
      summary: '일반적으로 쓰이는 [SQL 관계형 DB]부터 AI에서 특화된 [Vector DB] 비교 정리!',
      aiImportance: '일반 DB로 회원/결제 정보를 저장하고, AI 특화 Vector DB로 문장의 뜻을 찾아 RAG(검색 증강)에 활용!',
      description: `데이터베이스(DB)는 서비스의 수많은 데이터(회원 정보, 결제 내역, 게시글 등)를 절대 잃어버리지 않고 안전하게 보관하는 **거대한 전자 금고**입니다.

가장 흔하게 쓰이는 **일반 DB(SQL/RDB)**와 AI 시대에 떠오른 **Vector DB**의 역할과 차이점을 비교해 보세요!`,
      keyPoints: [
        '📊 1. 일반적인 DB (SQL / 관계형 DB): 엑셀표처럼 행과 열로 된 정형 데이터 저장 (MySQL, PostgreSQL 등). 회원가입, 결제, 게시글 등 웹/앱 개발 실무의 99%를 담당하는 핵심 금고입니다.',
        '🍃 2. NoSQL DB: 형식이 자유로운 문서나 대화 세션, 캐시 데이터 저장 (MongoDB, Redis 등).',
        '🧠 3. AI 특화 DB (Vector DB): 단어와 문장의 "뜻(의미)"을 숫자(벡터)로 변환해 저장하는 DB (Chroma, Pinecone 등).',
        '🔍 [핵심 비교] 검색 방식의 차이:',
        '   - 일반 SQL DB: "아이디 = hong123" 처럼 정확하게 일치하는 단어/숫자를 검색',
        '   - AI Vector DB: "배고픈데 뭐 먹지?" 입력 시 키워드가 달라도 의미가 비슷한 "음식점 추천 문서"를 검색!'
      ],
      codeExample: `// 1. 일반적인 SQL DB (개발의 메인 금고 - 정확한 조건 검색)
SELECT * FROM users WHERE user_id = 'hong123'; // ID가 exact 일치하는 회원 조회

// 2. AI 특화 Vector DB (의미 기반 유사도 검색)
VectorDB.search("연차 휴가 신청은 어떻게 하나요?"); 
// ➔ 키워드가 딱 안 맞아도 '뜻'이 비슷한 "제3조: 휴가 가이드 문서"를 찾아냄!`
    }
  ];

  const activeData = concepts.find(c => c.id === selectedConcept) || concepts[0];

  return (
    <div className="animate-fade-in" style={{ paddingBottom: '60px' }}>
      
      {/* Introduction Banner */}
      <div className="glass-panel" style={{ padding: '36px', marginBottom: '36px', background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)' }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: '24px' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
              <span className="badge badge-purple">초보자 맞춤 가이드</span>
              <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', fontWeight: 600 }}>개발 기초 & AI 활용 비교</span>
            </div>
            <h2 style={{ fontSize: '2.1rem', fontWeight: 800, marginBottom: '12px', color: '#0f172a', letterSpacing: '-0.02em' }}>
              개발 기본부터 알기 쉬운 <span className="gradient-text">5가지 핵심 개념</span>
            </h2>
            <p style={{ color: 'var(--text-secondary)', maxWidth: '850px', fontSize: '1.08rem', lineHeight: 1.8 }}>
              어려운 용어는 그만! <strong>JSON, Markdown, 프론트엔드, 백엔드, DB (일반 SQL vs Vector DB)</strong>를 
              실생활 비유와 비교 설명으로 쉽게 이해해 보세요.
            </p>
          </div>
          <div style={{ display: 'flex', gap: '14px' }}>
            <button 
              className="btn-primary" 
              onClick={() => onSelectLab('json-lab')}
              style={{ fontSize: '0.95rem', padding: '12px 24px' }}
            >
              <Zap size={18} /> JSON 실습하기
            </button>
            <button 
              className="btn-secondary" 
              onClick={() => onSelectLab('md-lab')}
              style={{ fontSize: '0.95rem', padding: '12px 24px' }}
            >
              <FileText size={18} /> MD 실습하기
            </button>
          </div>
        </div>
      </div>

      {/* Grid Layout */}
      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(320px, 1fr) minmax(450px, 1.8fr)', gap: '32px' }}>
        
        {/* Left Column: Concept Selector List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {concepts.map((concept) => {
            const Icon = concept.icon;
            const isSelected = selectedConcept === concept.id;
            return (
              <div
                key={concept.id}
                onClick={() => setSelectedConcept(concept.id)}
                className="glass-panel"
                style={{
                  padding: '24px 26px',
                  cursor: 'pointer',
                  transition: 'all 0.25s ease',
                  borderLeft: isSelected ? '5px solid var(--accent-purple)' : '1px solid var(--border-color)',
                  background: isSelected ? '#ffffff' : '#f8fafc',
                  boxShadow: isSelected ? 'var(--shadow-hover)' : 'var(--shadow-card)',
                  transform: isSelected ? 'translateX(6px)' : 'none'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '14px',
                      background: isSelected ? 'var(--gradient-primary)' : '#e2e8f0',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: isSelected ? '#fff' : '#475569'
                    }}>
                      <Icon size={22} />
                    </div>
                    <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0f172a' }}>{concept.title}</h3>
                  </div>
                  <span className={`badge ${concept.badgeClass}`}>{concept.badge}</span>
                </div>
                <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.6, paddingLeft: '56px' }}>
                  {concept.summary}
                </p>
              </div>
            );
          })}
        </div>

        {/* Right Column: Detailed View of Selected Concept */}
        <div className="glass-panel" style={{ padding: '36px', display: 'flex', flexDirection: 'column', gap: '28px' }}>
          
          {/* Header of Detail */}
          <div style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '10px' }}>
              <span className={`badge ${activeData.badgeClass}`}>{activeData.badge}</span>
              <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem', fontWeight: 600 }}>쉬운 개념 설명 & 비교</span>
            </div>
            <h2 style={{ fontSize: '2.1rem', fontWeight: 800, color: '#0f172a' }}>{activeData.title}</h2>
          </div>

          {/* AI Importance Highlight Box */}
          <div style={{ 
            background: 'var(--gradient-glow)', 
            border: '1px solid rgba(124, 58, 237, 0.2)', 
            borderRadius: '16px', 
            padding: '24px',
            display: 'flex',
            gap: '16px',
            alignItems: 'flex-start'
          }}>
            <Lightbulb size={30} color="var(--accent-purple)" style={{ flexShrink: 0, marginTop: '2px' }} />
            <div>
              <h4 style={{ fontSize: '1.05rem', color: 'var(--accent-purple)', fontWeight: 800, marginBottom: '6px' }}>
                💡 핵심요약 & AI에서의 역할
              </h4>
              <p style={{ fontSize: '1rem', color: '#1e293b', lineHeight: 1.7, fontWeight: 600 }}>
                {activeData.aiImportance}
              </p>
            </div>
          </div>

          {/* Description */}
          <div>
            <h4 style={{ fontSize: '1.1rem', fontWeight: 800, marginBottom: '12px', color: '#0f172a' }}>
              📌 기본 개념
            </h4>
            <p style={{ fontSize: '1.02rem', color: 'var(--text-secondary)', lineHeight: 1.8, whiteSpace: 'pre-line' }}>
              {activeData.description}
            </p>
          </div>

          {/* Key Feature Bullet Points */}
          <div>
            <h4 style={{ fontSize: '1.1rem', fontWeight: 800, marginBottom: '16px', color: '#0f172a' }}>
              ⚙️ 꼭 알아야 할 핵심 포인트
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {activeData.keyPoints.map((pt, idx) => (
                <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '14px', fontSize: '0.98rem', color: '#334155', lineHeight: 1.7 }}>
                  <CheckCircle2 size={20} color="#059669" style={{ flexShrink: 0, marginTop: '3px' }} />
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Real Code Example Box */}
          <div>
            <h4 style={{ fontSize: '1.05rem', fontWeight: 800, marginBottom: '12px', color: '#0f172a' }}>
              💻 실체 예시 구문 / 코드
            </h4>
            <pre style={{
              background: '#0f172a',
              border: '1px solid #1e293b',
              borderRadius: '16px',
              padding: '22px',
              color: '#38bdf8',
              fontSize: '0.92rem',
              overflowX: 'auto',
              lineHeight: 1.7
            }}>
              <code>{activeData.codeExample}</code>
            </pre>
          </div>

          {/* Quick Lab Button if available */}
          {activeData.labTarget && (
            <div style={{ marginTop: 'auto', paddingTop: '20px', borderTop: '1px solid var(--border-color)' }}>
              <button
                className="btn-primary"
                onClick={() => onSelectLab(activeData.labTarget)}
                style={{ width: '100%', justifyContent: 'center', padding: '16px', fontSize: '1.05rem' }}
              >
                <span>{activeData.labLabel}</span>
                <ArrowRight size={22} />
              </button>
            </div>
          )}

        </div>

      </div>

    </div>
  );
}
