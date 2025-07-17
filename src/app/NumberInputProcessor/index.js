"use client";
import React, { useState } from "react";

const NumberInputProcessor = () => {
  const [inputValue, setInputValue] = useState("");
  const [finalResult, setFinalResult] = useState(null);
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleProcess = () => {
    setError("");
    const parts = inputValue.trim().split(/\s+/).map(Number);

    if (parts.length < 3 || parts.some(isNaN)) {
      setError("❌ Please enter at least three valid numbers separated by spaces.");
      setFinalResult(null);
      return;
    }

    const [a, b, c] = parts;
    const res1 = a * b;
    const res2 = Math.round(res1 * 0.12); // 12% rounded
    const res3 = b * c;
    const res4 = res1 + res3;
    const final = res4 - res2;

    setFinalResult(final);
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Space-Separated Number Processor</h2>
      <input
        type="text"
        placeholder="e.g., 522 5 170"
        value={inputValue}
        onChange={handleInputChange}
        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-400"
      />
      <button
        onClick={handleProcess}
        className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
      >
        Calculate
      </button>

      {error && <p className="text-red-500 mt-3">{error}</p>}

      {finalResult !== null && (
        <div className="mt-6 bg-gray-100 p-4 rounded-md">
          <h3 className="text-lg font-medium">Final Result:</h3>
          <p className="text-2xl font-bold text-green-600">{finalResult}</p>
        </div>
      )}
    </div>
  );
};

export default NumberInputProcessor;
