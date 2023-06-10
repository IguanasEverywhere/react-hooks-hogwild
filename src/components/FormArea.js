import React, { useState } from 'react';

function FormArea({addHog}) {

  const [formData, setFormData] = useState({
    name: '',
    greased: true,
    image: '',
    specialty: '',
    weight: '',
    'highest medal achieved': 'Gold',
  })

  function handleFormChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  function handleNewHogSubmit(e) {
    e.preventDefault();
    addHog(formData)
  }

  return (
    <form onSubmit={handleNewHogSubmit}>
      <input onChange={handleFormChange} name="name" placeholder="Name" value={formData.name}></input>
      <select onChange={handleFormChange} name="greased" value={formData.greased}>
        <option>True</option>
        <option>False</option>
      </select>
      <select onChange={handleFormChange} name="highest medal achieved" value={formData['highest medal achieved']}>
        <option>Gold</option>
        <option>Silver</option>
        <option>Bronze</option>
      </select>
      <input onChange={handleFormChange} name="image" placeholder="Image Link" value={formData.image}></input>
      <input onChange={handleFormChange} name="specialty" placeholder="Specialty" value={formData.specialty}></input>
      <input onChange={handleFormChange} name="weight" placeholder="Weight" value={formData.weight}></input>
      <input type="submit"></input>
    </form>
  )
}

export default FormArea;