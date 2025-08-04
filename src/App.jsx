import React, { useState } from 'react';
import './App.css';
import PersonalInfo from './components/PersonalInfo.jsx';
import BirthYear from './components/BirthYear.jsx';
import AddressInput from './components/AddressInput.jsx';
import AddressConfirm from './components/AddressConfirm.jsx';
import FamilyInfo from './components/FamilyInfo.jsx';

function App() {
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState({
        name: '',
        gender: '',
        birthYear: '',
        address: '',
        isOnePerson: null,
        hasDependent: null,
        isLowIncome: null
    });

    const nextStep = () => setCurrentStep(currentStep + 1);
    const prevStep = () => setCurrentStep(currentStep - 1);

    const updateFormData = (data) => {
        setFormData({ ...formData, ...data });
    };

    const renderStep = () => {
        switch(currentStep) {
            case 1:
                return <PersonalInfo formData={formData} updateFormData={updateFormData} nextStep={nextStep} />;
            case 2:
                return <BirthYear formData={formData} updateFormData={updateFormData} nextStep={nextStep} prevStep={prevStep} />;
            case 3:
                return <AddressInput formData={formData} updateFormData={updateFormData} nextStep={nextStep} prevStep={prevStep} />;
            case 4:
                return <AddressConfirm formData={formData} updateFormData={updateFormData} nextStep={nextStep} prevStep={prevStep} />;
            case 5:
                return <FamilyInfo formData={formData} updateFormData={updateFormData} prevStep={prevStep} />;
            default:
                return <PersonalInfo formData={formData} updateFormData={updateFormData} nextStep={nextStep} />;
        }
    };

    return (
        <div className="App">
            <div className="mobile-container">
                <div className="status-bar">
                    <span>9:41</span>
                    <div className="signal-battery">
                        <span>●●●</span>
                        <span>📶</span>
                        <span>🔋</span>
                    </div>
                </div>
                <div className="progress-bar">
                    <div className="progress" style={{width: `${(currentStep / 5) * 100}%`}}></div>
                </div>
                {renderStep()}
            </div>
        </div>
    );
}

export default App;


// import './App.css'
// import { Link, Route, Routes } from "react-router-dom";
// import React, { useState } from "react";
// import WritePage from "./pages/Write.jsx";
// import MainPage from "./pages/Main.jsx";
// import DetailsPage from "./pages/Details.jsx";
// import EditPage from "./pages/Edit.jsx";
//
// const initialPosts = [
//     {
//         title: "남자 코트 추천",
//         author: "HNU_VeLoG",
//         date: "2024년 7월 15일",
//         tags: ["패션", "추천", "코트"],
//         content: "코트 추천 포스트 내용...",
//     },
// ];
//
// export default function App() {
//     const [posts, setPosts] = useState(initialPosts);
//
//     const handleAdd = (newPost) => {
//         setPosts(prev => [...prev, newPost]);
//     };
//
//     const handleEdit = (id, updatedPost) => {
//         setPosts(prev =>
//             prev.map((post, idx) => (idx === Number(id) ? updatedPost : post))
//         );
//     };
//
//     return (
//         <>
//             <div className="header">
//                 <Link to={'/'}>
//                     <p className="home-button">HNU_VeLoG</p>
//                 </Link>
//                 <Link to={'/write'}>
//                     <p className="write-button">WRITE</p>
//                 </Link>
//             </div>
//
//             <Routes>
//                 <Route path='/' element={<MainPage posts={posts} />} />
//                 <Route path='/write' element={<WritePage onAdd={handleAdd} />} />
//                 <Route path='/details/:id' element={<DetailsPage posts={posts} />} />
//                 <Route path='/edit/:id' element={<EditPage posts={posts} onEdit={handleEdit} />} />
//                 <Route path='*' element={<MainPage posts={posts} />} />
//             </Routes>
//         </>
//     );
// }
