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
    <div className="animate-fade-in" style={{ paddingBottom: '60px' }}>
      
      {/* Top Title Bar */}
      <div className="glass-panel" style={{ padding: '32px', marginBottom: '32px', background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '24px' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
              <span className="badge badge-cyan">Interactive Practice</span>
              <span style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', fontWeight: 500 }}>실시간 마크다운 라이브 에디터</span>
            </div>
            <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#0f172a' }}>
              ✍️ <span className="gradient-text">Markdown 실습실</span> (MD Lab)
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.98rem', marginTop: '6px' }}>
              AI 프롬프트 작성과 지식베이스 문서화에 필수적인 마크다운 서식을 직접 작성하고 렌더링 결과를 확인하세요.
            </p>
          </div>

          {/* Template Buttons */}
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <button className="btn-secondary" onClick={() => setMdInput(templates.systemPrompt)}>
              <Sparkles size={16} /> AI System Prompt 템플릿
            </button>
            <button className="btn-secondary" onClick={() => setMdInput(templates.ragDoc)}>
              <FileText size={16} /> RAG 지식 문서
            </button>
            <button className="btn-secondary" onClick={() => setMdInput(templates.studyNote)}>
              <List size={16} /> 스터디 노트
            </button>
          </div>
        </div>
      </div>

      {/* Main Split Grid with 32px gap */}
      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(350px, 1fr) minmax(350px, 1fr)', gap: '32px' }}>
        
        {/* Left Side: Markdown Input */}
        <div className="glass-panel" style={{ padding: '28px', display: 'flex', flexDirection: 'column', height: '650px' }}>
          
          {/* Header & Quick Insert Toolbar */}
          <div style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '16px', marginBottom: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <FileText size={20} color="var(--accent-cyan)" />
                <span style={{ fontWeight: 800, fontSize: '1.05rem', color: '#0f172a' }}>마크다운 입력</span>
              </div>
              <div style={{ display: 'flex', gap: '8px' }}>
                <button className="btn-secondary" onClick={handleCopy} style={{ fontSize: '0.82rem', padding: '6px 12px' }}>
                  <Copy size={14} /> {copied ? '복사됨!' : '복사'}
                </button>
                <button className="btn-secondary" onClick={() => setMdInput(templates.systemPrompt)} style={{ fontSize: '0.82rem', padding: '6px 12px' }}>
                  <RotateCcw size={14} /> 초기화
                </button>
              </div>
            </div>

            {/* Quick Formatting Buttons */}
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', background: '#f1f5f9', padding: '8px', borderRadius: '10px', border: '1px solid #e2e8f0' }}>
              <button className="btn-secondary" onClick={() => insertText('# ')} style={{ padding: '6px 10px', fontSize: '0.82rem' }}>
                <Heading size={14} /> H1
              </button>
              <button className="btn-secondary" onClick={() => insertText('## ')} style={{ padding: '6px 10px', fontSize: '0.82rem' }}>
                <Heading size={12} /> H2
              </button>
              <button className="btn-secondary" onClick={() => insertText('**', '**')} style={{ padding: '6px 10px', fontSize: '0.82rem' }}>
                <Bold size={14} /> Bold
              </button>
              <button className="btn-secondary" onClick={() => insertText('```javascript\n', '\n```')} style={{ padding: '6px 10px', fontSize: '0.82rem' }}>
                <Code size={14} /> Code Block
              </button>
              <button className="btn-secondary" onClick={() => insertText('- ')} style={{ padding: '6px 10px', fontSize: '0.82rem' }}>
                <List size={14} /> List
              </button>
              <button className="btn-secondary" onClick={() => insertText('| 항목 | 내용 |\n| --- | --- |\n| ', ' |')} style={{ padding: '6px 10px', fontSize: '0.82rem' }}>
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
              background: '#f8fafc',
              color: '#0f172a',
              border: '1px solid #cbd5e1',
              borderRadius: '12px',
              padding: '20px',
              fontSize: '0.92rem',
              lineHeight: 1.7,
              resize: 'none',
              outline: 'none'
            }}
          />
        </div>

        {/* Right Side: Formatted Live Preview */}
        <div className="glass-panel" style={{ padding: '28px', display: 'flex', flexDirection: 'column', height: '650px' }}>
          
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px', paddingBottom: '16px', borderBottom: '1px solid var(--border-color)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Eye size={20} color="var(--accent-cyan)" />
              <span style={{ fontWeight: 800, fontSize: '1.05rem', color: '#0f172a' }}>실시간 서식 프리뷰 (Formatted Preview)</span>
            </div>
            <span className="badge badge-cyan">Live Render</span>
          </div>

          {/* Formatted HTML Content Container */}
          <div 
            style={{
              flex: 1,
              overflowY: 'auto',
              background: '#ffffff',
              border: '1px solid #e2e8f0',
              borderRadius: '12px',
              padding: '28px',
              color: '#1e293b',
              lineHeight: 1.8
            }}
            dangerouslySetInnerHTML={{ __html: getParsedHtml() }}
            className="markdown-preview-body-light"
          />

        </div>

      </div>

      {/* Light Styling for Markdown Preview elements */}
      <style>{`
        .markdown-preview-body-light h1 {
          font-size: 1.75rem;
          color: #0284c7;
          border-bottom: 2px solid #bae6fd;
          padding-bottom: 8px;
          margin-bottom: 16px;
          margin-top: 10px;
          font-weight: 800;
        }
        .markdown-preview-body-light h2 {
          font-size: 1.4rem;
          color: #7c3aed;
          margin-top: 22px;
          margin-bottom: 12px;
          font-weight: 700;
        }
        .markdown-preview-body-light h3 {
          font-size: 1.15rem;
          color: #059669;
          margin-top: 16px;
          margin-bottom: 10px;
          font-weight: 700;
        }
        .markdown-preview-body-light p {
          margin-bottom: 14px;
          color: #334155;
        }
        .markdown-preview-body-light ul, .markdown-preview-body-light ol {
          margin-left: 24px;
          margin-bottom: 14px;
          color: #334155;
        }
        .markdown-preview-body-light li {
          margin-bottom: 6px;
        }
        .markdown-preview-body-light blockquote {
          border-left: 4px solid #7c3aed;
          padding: 12px 18px;
          color: #4c1d95;
          background: #f3e8ff;
          border-radius: 6px;
          margin-bottom: 16px;
        }
        .markdown-preview-body-light code {
          background: #f1f5f9;
          color: #db2777;
          padding: 3px 8px;
          border-radius: 6px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.88rem;
          border: 1px solid #e2e8f0;
        }
        .markdown-preview-body-light pre {
          background: #0f172a;
          padding: 18px;
          border-radius: 12px;
          overflow-x: auto;
          margin-bottom: 16px;
        }
        .markdown-preview-body-light pre code {
          background: transparent;
          color: #38bdf8;
          padding: 0;
          border: none;
        }
        .markdown-preview-body-light table {
          width: 100%;
          border-collapse: collapse;
          margin-bottom: 16px;
          font-size: 0.9rem;
        }
        .markdown-preview-body-light th, .markdown-preview-body-light td {
          border: 1px solid #e2e8f0;
          padding: 10px 14px;
          text-align: left;
        }
        .markdown-preview-body-light th {
          background: #f8fafc;
          color: #6d28d9;
          font-weight: 700;
        }
      `}</style>

    </div>
  );
}
