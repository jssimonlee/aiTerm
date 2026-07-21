import React, { useState } from 'react';
import { Code, CheckCircle, AlertTriangle, Copy, RotateCcw, Wrench, Sparkles, FileCode, HelpCircle } from 'lucide-react';

export default function JsonLab() {
  const templates = {
    openai: `{
  "보낸사람": "스마트폰 앱",
  "받는사람": "ChatGPT AI",
  "요청내용": "오늘 스터디 주제인 JSON을 한 문장으로 요약해줘!",
  "옵션": {
    "친절도": "최상",
    "답변언어": "한국어"
  }
}`,
    structured: `{
  "작업": "AI 뉴스 요약",
  "입력문장": "AI 용어 스터디 발표회에서 초보자용 비유 설명회가 큰 호응을 얻었습니다.",
  "AI추출결과": {
    "요약": "초보자 AI 스터디 발표 성공",
    "분위기": "매우 긍정적",
    "키워드": ["AI", "초보자", "스터디", "비유"]
  }
}`,
    rag: `{
  "문서제목": "AI 스터디 가이드",
  "페이지": 1,
  "내용": "JSON은 앱 ↔ AI 간 통신용 표준 메모지입니다.",
  "메타데이터": {
    "작성자": "스터디 리더",
    "카테고리": "기초 용어",
    "중요도": 5
  }
}`,
    broken: `{
  보낸사람: "스마트폰 앱",
  "받는사람": "ChatGPT",
  "질문": "JSON 에러 고치기 문제!",
  "온도": 0.7,
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
              <span className="badge badge-purple">초보자 실습</span>
              <span style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', fontWeight: 500 }}>실시간 JSON 통신 메모지 에디터</span>
            </div>
            <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#0f172a' }}>
              🧪 <span className="gradient-text">JSON 실습실</span> (JSON Lab)
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.98rem', marginTop: '6px' }}>
              스마트폰 앱과 AI가 대화할 때 쓰는 <strong>'JSON 통신 메모지'</strong>를 직접 수정하고 검증해보세요!
            </p>
          </div>

          {/* Preset Template Selectors */}
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <button className="btn-secondary" onClick={() => setJsonInput(templates.openai)}>
              <FileCode size={16} /> 앱 ➔ AI 대화 메모
            </button>
            <button className="btn-secondary" onClick={() => setJsonInput(templates.structured)}>
              <Sparkles size={16} /> AI 추출 결과 메모
            </button>
            <button className="btn-secondary" onClick={() => setJsonInput(templates.rag)}>
              <Code size={16} /> 문서 저장 메모
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

      {/* Editor & Viewer Split Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(350px, 1fr) minmax(350px, 1fr)', gap: '32px' }}>
        
        {/* Left Side: Code Input Area */}
        <div className="glass-panel" style={{ padding: '28px', display: 'flex', flexDirection: 'column', height: '620px' }}>
          
          {/* Header Controls */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px', paddingBottom: '16px', borderBottom: '1px solid var(--border-color)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <Code size={20} color="var(--accent-purple)" />
              <span style={{ fontWeight: 800, fontSize: '1.05rem', color: '#0f172a' }}>JSON 메모지 입력란</span>
            </div>

            {/* Validation Badge */}
            <div>
              {isValid ? (
                <span className="badge badge-green" style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
                  <CheckCircle size={14} /> 올바른 JSON 규격
                </span>
              ) : (
                <span className="badge badge-pink" style={{ display: 'flex', gap: '6px', alignItems: 'center', background: '#fee2e2', color: '#dc2626', border: '1px solid #fca5a5' }}>
                  <AlertTriangle size={14} /> 문법 에러 발견!
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
                예쁘게 정렬하기
              </button>
              <button className="btn-secondary" onClick={handleMinify} disabled={!isValid} style={{ opacity: isValid ? 1 : 0.5 }}>
                한 줄로 압축하기
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
              🔍 {isValid ? '컴퓨터가 해석한 결과 (트리 뷰)' : '에러 진단 리포트'}
            </span>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontWeight: 500 }}>
              {isValid ? '정상 수신됨' : '해석 불가'}
            </span>
          </div>

          <div style={{ flex: 1, overflowY: 'auto' }}>
            {isValid ? (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div style={{ background: '#d1fae5', border: '1px solid #a7f3d0', padding: '18px', borderRadius: '12px' }}>
                  <h4 style={{ color: '#047857', fontSize: '0.95rem', fontWeight: 800, marginBottom: '6px' }}>
                    ✅ 컴퓨터가 완벽하게 해석할 수 있는 JSON입니다!
                  </h4>
                  <p style={{ fontSize: '0.88rem', color: '#065f46' }}>
                    이 메모지는 <strong>{Object.keys(parsedJson).length}개</strong>의 이름표(Key)를 가지고 있습니다.
                  </p>
                </div>

                {/* Parsed Output Display */}
                <div style={{ background: '#0f172a', padding: '20px', borderRadius: '12px', border: '1px solid #1e293b' }}>
                  <h5 style={{ fontSize: '0.85rem', color: '#94a3b8', marginBottom: '10px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    해석된 데이터 구조
                  </h5>
                  <pre className="code-font" style={{ fontSize: '0.9rem', color: '#a7f3d0', whiteSpace: 'pre-wrap', wordBreak: 'break-word', lineHeight: 1.6 }}>
                    {JSON.stringify(parsedJson, null, 2)}
                  </pre>
                </div>

                {/* Educational JSON vs DB Distinction */}
                <div style={{ background: '#f3e8ff', border: '1px solid #e9d5ff', padding: '18px', borderRadius: '12px' }}>
                  <h5 style={{ fontSize: '0.95rem', color: '#6d28d9', fontWeight: 800, marginBottom: '6px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <HelpCircle size={18} /> JSON과 DB(데이터베이스)의 결정적 차이!
                  </h5>
                  <p style={{ fontSize: '0.88rem', color: '#4c1d95', lineHeight: 1.6 }}>
                    • <strong>JSON</strong>: 통신할 때 데이터를 포장하는 <u>[택배 상자/메모지]</u>입니다.<br/>
                    • <strong>DB</strong>: 수백만 개의 택배 상자를 안전하게 보관하고 필요할 때 찾아내는 <u>[거대한 도서관 금고]</u>입니다.
                  </p>
                </div>

              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                
                {/* Error Banner */}
                <div style={{ background: '#fee2e2', border: '1px solid #fca5a5', padding: '20px', borderRadius: '12px' }}>
                  <h4 style={{ color: '#b91c1c', fontSize: '0.98rem', fontWeight: 800, marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <AlertTriangle size={20} /> 컴퓨터가 메모지를 해석하지 못했습니다!
                  </h4>
                  <pre className="code-font" style={{ fontSize: '0.88rem', color: '#7f1d1d', whiteSpace: 'pre-wrap', background: '#fef2f2', padding: '14px', borderRadius: '8px', border: '1px solid #fecaca' }}>
                    {errorMessage}
                  </pre>
                </div>

                {/* Checklist to Fix Error */}
                <div style={{ background: '#fef3c7', border: '1px solid #fde68a', padding: '20px', borderRadius: '12px' }}>
                  <h5 style={{ fontSize: '0.95rem', color: '#b45309', fontWeight: 800, marginBottom: '10px' }}>
                    🛠️ 초보자가 자주 하는 3가지 JSON 실수
                  </h5>
                  <ul style={{ fontSize: '0.88rem', color: '#78350f', display: 'flex', flexDirection: 'column', gap: '8px', paddingLeft: '20px', lineHeight: 1.6 }}>
                    <li><strong>1. 이름표에 큰따옴표 누락:</strong> <code>보낸사람: "앱"</code> ➔ <code>"보낸사람": "앱"</code></li>
                    <li><strong>2. 마지막 쉼표(,) 남겨둠:</strong> 항목이 끝났는데 마지막에 <code>,</code>를 붙이면 에러가 납니다.</li>
                    <li><strong>3. 작은따옴표(') 사용:</strong> JSON은 꼭 큰따옴표(<code>"</code>)만 써야 합니다!</li>
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
