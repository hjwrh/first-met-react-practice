import React, { useState } from "react";

function SignUp (props){
    const [name, setName] = useState('');
    const [gender, setGender] = useState('남자');


    const handleChangeName = (e) => {
        setName(e.target.value);
    };

    const handleSubmit = (e) => {
        alert(`이름 : ${name} , 성별 : ${gender} `);
        e.preventDefault();
    };

    const handleGender = (e) => {
        setGender(e.target.value);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                이름:
                <input type="text" value={name} onChange={handleChangeName}/>
            </label>
            <br />
            <label>
                성별:
                <select value={gender} onChange={handleGender}>
                    <option value="남자">남자</option>
                    <option value="여자">여자</option>
                </select>
            </label>
            <button>제출</button>
        </form>
    );
}

export  default SignUp;