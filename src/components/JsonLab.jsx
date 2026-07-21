import React, { useState } from 'react';
import { Code, CheckCircle, AlertTriangle, Copy, RotateCcw, Wrench, Sparkles, FileCode } from 'lucide-react';

export default function JsonLab() {
  const templates = {
    openai: `{
  "model": "gpt-4o",
  "messages": [
    {
      "role": "system",
      "content": "너는 유능한 AI 스터디 튜터이다."
    },
    {
      "role": "user",
      "content": "JSON 포맷이 AI에서 왜 자주 쓰이나요?"
    }
  ],
  "temperature": 0.7,
  "max_tokens": 500,
  "stream": false
}`,
    structured: `{
  "task": "뉴스 기사 요약 및 감정 분석",
  "input_text": "오늘 발표회에서 AI 관련 기술 용어에 대한 열띤 토론이 진행되었습니다.",
  "response_schema": {
    "summary": "AI 용어 스터디 발표 성료",
    "sentiment": "POSITIVE",
    "confidence_score": 0.95,
    "keywords": ["AI", "발표", "스터디", "기술용어"]
  }
}`,
    rag: `{
  "document_id": "doc_rag_2026_07",
  "chunk_id": 4,
  "content": "Vector DB는 단어를 임베딩 벡터로 변환하여 유사도 검색을 수행합니다.",
  "metadata": {
    "author": "스터디 리더",
    "category": "Database",
    "vector_dim": 1536,
    "is_active": true
  }
}`,
    broken: `{
  model: "gpt-4o",
  "messages": [
    { "role": "user", "content": "JSON 에러 고치기 문제!" }
  ],
  "temperature": 0.7,
}`
  };

  const [jsonInput, setJsonInput] = useState(templates.openai);
  const [copied, setCopied] = useState(false);

  // Validate JSON
  let isValid = false;
  let parsedJson = null;
  let errorMessage = '';

  try {
    parsedJson = JSON.parse(jsonInput);
    isValid = true;
  } catch (err) {
    isValid = false;
    errorMessage = err.message;
  }

  const handleFormat = () => {
    if (isValid && parsedJson) {
      setJsonInput(JSON.stringify(parsedJson, null, 2));
    }
  };

  const handleMinify = () => {
    if (isValid && parsedJson) {
      setJsonInput(JSON.stringify(parsedJson));
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(jsonInput);
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
              <span className="badge badge-purple">Interactive Practice</span>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>실시간 JSON 에디터 & 파서</span>
            </div>
            <h2 style={{ fontSize: '1.6rem', fontWeight: 800 }}>
              🧪 <span className="gradient-text">JSON 실습실</span> (JSON Lab)
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '4px' }}>
              LLM API 요청/응답 형식의 JSON을 작성하고, 문법 규칙 유효성을 실시간으로 확인해보세요.
            </p>
          </div>

          {/* Preset Template Selectors */}
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            <button className="btn-secondary" onClick={() => setJsonInput(templates.openai)}>
              <FileCode size={14} /> OpenAI API 예시
            </button>
            <button className="btn-secondary" onClick={() => setJsonInput(templates.structured)}>
              <Sparkles size={14} /> AI JSON Mode
            </button>
            <button className="btn-secondary" onClick={() => setJsonInput(templates.rag)}>
              <Code size={14} /> RAG 메타데이터
            </button>
            <button 
              className="btn-secondary" 
              onClick={() => setJsonInput(templates.broken)}
              style={{ border: '1px dashed var(--accent-amber)', color: 'var(--accent-amber)' }}
            >
              <Wrench size={14} /> 🎯 에러 고치기 문제
            </button>
          </div>
        </div>
      </div>

      {/* Editor & Viewer Split Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(350px, 1fr) minmax(350px, 1fr)', gap: '24px' }}>
        
        {/* Left Side: Code Input Area */}
        <div className="glass-panel" style={{ padding: '20px', display: 'flex', flexDirection: 'column', height: '550px' }}>
          
          {/* Header Controls */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px', paddingBottom: '12px', borderBottom: '1px solid var(--border-color)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Code size={18} color="var(--accent-purple)" />
              <span style={{ fontWeight: 700, fontSize: '0.95rem' }}>JSON 입력란</span>
            </div>

            {/* Validation Badge */}
            <div>
              {isValid ? (
                <span className="badge badge-green" style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
                  <CheckCircle size={14} /> Valid JSON
                </span>
              ) : (
                <span className="badge badge-pink" style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
                  <AlertTriangle size={14} /> Syntax Error
                </span>
              )}
            </div>
          </div>

          {/* Textarea */}
          <textarea
            value={jsonInput}
            onChange={(e) => setJsonInput(e.target.value)}
            className="code-font"
            placeholder="여기에 JSON 데이터를 입력하거나 수정하세요..."
            style={{
              flex: 1,
              width: '100%',
              background: 'var(--bg-input)',
              color: '#38bdf8',
              border: isValid ? '1px solid var(--border-color)' : '1px solid #ef4444',
              borderRadius: '8px',
              padding: '16px',
              fontSize: '0.88rem',
              lineHeight: 1.5,
              resize: 'none',
              outline: 'none'
            }}
          />

          {/* Editor Footer Tools */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '12px', gap: '8px', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', gap: '8px' }}>
              <button className="btn-secondary" onClick={handleFormat} disabled={!isValid} style={{ opacity: isValid ? 1 : 0.5, fontSize: '0.8rem' }}>
                정렬 (Prettify)
              </button>
              <button className="btn-secondary" onClick={handleMinify} disabled={!isValid} style={{ opacity: isValid ? 1 : 0.5, fontSize: '0.8rem' }}>
                압축 (Minify)
              </button>
            </div>
            <div style={{ display: 'flex', gap: '8px' }}>
              <button className="btn-secondary" onClick={handleCopy} style={{ fontSize: '0.8rem' }}>
                <Copy size={14} /> {copied ? '복사됨!' : '코드 복사'}
              </button>
              <button className="btn-secondary" onClick={() => setJsonInput(templates.openai)} style={{ fontSize: '0.8rem' }}>
                <RotateCcw size={14} /> 초기화
              </button>
            </div>
          </div>

        </div>

        {/* Right Side: Parsed View & Educational Feedback */}
        <div className="glass-panel" style={{ padding: '20px', display: 'flex', flexDirection: 'column', height: '550px' }}>
          
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px', paddingBottom: '12px', borderBottom: '1px solid var(--border-color)' }}>
            <span style={{ fontWeight: 700, fontSize: '0.95rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
              🔍 {isValid ? '파싱 결과 & 트리 뷰' : '에러 진단 리포트'}
            </span>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
              {isValid ? '정상 파싱됨' : '문법 검사 실패'}
            </span>
          </div>

          <div style={{ flex: 1, overflowY: 'auto' }}>
            {isValid ? (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ background: 'rgba(16, 185, 129, 0.08)', border: '1px solid rgba(16, 185, 129, 0.2)', padding: '14px', borderRadius: '10px' }}>
                  <h4 style={{ color: '#34d399', fontSize: '0.88rem', fontWeight: 700, marginBottom: '6px' }}>
                    ✅ 유효한 JSON 포맷입니다!
                  </h4>
                  <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
                    루트 데이터 타입: <strong>{Array.isArray(parsedJson) ? 'Array (배열)' : typeof parsedJson}</strong> 
                    {typeof parsedJson === 'object' && parsedJson !== null && !Array.isArray(parsedJson) && (
                      <span> ({Object.keys(parsedJson).length}개의 Key 소유)</span>
                    )}
                  </p>
                </div>

                {/* Parsed Output Display */}
                <div style={{ background: 'var(--bg-input)', padding: '16px', borderRadius: '10px', border: '1px solid var(--border-color)' }}>
                  <h5 style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginBottom: '8px', textTransform: 'uppercase' }}>
                    Javascript Object Tree
                  </h5>
                  <pre className="code-font" style={{ fontSize: '0.85rem', color: '#a7f3d0', whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>
                    {JSON.stringify(parsedJson, null, 2)}
                  </pre>
                </div>

                {/* Educational JSON Key Rules Reminder */}
                <div style={{ background: 'rgba(139, 92, 246, 0.08)', border: '1px solid rgba(139, 92, 246, 0.2)', padding: '14px', borderRadius: '10px' }}>
                  <h5 style={{ fontSize: '0.85rem', color: '#c084fc', fontWeight: 700, marginBottom: '4px' }}>
                    💡 발표 팁 (Presentation Tip)
                  </h5>
                  <p style={{ fontSize: '0.82rem', color: '#e2e8f0', lineHeight: 1.5 }}>
                    LLM API 호출 시 <code>"stream": true</code> 옵션을 주면 Server-Sent Events(SSE)를 통해 JSON 기반의 스트리밍 토큰 조각들이 전송됩니다.
                  </p>
                </div>

              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                
                {/* Error Banner */}
                <div style={{ background: 'rgba(239, 68, 68, 0.1)', border: '1px solid rgba(239, 68, 68, 0.3)', padding: '16px', borderRadius: '10px' }}>
                  <h4 style={{ color: '#f87171', fontSize: '0.9rem', fontWeight: 700, marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <AlertTriangle size={18} /> JSON 문법 에러가 발생했습니다
                  </h4>
                  <pre className="code-font" style={{ fontSize: '0.82rem', color: '#fca5a5', whiteSpace: 'pre-wrap', background: 'rgba(0,0,0,0.3)', padding: '10px', borderRadius: '6px' }}>
                    {errorMessage}
                  </pre>
                </div>

                {/* Checklist to Fix Error */}
                <div style={{ background: 'rgba(245, 158, 11, 0.08)', border: '1px solid rgba(245, 158, 11, 0.2)', padding: '16px', borderRadius: '10px' }}>
                  <h5 style={{ fontSize: '0.88rem', color: '#fbbf24', fontWeight: 700, marginBottom: '8px' }}>
                    🛠️ 흔히 발생하는 JSON 에러 체크리스트
                  </h5>
                  <ul style={{ fontSize: '0.82rem', color: '#d1d5db', display: 'flex', flexDirection: 'column', gap: '6px', paddingLeft: '18px' }}>
                    <li><strong>키(Key)의 큰따옴표 누락:</strong> <code>model: "gpt"</code> ➔ <code>"model": "gpt"</code></li>
                    <li><strong>Trailing Comma (마지막 콤마):</strong> 마지막 항목 뒤에 콤마가 남아있는지 확인하세요.</li>
                    <li><strong>홑따옴표 사용:</strong> JSON은 작은따옴표(<code>'</code>) 대신 큰따옴표(<code>"</code>)만 허용합니다.</li>
                    <li><strong>괄호 짝 맺기:</strong> 중괄호 <code>{"{ }"}</code> 와 대괄호 <code>{"[ ]"}</code> 짝이 맞는지 검사하세요.</li>
                  </ul>
                </div>

              </div>
            )}
          </div>

        </div>

      </div>

    </div>
  );
}
