import React, { useState, useRef, useEffect } from 'react';
import './MultiSelect.css'; 

const MultiSelect = ({ options, selectedOptions, onSelectedOptionsChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = (event) => {
    event.stopPropagation();
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    const isSelected = selectedOptions.some((selectedOption) => selectedOption.id === option.id);

    const updatedOptions = isSelected
      ? selectedOptions.filter((selectedOption) => selectedOption.id !== option.id)
      : [...selectedOptions, { ...option, startTime: '', endTime: '' }];

    onSelectedOptionsChange(updatedOptions);
  };

  const handleTimeChange = (optionId, field, value) => {
    const updatedOptions = selectedOptions.map((option) => {
      if (option.id === optionId) {
        return { ...option, [field]: value };
      }
      return option;
    });

    onSelectedOptionsChange(updatedOptions);
  };

  const handleDocumentClick = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleDocumentClick);
    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, []);

  return (
    <div className="multi-select col-sm-12">
      <div className="select-box" onClick={toggleDropdown}>
        {selectedOptions.length === 0 ? 'Select' : selectedOptions.map((option) => (
          <span key={option.id} className="token">
            {option.label} <button onClick={() => handleOptionClick(option)}>x</button>
          </span>
        ))}
      </div>
      {isOpen && (
        <div ref={dropdownRef} className="daysList col-sm-8">
          {options.map((option) => (
            <div key={option.id} className="dayOption">
              <input
                type="checkbox"
                checked={selectedOptions.some((selectedOption) => selectedOption.id === option.id)}
                onChange={() => handleOptionClick(option)}
              />
              <div className="optionLabel">{option.label}</div>
              {selectedOptions.some((selectedOption) => selectedOption.id === option.id) && (
                <div className="time-input">
                  {/* <label>Start Time:</label> */}
                  <input
                    type="time"
                    value={option.startTime} 
                    onChange={(e) => handleTimeChange(option.id, 'startTime', e.target.value)}
                  />
                  {/* <label>End Time:</label> */}
                  <input
                    type="time"
                    value={option.endTime}
                    onChange={(e) => handleTimeChange(option.id, 'endTime', e.target.value)}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MultiSelect;