import React, { useEffect, useState } from "react";
import Axios from "axios";

import CharacterCard from './CharacterCard';

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [data, setData] = useState([]);
  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    Axios
      .get('https://rickandmortyapi.com/api/character/')
      .then(res => {
        console.log(res);
        const characters = res.data.results;
        setData(characters);
      })
      .catch(err => {
        console.log('No data return', err);
      })
  }, []);

  return (
    <section className="character-list">
      <h2>TODO: `array.map()` over your state here!</h2>
      {data.map(character => (
        <CharacterCard
          key={character.id}
          name={character.name}
          image={character.image}
        />
      ))}
    </section>
  );
}
