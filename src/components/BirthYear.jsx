import React, { useState } from 'react';

const BirthYear = ({ formData, updateFormData, nextStep, prevStep }) => {
    const [selectedYear, setSelectedYear] = useState(formData.birthYear || '1956');
    const [showDropdown, setShowDropdown] = useState(false);

    const years = ['1954', '1955', '1956', '1957', '1958'];

    const handleConfirm = () => {
        updateFormData({ birthYear: selectedYear });
        setShowDropdown(false);
        nextStep();
    };

    return (
        <div className="step-container">
            <button className="back-btn" onClick={prevStep}>←</button>

            <h2>출생년도를 선택해 주세요.</h2>

            <div className="dropdown-container">
                <button
                    className="dropdown-btn"
                    onClick={() => setShowDropdown(!showDropdown)}
                >
                    {selectedYear}년 ▼
                </button>

                {showDropdown && (
                    <div className="dropdown-menu">
                        {years.map(year => (
                            <div
                                key={year}
                                className={`dropdown-item ${selectedYear === year ? 'selected' : ''}`}
                                onClick={() => setSelectedYear(year)}
                            >
                                {year}
                            </div>
                        ))}
                        <button className="confirm-btn" onClick={handleConfirm}>
                            확인
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default BirthYear;
