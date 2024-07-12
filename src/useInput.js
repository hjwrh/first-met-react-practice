import { useState } from "react";

export function useInput(initialValue, inputCallBack) {
    const [inputValue, setInputValue] = useState(initialValue);

    const handleChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleSubmit = () => {
        alert(inputValue);
        setInputValue('');
    };

    const handleCallBack = () => {
        inputCallBack('콜백함수 실행');
    }
  
    return [inputValue, handleChange, handleSubmit, handleCallBack];
}