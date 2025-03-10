import React, { useState } from 'react';

export const TipusCreate = () => {
  const [megnevezes, setMegnevezes] = useState('');
  const [leiras, setLeiras] = useState('');
  const [kepek, setKepek] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTipus = { megnevezes, leiras, kepek };

    fetch('https://localhost:5001/api/UjTipusok', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newTipus),
    })
      .then(response => response.json())
      .then(data => {
        alert('Új típus hozzáadva');
      })
      .catch(error => console.log(error));
  };

  return (
    <div className="container">
      <h3>Új eszköztípus hozzáadása</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Megnevezés:</label>
          <input
            type="text"
            className="form-control"
            value={megnevezes}
            onChange={(e) => setMegnevezes(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Leírás:</label>
          <textarea
            className="form-control"
            value={leiras}
            onChange={(e) => setLeiras(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Kép URL:</label>
          <input
            type="text"
            className="form-control"
            value={kepek}
            onChange={(e) => setKepek(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">Mentés</button>
      </form>
    </div>
  );
};
