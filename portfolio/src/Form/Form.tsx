import React, { useState } from 'react';

function Form() {
  const [formData, setFormData] = useState({
    companyName: '',
    interviewDate: '',
    proposedPosition: '',
    email: '',
    companyWebsite: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleReset = () => {
    setFormData({
      companyName: '',
      interviewDate: '',
      proposedPosition: '',
      email: '',
      companyWebsite: ''
    });
  };

  return (
    <div className="backgroundMain">
      <div>
        <input
          className='formInput'
          type="text"
          placeholder=' Название компании'
          name="companyName"
          value={formData.companyName}
          onChange={handleChange}
        />
        <input
          className='formInput'
          type="text"
          placeholder=' Дата собеседования'
          name="interviewDate"
          value={formData.interviewDate}
          onChange={handleChange}
        />
        <input
          className='formInput'
          type="text"
          placeholder=' Предлагаемая должность'
          name="proposedPosition"
          value={formData.proposedPosition}
          onChange={handleChange}
        />
        <input
          className='formInput'
          type="text"
          placeholder=' Email'
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          className='formInput'
          type="text"
          placeholder=' Сайт компании'
          name="companyWebsite"
          value={formData.companyWebsite}
          onChange={handleChange}
        />
      </div>
      <div className='formDiv'>
        <button type="button" className='HeaderButton' onClick={handleReset}>
          Отправить
        </button>
      </div>
    </div>
  );
}

export default Form;