"use client";
import React, { useState } from "react";

const NumberInputProcessor = () => {
  const [inputValue, setInputValue] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleProcess = () => {
    setError("");
    const parts = inputValue.trim().split(/\s+/).map(Number);

    if (parts.length < 3 || parts.some(isNaN)) {
      setError("❌ Please enter at least three valid numbers separated by spaces.");
      setResult(null);
      return;
    }

    const [a, b, c] = parts;
    const res1 = a * b;

    // Custom rounding of 12% of res1
    const rawRes2 = res1 * 0.12;
    const decimal = rawRes2 - Math.floor(rawRes2);
    const res2 = decimal >= 0.5 ? Math.floor(rawRes2) + 1 : Math.floor(rawRes2);

    const res3 = b * c;
    const res4 = res1 + res3;
    const final = res4 - res2;

    setResult({ res1, res2, res3, res4, final });
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Number Processor</h2>
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

      {result && (
        <div className="mt-6 bg-gray-100 p-4 rounded-md">
          <h3 className="text-lg font-medium mb-2">Results:</h3>
          <ul className="space-y-1">
            <li><span className="font-semibold">COLUMN 6:</span> {result.res1}</li>
            <li><span className="font-semibold">COLUMN 11:</span> {result.res3}</li>
            <li><span className="font-semibold">COLUMN 12:</span> {result.res4}</li>
            <li><span className="font-semibold">COLUMN 13:</span> {result.res2}</li>
            <li><span className="font-semibold">COLUMN 21:</span> {result.final}</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default NumberInputProcessor;
