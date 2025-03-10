import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export const TipusokList = () => {
  const [tipusok, setTipusok] = useState([]);

  useEffect(() => {
    fetch('https://localhost:5001/api/Tipusok')
      .then(response => response.json())
      .then(data => setTipusok(data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="container">
      <h2>Eszköztípusok</h2>
      <ul className="list-group">
        {tipusok.map(tipus => (
          <li key={tipus.id} className="list-group-item">
            <Link to={`/tipus/${tipus.id}`}>
              {tipus.megnevezes || 'Nincs név'}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
