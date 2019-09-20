import React, { useState } from "react";

export default function SearchForm( { placeholder, handleChange, handleSubmit }) {
 
  return (
    <section className="search-form">
     <form onSubmit={handleSubmit}>
      <input
        name='search'
        type='search'
        placeholder={placeholder}
        onChange={handleChange}
      />
     </form>
    </section>
  );
}
