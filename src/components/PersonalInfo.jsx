import React, { useState, useEffect } from 'react';
import { useSpeech } from '../hooks/useSpeech';

const PersonalInfo = ({ formData, updateFormData, nextStep }) => {
    const [name, setName] = useState(formData.name);
    const [gender, setGender] = useState(formData.gender);
    const { speak, stop, isSpeaking, isSupported } = useSpeech();

    // 컴포넌트 마운트 시 안내 음성 재생
    useEffect(() => {
        if (isSupported) {
            speak("고객님의 정보를 입력해 주세요", {
                rate: 0.9, // 조금 느리게
                pitch: 1.1 // 조금 높게
            });
        }
    }, [speak, isSupported]);

    const handleNext = () => {
        stop(); // 현재 음성 중지
        updateFormData({ name, gender });
        nextStep();
    };

    const speakText = (text) => {
        speak(text);
    };

    return (
        <div className="step-container">
            <div className="tts-controls">
                <button
                    className="tts-btn"
                    onClick={() => speakText("고객님의 정보를 입력해 주세요")}
                    disabled={isSpeaking}
                >
                    🔊 안내음성
                </button>
                {isSpeaking && (
                    <button className="tts-stop-btn" onClick={stop}>
                        ⏹️ 정지
                    </button>
                )}
            </div>

            <h2 onClick={() => speakText("고객님의 정보를 입력해 주세요")}>
                고객님의 정보를 입력해 주세요.
            </h2>

            <div className="form-group">
                <label onClick={() => speakText("이름을 입력하세요")}>이름</label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="김은희"
                    onFocus={() => speakText("이름을 입력하세요")}
                />
            </div>

            <div className="form-group">
                <label onClick={() => speakText("성별을 선택하세요")}>성별</label>
                <div className="gender-buttons">
                    <button
                        className={gender === '여자' ? 'selected' : ''}
                        onClick={() => {
                            setGender('여자');
                            speakText("여자를 선택했습니다");
                        }}
                    >
                        여자
                    </button>
                    <button
                        className={gender === '남자' ? 'selected' : ''}
                        onClick={() => {
                            setGender('남자');
                            speakText("남자를 선택했습니다");
                        }}
                    >
                        남자
                    </button>
                </div>
            </div>

            <div className="form-group">
                <label>출생년도</label>
                <select value={formData.birthYear} disabled>
                    <option>1956년</option>
                </select>
            </div>

            <button
                className="next-btn"
                onClick={handleNext}
                disabled={!name || !gender}
                onMouseEnter={() => name && gender && speakText("다음 단계로 이동")}
            >
                다음
            </button>
        </div>
    );
};

export default PersonalInfo;


// import React, { useState } from 'react';
//
// const PersonalInfo = ({ formData, updateFormData, nextStep }) => {
//     const [name, setName] = useState(formData.name);
//     const [gender, setGender] = useState(formData.gender);
//
//     const handleNext = () => {
//         updateFormData({ name, gender });
//         nextStep();
//     };
//
//     return (
//         <div className="step-container">
//             <h2>고객님의 정보를 입력해 주세요.</h2>
//
//             <div className="form-group">
//                 <label>이름</label>
//                 <input
//                     type="text"
//                     value={name}
//                     onChange={(e) => setName(e.target.value)}
//                     placeholder="김은희"
//                 />
//             </div>
//
//             <div className="form-group">
//                 <label>성별</label>
//                 <div className="gender-buttons">
//                     <button
//                         className={gender === '여자' ? 'selected' : ''}
//                         onClick={() => setGender('여자')}
//                     >
//                         여자
//                     </button>
//                     <button
//                         className={gender === '남자' ? 'selected' : ''}
//                         onClick={() => setGender('남자')}
//                     >
//                         남자
//                     </button>
//                 </div>
//             </div>
//
//             <div className="form-group">
//                 <label>출생년도</label>
//                 <select value={formData.birthYear} disabled>
//                     <option>1956년</option>
//                 </select>
//             </div>
//
//             <button
//                 className="next-btn"
//                 onClick={handleNext}
//                 disabled={!name || !gender}
//             >
//                 다음
//             </button>
//         </div>
//     );
// };
//
// export default PersonalInfo;
