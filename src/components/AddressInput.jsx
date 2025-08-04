import React, { useState } from 'react';

const AddressInput = ({ formData, updateFormData, nextStep, prevStep }) => {
    const [address, setAddress] = useState(formData.address);

    const handleNext = () => {
        updateFormData({ address: '충청남도 홍성군' });
        nextStep();
    };

    return (
        <div className="step-container">
            <button className="back-btn" onClick={prevStep}>←</button>

            <h2>거주하고 계신 주소를 입력해 주세요.</h2>

            <div className="search-container">
                <input
                    type="text"
                    placeholder="주소 검색하기"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                />
                <button className="search-btn">🔍</button>
            </div>

            <button
                className="next-btn"
                onClick={handleNext}
                disabled={!address}
            >
                다음
            </button>
        </div>
    );
};

export default AddressInput;
