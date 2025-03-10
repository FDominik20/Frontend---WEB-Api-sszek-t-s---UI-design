import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export const TipusSingle = () => {
  const { id } = useParams();
  const [tipus, setTipus] = useState(null);

  useEffect(() => {
    fetch(`https://localhost:5001/api/Tipusok/${id}`)
      .then(response => response.json())
      .then(data => setTipus(data))
      .catch(error => console.log(error));
  }, [id]);

  return (
    <div className="container">
      {tipus ? (
        <div>
          <h3>{tipus.megnevezes}</h3>
          <p>{tipus.leiras || 'Nincs leírás'}</p>
          {tipus.kepek && <img src={tipus.kepek} alt="Eszköz" />}
        </div>
      ) : (
        <p>Betöltés...</p>
      )}
    </div>
  );
};
