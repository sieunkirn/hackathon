import React, { useState } from 'react';

const AddressConfirm = ({ formData, updateFormData, nextStep, prevStep }) => {
    const [confirmed, setConfirmed] = useState(null);

    const handleNext = () => {
        updateFormData({ addressConfirmed: confirmed });
        nextStep();
    };

    return (
        <div className="step-container">
            <button className="back-btn" onClick={prevStep}>←</button>

            <h2>거주하고 계신 주소를 입력해 주세요.</h2>

            <div className="search-container">
                <input
                    type="text"
                    placeholder="주소 다시 검색하기"
                    value="충청남도 홍성군"
                    readOnly
                />
                <button className="search-btn">🔍</button>
            </div>

            <div className="address-result">
                <p><strong>거주지</strong></p>
                <p>충청남도 홍성군</p>
            </div>

            <div className="question">
                <p>해당 지역에 거주하고 계신가요?</p>
                <div className="yes-no-buttons">
                    <button
                        className={confirmed === true ? 'selected' : ''}
                        onClick={() => setConfirmed(true)}
                    >
                        예
                    </button>
                    <button
                        className={confirmed === false ? 'selected' : ''}
                        onClick={() => setConfirmed(false)}
                    >
                        아니요
                    </button>
                </div>
            </div>

            <button
                className="next-btn"
                onClick={handleNext}
                disabled={confirmed === null}
            >
                다음
            </button>
        </div>
    );
};

export default AddressConfirm;
