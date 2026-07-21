import React, { useState } from 'react';
import { Code, FileText, Monitor, Server, Database, ArrowRight, CheckCircle2, Lightbulb, Zap, HelpCircle } from 'lucide-react';

export default function ConceptGuide({ onSelectLab }) {
  const [selectedConcept, setSelectedConcept] = useState('json');

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
      title: '데이터베이스 (DB & Vector DB)',
      badge: '체계적인 거대 금고',
      badgeClass: 'badge-amber',
      icon: Database,
      summary: '수백만 개의 데이터를 안전하게 보관하는 거대 금고 + 뜻(의미)으로 검색하는 AI 도서관!',
      aiImportance: 'RAG (검색 증강 생성) - AI가 거짓말하지 않고 우리 회사 비밀 문서를 읽고 답하게 만드는 핵심 기술',
      description: `데이터베이스(DB)는 수많은 정보를 절대 잃어버리지 않고 필요할 때 순식간에 찾아내는 **거대한 전자 서류함/금고**입니다.

특히 AI 시대에는 단어의 '뜻'을 이해해서 비슷한 의미를 찾아주는 **Vector DB(벡터 데이터베이스)**가 핵심입니다!`,
      keyPoints: [
        '📁 일반 DB vs JSON: JSON은 종이 봉투 1개에 담긴 서류이고, DB는 수백만 개 서류를 자동 정렬해둔 거대 도서관 금고!',
        '🧠 Vector DB (AI 전용 DB): 키워드가 안 맞아도 의미가 비슷하면 찾아냄! (예: "배고파" ➔ "음식점 메뉴" 검색)',
        '🎯 RAG 기술: AI가 모르는 최신 정보나 회사 내부 문서를 Vector DB에서 찾아서 AI에게 알려준 뒤 대답하게 함!'
      ],
      codeExample: `// 🔍 Vector DB: 의미 기반 검색 예시
사용자 질문: "휴가 쓰려면 어떻게 해?"
  ⬇️ (의미가 비슷한 문서 찾아라!)
Vector DB 검색 결과: "제 3조: 연차 휴가 신청은 3일 전 제출..."
  ⬇️ (이 내용을 바탕으로 AI가 대답!)
AI: "연차 휴가는 3일 전에 신청서를 제출하시면 됩니다!"`
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
              <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', fontWeight: 600 }}>아주 쉬운 비유와 예시</span>
            </div>
            <h2 style={{ fontSize: '2.1rem', fontWeight: 800, marginBottom: '12px', color: '#0f172a', letterSpacing: '-0.02em' }}>
              AI 개발의 기초 <span className="gradient-text">5가지 핵심 개념</span>
            </h2>
            <p style={{ color: 'var(--text-secondary)', maxWidth: '850px', fontSize: '1.08rem', lineHeight: 1.8 }}>
              어려운 개발 용어는 이제 그만! <strong>JSON, Markdown, 프론트엔드, 백엔드, DB</strong>를 
              실생활 비유로 쉽게 이해하고 AI와 대화하는 법을 익혀보세요.
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
              <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem', fontWeight: 600 }}>쉬운 개념 설명</span>
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
                💡 왜 AI에서 그렇게 중요할까요?
              </h4>
              <p style={{ fontSize: '1rem', color: '#1e293b', lineHeight: 1.7, fontWeight: 600 }}>
                {activeData.aiImportance}
              </p>
            </div>
          </div>

          {/* Description */}
          <div>
            <h4 style={{ fontSize: '1.1rem', fontWeight: 800, marginBottom: '12px', color: '#0f172a' }}>
              📌 한 문장 쉬운 개념
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
              💻 쉬운 예시 모습
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
