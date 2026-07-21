import React, { useState } from 'react';
import { HelpCircle, CheckCircle2, XCircle, RotateCcw, Award, Sparkles } from 'lucide-react';

export default function QuizSection() {
  const quizQuestions = [
    {
      id: 1,
      question: '다음 중 올바른 문법의 JSON 데이터는 무엇인가요?',
      options: [
        "{ model: 'gpt-4o', temperature: 0.7 }",
        '{ "model": "gpt-4o", "temperature": 0.7, }',
        '{ "model": "gpt-4o", "temperature": 0.7 }',
        '{ "model": "gpt-4o"; "temperature": 0.7 }'
      ],
      correctAnswer: 2,
      explanation: 'JSON의 키(Key)와 문자열 값은 반드시 큰따옴표("")를 써야 하며, 마지막 요소 뒤에는 콤마(,)를 붙일 수 없습니다.'
    },
    {
      id: 2,
      question: 'AI System Prompt 작성 시 마크다운(.md) 형식을 선호하는 핵심 이유는 무엇인가요?',
      options: [
        '파일 용량이 가장 크기 때문에',
        '제목(#), 목록(-), 코드블록(```)으로 지시사항을 구조화하여 AI의 환각(Hallucination)을 줄여주기 때문에',
        '마크다운만 사용하면 백엔드 서버가 필요 없기 때문에',
        'JSON 포맷으로 변환이 불가능하기 때문에'
      ],
      correctAnswer: 1,
      explanation: '마크다운은 특수문자로 제목, 강조, 목록, 계층을 명확히 구분해주므로 LLM이 프롬프트를 훨씬 더 규칙적으로 인식합니다.'
    },
    {
      id: 3,
      question: 'ChatGPT처럼 답변 글자가 한 글자씩 또박또박 나타나는 UI를 개발하기 위해 필요한 프론트엔드/백엔드 기술은?',
      options: [
        '단방향 동기 파일 다운로드',
        '서버 전달 이벤트 (SSE, Server-Sent Events) 또는 WebSocket 기반의 실시간 스트리밍(Streaming)',
        '매 0.1초마다 전체 페이지를 새로고침(F5)',
        '데이터베이스 정기 백업'
      ],
      correctAnswer: 1,
      explanation: 'LLM이 토큰을 생성할 때마다 서버가 HTTP Streaming / SSE 기술로 전달하여 사용자에게 반응 속도를 극대화합니다.'
    },
    {
      id: 4,
      question: 'AI 서비스를 만들 때 프론트엔드가 아닌 백엔드(Backend) 서버에서 OpenAI API를 호출해야 하는 가장 중요한 이유는?',
      options: [
        '프론트엔드에서는 텍스트 출력이 안 되어서',
        '비밀스러운 AI API Key가 브라우저에 노출되는 보안 위험을 막기 위해서',
        '백엔드를 쓰지 않으면 인터넷 연결이 끊겨서',
        '백엔드만 마크다운을 해석할 수 있어서'
      ],
      correctAnswer: 1,
      explanation: '프론트엔드 코드(JavaScript)에 API Key를 넣으면 누구나 개발자 도구로 탈취할 수 있습니다. API Key는 안전한 백엔드 환경에서만 다뤄야 합니다.'
    },
    {
      id: 5,
      question: 'RAG(검색 증강 생성) 시스템에서 문장의 "의미적 유사도"를 기반으로 최신 문서를 검색하기 위해 사용되는 DB는?',
      options: [
        'Vector Database (벡터 데이터베이스)',
        '엑셀 (Microsoft Excel)',
        'FTP 파일 서버',
        'DNS 도메인 서버'
      ],
      correctAnswer: 0,
      explanation: 'Vector DB(Chroma, Pinecone 등)는 텍스트를 고차원 숫자 배열(Vector)인 임베딩으로 전환하여 의미가 가까운 데이터를 속도감 있게 검색합니다.'
    }
  ];

  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const handleSelectOption = (questionId, optionIdx) => {
    if (showResults) return;
    setSelectedAnswers(prev => ({ ...prev, [questionId]: optionIdx }));
  };

  const calculateScore = () => {
    let score = 0;
    quizQuestions.forEach(q => {
      if (selectedAnswers[q.id] === q.correctAnswer) {
        score += 1;
      }
    });
    return score;
  };

  const handleReset = () => {
    setSelectedAnswers({});
    setShowResults(false);
  };

  const score = calculateScore();

  return (
    <div className="animate-fade-in" style={{ paddingBottom: '40px' }}>
      
      {/* Top Banner */}
      <div className="glass-panel" style={{ padding: '24px', marginBottom: '24px', background: 'var(--gradient-card)' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
              <span className="badge badge-amber">Self Check Quiz</span>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>스터디 복습 퀴즈</span>
            </div>
            <h2 style={{ fontSize: '1.6rem', fontWeight: 800 }}>
              💡 <span className="gradient-text">AI 용어 & 데이터 포맷 점검 퀴즈</span>
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '4px' }}>
              오늘 발표한 5가지 주제(JSON, MD, Frontend, Backend, Vector DB)에 대한 퀴즈를 풀며 이해도를 확인하세요.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '12px' }}>
            {!showResults ? (
              <button 
                className="btn-primary" 
                onClick={() => setShowResults(true)}
                disabled={Object.keys(selectedAnswers).length < quizQuestions.length}
                style={{ opacity: Object.keys(selectedAnswers).length < quizQuestions.length ? 0.6 : 1 }}
              >
                <Award size={18} /> 정답 채점하기
              </button>
            ) : (
              <button className="btn-secondary" onClick={handleReset}>
                <RotateCcw size={16} /> 퀴즈 다시 풀기
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Score Summary Box (when results shown) */}
      {showResults && (
        <div className="glass-panel" style={{
          padding: '24px',
          marginBottom: '24px',
          background: score === 5 ? 'rgba(16, 185, 129, 0.12)' : 'rgba(139, 92, 246, 0.12)',
          border: `1px solid ${score === 5 ? '#10b981' : 'var(--accent-purple)'}`,
          textAlign: 'center'
        }}>
          <Sparkles size={36} color={score === 5 ? '#34d399' : '#c084fc'} style={{ margin: '0 auto 8px auto' }} />
          <h3 style={{ fontSize: '1.5rem', fontWeight: 800 }}>
            총점: <span style={{ color: score === 5 ? '#34d399' : '#c084fc' }}>{score} / {quizQuestions.length}점</span>
          </h3>
          <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', marginTop: '4px' }}>
            {score === 5 ? '🎉 완벽합니다! AI 스터디 발표를 주도할 준비가 완료되었습니다!' : '👍 수고하셨습니다! 아래 해설을 읽어보며 핵심 개념을 다시 한번 복습하세요.'}
          </p>
        </div>
      )}

      {/* Questions List */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {quizQuestions.map((q, qIndex) => {
          const isAnswered = selectedAnswers[q.id] !== undefined;
          const isCorrect = selectedAnswers[q.id] === q.correctAnswer;

          return (
            <div key={q.id} className="glass-panel" style={{ padding: '24px' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '16px' }}>
                <span style={{
                  width: '28px',
                  height: '28px',
                  borderRadius: '50%',
                  background: 'var(--gradient-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 800,
                  fontSize: '0.85rem',
                  flexShrink: 0
                }}>
                  {qIndex + 1}
                </span>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#ffffff', lineHeight: 1.5 }}>
                  {q.question}
                </h3>
              </div>

              {/* Options */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginLeft: '40px' }}>
                {q.options.map((opt, optIdx) => {
                  const isSelected = selectedAnswers[q.id] === optIdx;
                  let bg = 'rgba(255, 255, 255, 0.03)';
                  let border = '1px solid var(--border-color)';
                  let textColor = 'var(--text-secondary)';

                  if (isSelected) {
                    bg = 'rgba(139, 92, 246, 0.15)';
                    border = '1px solid var(--accent-purple)';
                    textColor = '#ffffff';
                  }

                  if (showResults) {
                    if (optIdx === q.correctAnswer) {
                      bg = 'rgba(16, 185, 129, 0.2)';
                      border = '1px solid #10b981';
                      textColor = '#34d399';
                    } else if (isSelected && !isCorrect) {
                      bg = 'rgba(239, 68, 68, 0.2)';
                      border = '1px solid #ef4444';
                      textColor = '#f87171';
                    }
                  }

                  return (
                    <div
                      key={optIdx}
                      onClick={() => handleSelectOption(q.id, optIdx)}
                      style={{
                        padding: '12px 16px',
                        borderRadius: '10px',
                        background: bg,
                        border: border,
                        color: textColor,
                        fontSize: '0.92rem',
                        cursor: showResults ? 'default' : 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        transition: 'all 0.2s ease'
                      }}
                    >
                      <span>{optIdx + 1}. {opt}</span>
                      {showResults && optIdx === q.correctAnswer && <CheckCircle2 size={18} color="#34d399" />}
                      {showResults && isSelected && !isCorrect && <XCircle size={18} color="#f87171" />}
                    </div>
                  );
                })}
              </div>

              {/* Explanation (when results shown) */}
              {showResults && (
                <div style={{
                  marginTop: '16px',
                  marginLeft: '40px',
                  padding: '12px 16px',
                  background: 'rgba(0, 0, 0, 0.3)',
                  borderRadius: '8px',
                  borderLeft: `4px solid ${isCorrect ? '#10b981' : '#f59e0b'}`,
                  fontSize: '0.88rem',
                  color: '#e2e8f0',
                  lineHeight: 1.5
                }}>
                  <strong style={{ color: isCorrect ? '#34d399' : '#fbbf24' }}>
                    {isCorrect ? '✅ 정답입니다!' : '💡 정답 해설:'}
                  </strong> {q.explanation}
                </div>
              )}

            </div>
          );
        })}
      </div>

    </div>
  );
}
