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
    <div className="animate-fade-in" style={{ paddingBottom: '60px' }}>
      
      {/* Top Title Bar */}
      <div className="glass-panel" style={{ padding: '32px', marginBottom: '32px', background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '24px' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
              <span className="badge badge-purple">Interactive Practice</span>
              <span style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', fontWeight: 500 }}>실시간 JSON 에디터 & 파서</span>
            </div>
            <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#0f172a' }}>
              🧪 <span className="gradient-text">JSON 실습실</span> (JSON Lab)
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.98rem', marginTop: '6px' }}>
              LLM API 요청/응답 형식의 JSON을 작성하고, 문법 규칙 유효성을 실시간으로 확인해보세요.
            </p>
          </div>

          {/* Preset Template Selectors */}
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <button className="btn-secondary" onClick={() => setJsonInput(templates.openai)}>
              <FileCode size={16} /> OpenAI API 예시
            </button>
            <button className="btn-secondary" onClick={() => setJsonInput(templates.structured)}>
              <Sparkles size={16} /> AI JSON Mode
            </button>
            <button className="btn-secondary" onClick={() => setJsonInput(templates.rag)}>
              <Code size={16} /> RAG 메타데이터
            </button>
            <button 
              className="btn-secondary" 
              onClick={() => setJsonInput(templates.broken)}
              style={{ border: '1px dashed var(--accent-amber)', background: '#fef3c7', color: '#b45309' }}
            >
              <Wrench size={16} /> 🎯 에러 고치기 문제
            </button>
          </div>
        </div>
      </div>

      {/* Editor & Viewer Split Grid with 32px gap */}
      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(350px, 1fr) minmax(350px, 1fr)', gap: '32px' }}>
        
        {/* Left Side: Code Input Area */}
        <div className="glass-panel" style={{ padding: '28px', display: 'flex', flexDirection: 'column', height: '620px' }}>
          
          {/* Header Controls */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px', paddingBottom: '16px', borderBottom: '1px solid var(--border-color)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <Code size={20} color="var(--accent-purple)" />
              <span style={{ fontWeight: 800, fontSize: '1.05rem', color: '#0f172a' }}>JSON 입력란</span>
            </div>

            {/* Validation Badge */}
            <div>
              {isValid ? (
                <span className="badge badge-green" style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
                  <CheckCircle size={14} /> Valid JSON
                </span>
              ) : (
                <span className="badge badge-pink" style={{ display: 'flex', gap: '6px', alignItems: 'center', background: '#fee2e2', color: '#dc2626', border: '1px solid #fca5a5' }}>
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
              background: '#0f172a',
              color: '#38bdf8',
              border: isValid ? '1px solid #334155' : '2px solid #ef4444',
              borderRadius: '12px',
              padding: '20px',
              fontSize: '0.92rem',
              lineHeight: 1.6,
              resize: 'none',
              outline: 'none'
            }}
          />

          {/* Editor Footer Tools */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '16px', gap: '12px', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', gap: '10px' }}>
              <button className="btn-secondary" onClick={handleFormat} disabled={!isValid} style={{ opacity: isValid ? 1 : 0.5 }}>
                정렬 (Prettify)
              </button>
              <button className="btn-secondary" onClick={handleMinify} disabled={!isValid} style={{ opacity: isValid ? 1 : 0.5 }}>
                압축 (Minify)
              </button>
            </div>
            <div style={{ display: 'flex', gap: '10px' }}>
              <button className="btn-secondary" onClick={handleCopy}>
                <Copy size={16} /> {copied ? '복사됨!' : '코드 복사'}
              </button>
              <button className="btn-secondary" onClick={() => setJsonInput(templates.openai)}>
                <RotateCcw size={16} /> 초기화
              </button>
            </div>
          </div>

        </div>

        {/* Right Side: Parsed View & Educational Feedback */}
        <div className="glass-panel" style={{ padding: '28px', display: 'flex', flexDirection: 'column', height: '620px' }}>
          
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px', paddingBottom: '16px', borderBottom: '1px solid var(--border-color)' }}>
            <span style={{ fontWeight: 800, fontSize: '1.05rem', color: '#0f172a', display: 'flex', alignItems: 'center', gap: '10px' }}>
              🔍 {isValid ? '파싱 결과 & 트리 뷰' : '에러 진단 리포트'}
            </span>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontWeight: 500 }}>
              {isValid ? '정상 파싱됨' : '문법 검사 실패'}
            </span>
          </div>

          <div style={{ flex: 1, overflowY: 'auto' }}>
            {isValid ? (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div style={{ background: '#d1fae5', border: '1px solid #a7f3d0', padding: '18px', borderRadius: '12px' }}>
                  <h4 style={{ color: '#047857', fontSize: '0.95rem', fontWeight: 800, marginBottom: '6px' }}>
                    ✅ 유효한 JSON 포맷입니다!
                  </h4>
                  <p style={{ fontSize: '0.88rem', color: '#065f46' }}>
                    루트 데이터 타입: <strong>{Array.isArray(parsedJson) ? 'Array (배열)' : typeof parsedJson}</strong> 
                    {typeof parsedJson === 'object' && parsedJson !== null && !Array.isArray(parsedJson) && (
                      <span> ({Object.keys(parsedJson).length}개의 Key 소유)</span>
                    )}
                  </p>
                </div>

                {/* Parsed Output Display */}
                <div style={{ background: '#0f172a', padding: '20px', borderRadius: '12px', border: '1px solid #1e293b' }}>
                  <h5 style={{ fontSize: '0.85rem', color: '#94a3b8', marginBottom: '10px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Javascript Object Tree
                  </h5>
                  <pre className="code-font" style={{ fontSize: '0.9rem', color: '#a7f3d0', whiteSpace: 'pre-wrap', wordBreak: 'break-word', lineHeight: 1.6 }}>
                    {JSON.stringify(parsedJson, null, 2)}
                  </pre>
                </div>

                {/* Educational JSON Key Rules Reminder */}
                <div style={{ background: '#f3e8ff', border: '1px solid #e9d5ff', padding: '18px', borderRadius: '12px' }}>
                  <h5 style={{ fontSize: '0.92rem', color: '#6d28d9', fontWeight: 800, marginBottom: '6px' }}>
                    💡 발표 팁 (Presentation Tip)
                  </h5>
                  <p style={{ fontSize: '0.88rem', color: '#4c1d95', lineHeight: 1.6 }}>
                    LLM API 호출 시 <code>"stream": true</code> 옵션을 주면 Server-Sent Events(SSE)를 통해 JSON 기반의 스트리밍 토큰 조각들이 전송됩니다.
                  </p>
                </div>

              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                
                {/* Error Banner */}
                <div style={{ background: '#fee2e2', border: '1px solid #fca5a5', padding: '20px', borderRadius: '12px' }}>
                  <h4 style={{ color: '#b91c1c', fontSize: '0.98rem', fontWeight: 800, marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <AlertTriangle size={20} /> JSON 문법 에러가 발생했습니다
                  </h4>
                  <pre className="code-font" style={{ fontSize: '0.88rem', color: '#7f1d1d', whiteSpace: 'pre-wrap', background: '#fef2f2', padding: '14px', borderRadius: '8px', border: '1px solid #fecaca' }}>
                    {errorMessage}
                  </pre>
                </div>

                {/* Checklist to Fix Error */}
                <div style={{ background: '#fef3c7', border: '1px solid #fde68a', padding: '20px', borderRadius: '12px' }}>
                  <h5 style={{ fontSize: '0.95rem', color: '#b45309', fontWeight: 800, marginBottom: '10px' }}>
                    🛠️ 흔히 발생하는 JSON 에러 체크리스트
                  </h5>
                  <ul style={{ fontSize: '0.88rem', color: '#78350f', display: 'flex', flexDirection: 'column', gap: '8px', paddingLeft: '20px', lineHeight: 1.6 }}>
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
