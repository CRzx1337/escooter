import React, { useState } from 'react';

export default function Calculator() {
  const [voltage, setVoltage] = useState(36);
  const [current, setCurrent] = useState(15);
  const [capacity, setCapacity] = useState(10);

  const power = voltage * current;
  const range = (capacity * voltage * 0.8) / (power / 20); // Rough estimation

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Power & Range Calculator</h1>
      
      <div className="bg-white p-6 rounded-lg shadow-md space-y-6">
        <InputField
          label="Battery Voltage (V)"
          value={voltage}
          onChange={setVoltage}
          min={24}
          max={100}
        />
        <InputField
          label="Maximum Current (A)"
          value={current}
          onChange={setCurrent}
          min={5}
          max={50}
        />
        <InputField
          label="Battery Capacity (Ah)"
          value={capacity}
          onChange={setCapacity}
          min={5}
          max={30}
        />

        <div className="border-t pt-6 mt-6">
          <ResultField label="Power Output" value={`${power}W`} />
          <ResultField label="Estimated Range" value={`${range.toFixed(1)}km`} />
        </div>
      </div>
    </div>
  );
}

function InputField({ label, value, onChange, min, max }: {
  label: string;
  value: number;
  onChange: (value: number) => void;
  min: number;
  max: number;
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full"
      />
      <div className="text-right text-sm text-gray-600">{value}</div>
    </div>
  );
}

function ResultField({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between items-center mb-2">
      <span className="font-medium">{label}:</span>
      <span className="text-lg text-indigo-600 font-semibold">{value}</span>
    </div>
  );
}