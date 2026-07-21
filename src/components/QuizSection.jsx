import React, { useState } from 'react';
import { HelpCircle, CheckCircle2, XCircle, RotateCcw, Award, Sparkles } from 'lucide-react';

export default function QuizSection() {
  const quizQuestions = [
    {
      id: 1,
      question: 'JSON과 DB(데이터베이스)의 결정적 차이점에 대한 설명으로 가장 올바른 것은?',
      options: [
        'JSON과 DB는 똑같은 소프트웨어이다.',
        'JSON은 앱 간 통신 시 데이터를 담는 [택배 상자/메모지]이고, DB는 수백만 개의 데이터를 안전하게 보관하는 [거대한 도서관 금고]이다.',
        'JSON은 한글만 저장하고, DB는 영어만 저장한다.',
        'JSON을 사용하면 AI가 필요 없다.'
      ],
      correctAnswer: 1,
      explanation: 'JSON은 서로 다른 프로그램(앱 ↔ AI 서버) 간에 대화하기 위한 [표준 규격 메모지/택배상자]이고, DB는 엄청난 양의 데이터를 보관하고 찾아내는 [대형 금고]입니다!'
    },
    {
      id: 2,
      question: 'AI에게 명령(프롬프트)을 내릴 때 마크다운(.md) 형식이 가장 좋다고 하는 핵심 이유는?',
      options: [
        '파일 용량이 가장 크기 때문에',
        '제목(#), 굵은 글씨(**), 코드 상자(```)로 정리해 주면 AI와 사람이 서로 가장 찰떡같이 이해할 수 있기 때문에',
        '마크다운을 쓰면 인터넷 연결 없이도 동작해서',
        '컴퓨터 전원을 꺼도 사라지지 않아서'
      ],
      correctAnswer: 1,
      explanation: '마크다운은 복잡한 프로그램 코드가 아니면서도 제목, 강조, 목록을 명확히 구분해주므로 AI와 사람 모두가 가장 잘 이해하는 표준 대화 언어입니다!'
    },
    {
      id: 3,
      question: 'ChatGPT처럼 답변 글자가 한 글자씩 또박또박 쳐지듯 나타나는 채팅 화면을 담당하는 곳은?',
      options: [
        '손님이 직접 보고 조작하는 [프론트엔드 (Frontend)] 화면',
        '비밀 키를 숨겨두는 [백엔드 (Backend)] 주방',
        '컴퓨터 중앙 처리 장치 (CPU)',
        '무선 와이파이 공유기'
      ],
      correctAnswer: 0,
      explanation: '프론트엔드는 카페의 메뉴판과 카운터처럼 손님이 눈으로 보고 조작하는 화면이며, AI의 실시간 타이핑 스트리밍 답변을 시각적으로 보여줍니다.'
    },
    {
      id: 4,
      question: 'AI 서비스를 만들 때 비싼 AI 비밀 키(API Key)를 백엔드(Backend) 서버 주방에 꼭 숨겨두어야 하는 이유는?',
      options: [
        '손님이 조작하는 웹 화면(프론트엔드)에 두면 해커나 타인이 비밀키를 몰래 훔쳐서 낭비할 수 있으므로',
        '백엔드에 두지 않으면 컴퓨터 소리가 안 나서',
        '프론트엔드에서는 한글 입력이 안 되어서',
        '백엔드가 더 비싸기 때문에'
      ],
      correctAnswer: 0,
      explanation: '프론트엔드(브라우저)에 API Key를 놓아두면 누구나 개발자 도구로 탈취할 수 있습니다. 비밀키는 안전하게 백엔드 주방 안에서만 다뤄야 합니다.'
    },
    {
      id: 5,
      question: '사용자가 "배고파!"라고 검색했을 때 "음식점 추천" 문서의 의미를 파악해서 찾아주는 AI 전용 DB는?',
      options: [
        '단어의 뜻(의미적 유사도)을 찾아주는 Vector Database (벡터 DB)',
        '마이크로소프트 엑셀',
        '컴퓨터 계산기',
        '종이 수첩'
      ],
      correctAnswer: 0,
      explanation: 'Vector DB는 텍스트의 "의미"를 숫자로 변환(임베딩)하여 키워드가 정확히 일치하지 않아도 뜻이 비슷한 문서를 AI가 검색하도록 돕습니다.'
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
    <div className="animate-fade-in" style={{ paddingBottom: '60px' }}>
      
      {/* Top Banner */}
      <div className="glass-panel" style={{ padding: '32px', marginBottom: '32px', background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '24px' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
              <span className="badge badge-amber">Self Check Quiz</span>
              <span style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', fontWeight: 500 }}>초보자 맞춤 복습 퀴즈</span>
            </div>
            <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#0f172a' }}>
              💡 <span className="gradient-text">AI 용어 & 비유 점검 퀴즈</span>
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.98rem', marginTop: '6px' }}>
              오늘 배운 5가지 개념(JSON 메모지, 마크다운, 프론트엔드, 백엔드, Vector DB)에 대한 퀴즈를 풀며 실력을 확인해보세요!
            </p>
          </div>

          <div style={{ display: 'flex', gap: '14px' }}>
            {!showResults ? (
              <button 
                className="btn-primary" 
                onClick={() => setShowResults(true)}
                disabled={Object.keys(selectedAnswers).length < quizQuestions.length}
                style={{ opacity: Object.keys(selectedAnswers).length < quizQuestions.length ? 0.6 : 1, padding: '12px 24px' }}
              >
                <Award size={20} /> 정답 채점하기
              </button>
            ) : (
              <button className="btn-secondary" onClick={handleReset} style={{ padding: '12px 24px' }}>
                <RotateCcw size={18} /> 퀴즈 다시 풀기
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Score Summary Box */}
      {showResults && (
        <div className="glass-panel" style={{
          padding: '32px',
          marginBottom: '32px',
          background: score === 5 ? '#d1fae5' : '#f3e8ff',
          border: `2px solid ${score === 5 ? '#10b981' : '#7c3aed'}`,
          textAlign: 'center'
        }}>
          <Sparkles size={40} color={score === 5 ? '#059669' : '#7c3aed'} style={{ margin: '0 auto 12px auto' }} />
          <h3 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#0f172a' }}>
            총점: <span style={{ color: score === 5 ? '#059669' : '#7c3aed' }}>{score} / {quizQuestions.length}점</span>
          </h3>
          <p style={{ fontSize: '1.05rem', color: '#334155', marginTop: '8px', fontWeight: 500 }}>
            {score === 5 ? '🎉 완벽합니다! 발표 자리에서 초보자분들에게 자신 있게 설명해주실 수 있습니다!' : '👍 수고하셨습니다! 아래 쉬운 해설을 읽어보며 핵심 개념을 복습하세요.'}
          </p>
        </div>
      )}

      {/* Questions List */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        {quizQuestions.map((q, qIndex) => {
          const isAnswered = selectedAnswers[q.id] !== undefined;
          const isCorrect = selectedAnswers[q.id] === q.correctAnswer;

          return (
            <div key={q.id} className="glass-panel" style={{ padding: '32px' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', marginBottom: '20px' }}>
                <span style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  background: 'var(--gradient-primary)',
                  color: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 800,
                  fontSize: '0.95rem',
                  flexShrink: 0
                }}>
                  {qIndex + 1}
                </span>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0f172a', lineHeight: 1.6 }}>
                  {q.question}
                </h3>
              </div>

              {/* Options */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginLeft: '48px' }}>
                {q.options.map((opt, optIdx) => {
                  const isSelected = selectedAnswers[q.id] === optIdx;
                  let bg = '#f8fafc';
                  let border = '1px solid #e2e8f0';
                  let textColor = '#334155';

                  if (isSelected) {
                    bg = '#f3e8ff';
                    border = '2px solid #7c3aed';
                    textColor = '#6d28d9';
                  }

                  if (showResults) {
                    if (optIdx === q.correctAnswer) {
                      bg = '#d1fae5';
                      border = '2px solid #059669';
                      textColor = '#065f46';
                    } else if (isSelected && !isCorrect) {
                      bg = '#fee2e2';
                      border = '2px solid #dc2626';
                      textColor = '#991b1b';
                    }
                  }

                  return (
                    <div
                      key={optIdx}
                      onClick={() => handleSelectOption(q.id, optIdx)}
                      style={{
                        padding: '14px 20px',
                        borderRadius: '12px',
                        background: bg,
                        border: border,
                        color: textColor,
                        fontSize: '0.98rem',
                        fontWeight: isSelected ? 700 : 500,
                        cursor: showResults ? 'default' : 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        transition: 'all 0.2s ease'
                      }}
                    >
                      <span>{optIdx + 1}. {opt}</span>
                      {showResults && optIdx === q.correctAnswer && <CheckCircle2 size={20} color="#059669" />}
                      {showResults && isSelected && !isCorrect && <XCircle size={20} color="#dc2626" />}
                    </div>
                  );
                })}
              </div>

              {/* Explanation */}
              {showResults && (
                <div style={{
                  marginTop: '20px',
                  marginLeft: '48px',
                  padding: '16px 20px',
                  background: '#f1f5f9',
                  borderRadius: '12px',
                  borderLeft: `5px solid ${isCorrect ? '#059669' : '#d97706'}`,
                  fontSize: '0.95rem',
                  color: '#1e293b',
                  lineHeight: 1.7
                }}>
                  <strong style={{ color: isCorrect ? '#059669' : '#b45309' }}>
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
