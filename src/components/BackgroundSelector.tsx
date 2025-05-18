import React from 'react';
export const BackgroundSelector = ({
  backgroundColor,
  setBackgroundColor
}) => {
  const presetColors = ['#c2b8ae', '#f5f5f5', '#e6d7c3', '#d9e6f2', '#e6d7e6', '#d7e6d7' // Light green
  ];
  return <div className="mb-6">
      <label className="block text-sm font-medium mb-2">Background Color</label>
      <div className="flex items-center mb-2">
        <input type="color" value={backgroundColor} onChange={e => setBackgroundColor(e.target.value)} className="w-10 h-10 rounded border" />
        <input type="text" value={backgroundColor} onChange={e => setBackgroundColor(e.target.value)} className="ml-2 p-2 border rounded" />
      </div>
      <div className="flex flex-wrap gap-2 mt-2">
        {presetColors.map((color, index) => <button key={index} className="w-8 h-8 rounded-full border border-gray-300" style={{
        backgroundColor: color
      }} onClick={() => setBackgroundColor(color)} aria-label={`Select color ${color}`} />)}
      </div>
    </div>;
};