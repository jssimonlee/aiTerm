import React, { useState } from 'react';
import { marked } from 'marked';
import { FileText, Eye, Heading, Bold, Code, List, Table, Sparkles, Copy, RotateCcw } from 'lucide-react';

export default function MarkdownLab() {
  const templates = {
    systemPrompt: `# 🤖 AI System Prompt: 전문 코드 리뷰어

## 1. 역할 (Role)
당신은 10년차 **Senior Frontend & AI 엔지니어**입니다.

## 2. 작업 지시사항
사용자가 제출한 코드의 **성능, 가독성, 보안** 문제를 분석하고 개선안을 제시하세요.

## 3. 출력 포맷 규칙
- 모든 개선 코드는 \`\`\`js 괄호 안에 작성할 것
- 핵심 수정 사항은 **굵은 글씨**로 강조할 것

| 항목 | 검토 기준 | 비고 |
| :--- | :--- | :--- |
| **보안** | API Key 노출 여부 | 백엔드 래핑 필수 |
| **성능** | 불필요한 리렌더링 | React.memo 활용 |

> [!NOTE]
> 환각(Hallucination) 방지를 위해 모르는 내용은 솔직히 인정하세요.`,
    
    ragDoc: `# 📚 RAG 지식 문서: Vector DB와 Embedding

## 개념 개요
**임베딩(Embedding)**은 사람이 사용하는 텍스트를 컴퓨터가 이해할 수 있는 **고차원 벡터(숫자 배열)**로 변환하는 기술입니다.

### 핵심 개념 3가지
1. **Semantic Search (의미적 검색)**: 키워드가 정확히 일치하지 않아도 의미가 비슷하면 검색됨
2. **Cosine Similarity**: 두 벡터 간의 각도를 계산하여 유사도 측정
3. **Chunking**: 긴 문서를 적절한 크기로 쪼개어 저장하는 과정

\`\`\`python
# Python 임베딩 변환 예시
from openai import OpenAI
client = OpenAI()

response = client.embeddings.create(
    input="AI 스터디용 마크다운 실습",
    model="text-embedding-3-small"
)
vector = response.data[0].embedding
\`\`\``,

    studyNote: `# 📝 AI 용어 스터디 요약 노트

- **JSON**: Key-Value 구조의 데이터 전달 포맷
- **MD**: AI 지시문 및 문서 작성용 마크다운 언어
- **Frontend**: 사용자 화면 (React, 스트리밍 UI)
- **Backend**: API 키 보안 및 서버 통신 (FastAPI, Express)
- **Vector DB**: 의미 기반 유사도 검색 저장소`
  };

  const [mdInput, setMdInput] = useState(templates.systemPrompt);
  const [copied, setCopied] = useState(false);

  // Configure marked for clean HTML
  marked.setOptions({
    gfm: true,
    breaks: true
  });

  const getParsedHtml = () => {
    try {
      return marked.parse(mdInput);
    } catch (e) {
      return `<p style="color:red;">Markdown Parsing Error: ${e.message}</p>`;
    }
  };

  const insertText = (before, after = '') => {
    setMdInput(prev => prev + `\n${before}텍스트${after}`);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(mdInput);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="animate-fade-in" style={{ paddingBottom: '40px' }}>
      
      {/* Top Title Bar */}
      <div className="glass-panel" style={{ padding: '24px', marginBottom: '24px', background: 'var(--gradient-card)' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
              <span className="badge badge-cyan">Interactive Practice</span>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>실시간 마크다운 라이브 에디터</span>
            </div>
            <h2 style={{ fontSize: '1.6rem', fontWeight: 800 }}>
              ✍️ <span className="gradient-text">Markdown 실습실</span> (MD Lab)
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '4px' }}>
              AI 프롬프트 작성과 지식베이스 문서화에 필수적인 마크다운 서식을 직접 작성하고 렌더링 결과를 확인하세요.
            </p>
          </div>

          {/* Template Buttons */}
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            <button className="btn-secondary" onClick={() => setMdInput(templates.systemPrompt)}>
              <Sparkles size={14} /> AI System Prompt 템플릿
            </button>
            <button className="btn-secondary" onClick={() => setMdInput(templates.ragDoc)}>
              <FileText size={14} /> RAG 지식 문서
            </button>
            <button className="btn-secondary" onClick={() => setMdInput(templates.studyNote)}>
              <List size={14} /> 스터디 노트
            </button>
          </div>
        </div>
      </div>

      {/* Main Split Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(350px, 1fr) minmax(350px, 1fr)', gap: '24px' }}>
        
        {/* Left Side: Markdown Input */}
        <div className="glass-panel" style={{ padding: '20px', display: 'flex', flexDirection: 'column', height: '600px' }}>
          
          {/* Header & Quick Insert Toolbar */}
          <div style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '12px', marginBottom: '12px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <FileText size={18} color="var(--accent-cyan)" />
                <span style={{ fontWeight: 700, fontSize: '0.95rem' }}>마크다운 입력</span>
              </div>
              <div style={{ display: 'flex', gap: '6px' }}>
                <button className="btn-secondary" onClick={handleCopy} style={{ fontSize: '0.78rem', padding: '4px 10px' }}>
                  <Copy size={12} /> {copied ? '복사됨!' : '복사'}
                </button>
                <button className="btn-secondary" onClick={() => setMdInput(templates.systemPrompt)} style={{ fontSize: '0.78rem', padding: '4px 10px' }}>
                  <RotateCcw size={12} /> 초기화
                </button>
              </div>
            </div>

            {/* Quick Formatting Buttons */}
            <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', background: 'rgba(0,0,0,0.2)', padding: '6px', borderRadius: '8px' }}>
              <button className="btn-secondary" onClick={() => insertText('# ')} style={{ padding: '4px 8px', fontSize: '0.78rem' }}>
                <Heading size={14} /> H1
              </button>
              <button className="btn-secondary" onClick={() => insertText('## ')} style={{ padding: '4px 8px', fontSize: '0.78rem' }}>
                <Heading size={12} /> H2
              </button>
              <button className="btn-secondary" onClick={() => insertText('**', '**')} style={{ padding: '4px 8px', fontSize: '0.78rem' }}>
                <Bold size={14} /> Bold
              </button>
              <button className="btn-secondary" onClick={() => insertText('```javascript\n', '\n```')} style={{ padding: '4px 8px', fontSize: '0.78rem' }}>
                <Code size={14} /> Code Block
              </button>
              <button className="btn-secondary" onClick={() => insertText('- ')} style={{ padding: '4px 8px', fontSize: '0.78rem' }}>
                <List size={14} /> List
              </button>
              <button className="btn-secondary" onClick={() => insertText('| 항목 | 내용 |\n| --- | --- |\n| ', ' |')} style={{ padding: '4px 8px', fontSize: '0.78rem' }}>
                <Table size={14} /> Table
              </button>
            </div>
          </div>

          {/* Text Area */}
          <textarea
            value={mdInput}
            onChange={(e) => setMdInput(e.target.value)}
            className="code-font"
            placeholder="마크다운 문법으로 내용을 입력해보세요..."
            style={{
              flex: 1,
              width: '100%',
              background: 'var(--bg-input)',
              color: '#e2e8f0',
              border: '1px solid var(--border-color)',
              borderRadius: '8px',
              padding: '16px',
              fontSize: '0.88rem',
              lineHeight: 1.6,
              resize: 'none',
              outline: 'none'
            }}
          />
        </div>

        {/* Right Side: Formatted Live Preview */}
        <div className="glass-panel" style={{ padding: '20px', display: 'flex', flexDirection: 'column', height: '600px' }}>
          
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px', paddingBottom: '12px', borderBottom: '1px solid var(--border-color)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Eye size={18} color="var(--accent-cyan)" />
              <span style={{ fontWeight: 700, fontSize: '0.95rem' }}>실시간 서식 프리뷰 (Formatted Preview)</span>
            </div>
            <span className="badge badge-cyan">Live Render</span>
          </div>

          {/* Formatted HTML Content Container */}
          <div 
            style={{
              flex: 1,
              overflowY: 'auto',
              background: 'rgba(15, 23, 42, 0.6)',
              border: '1px solid var(--border-color)',
              borderRadius: '8px',
              padding: '24px',
              color: '#f1f5f9',
              lineHeight: 1.7
            }}
            dangerouslySetInnerHTML={{ __html: getParsedHtml() }}
            className="markdown-preview-body"
          />

        </div>

      </div>

      {/* Styling for Markdown Preview elements */}
      <style>{`
        .markdown-preview-body h1 {
          font-size: 1.6rem;
          color: #38bdf8;
          border-bottom: 2px solid rgba(56, 189, 248, 0.3);
          padding-bottom: 6px;
          margin-bottom: 14px;
          margin-top: 10px;
        }
        .markdown-preview-body h2 {
          font-size: 1.3rem;
          color: #c084fc;
          margin-top: 18px;
          margin-bottom: 10px;
        }
        .markdown-preview-body h3 {
          font-size: 1.1rem;
          color: #34d399;
          margin-top: 14px;
          margin-bottom: 8px;
        }
        .markdown-preview-body p {
          margin-bottom: 12px;
          color: #cbd5e1;
        }
        .markdown-preview-body ul, .markdown-preview-body ol {
          margin-left: 20px;
          margin-bottom: 12px;
          color: #e2e8f0;
        }
        .markdown-preview-body li {
          margin-bottom: 4px;
        }
        .markdown-preview-body blockquote {
          border-left: 4px solid var(--accent-purple);
          padding-left: 12px;
          color: #cbd5e1;
          background: rgba(139, 92, 246, 0.1);
          padding: 10px 14px;
          border-radius: 4px;
          margin-bottom: 12px;
        }
        .markdown-preview-body code {
          background: rgba(0, 0, 0, 0.4);
          color: #f472b6;
          padding: 2px 6px;
          border-radius: 4px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.85rem;
        }
        .markdown-preview-body pre {
          background: #090d16;
          padding: 14px;
          border-radius: 8px;
          overflow-x: auto;
          margin-bottom: 14px;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        .markdown-preview-body pre code {
          background: transparent;
          color: #38bdf8;
          padding: 0;
        }
        .markdown-preview-body table {
          width: 100%;
          border-collapse: collapse;
          margin-bottom: 14px;
          font-size: 0.88rem;
        }
        .markdown-preview-body th, .markdown-preview-body td {
          border: 1px solid rgba(255, 255, 255, 0.15);
          padding: 8px 12px;
          text-align: left;
        }
        .markdown-preview-body th {
          background: rgba(255, 255, 255, 0.08);
          color: #c084fc;
        }
      `}</style>

    </div>
  );
}
