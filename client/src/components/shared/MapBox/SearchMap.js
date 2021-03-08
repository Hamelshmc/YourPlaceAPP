/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState } from 'react';
import styled from 'styled-components';
import Constraints from '../Form/styles/Constraints';
import Input from '../Form/styles/Input';
import InputLabel from '../Form/styles/InputLabel';
import InputSection from '../Form/styles/InputSection';

function SearchMap({ reference, error, errorMsg }) {
  const accessToken =
    'pk.eyJ1IjoiYzRyMG50MyIsImEiOiJja2p4MnI3aGkwNGYyMm9vZmJiczRjYmZlIn0.uCBGQFsqBN_NUmh0g4vnNA';
  const [display, setDisplay] = useState('initial');
  const [options, setOptions] = useState([]);
  const [search, setSearch] = useState('');

  const debounce = (fn, delay) => {
    let timeout;
    return (...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => fn(...args), delay);
    };
  };

  const getStreetsResults = async () => {
    if (search === '') {
      return options;
    }
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${search}.json?country=es&types=address&language=es&autocomplete=true&access_token=${accessToken}`;
    const data = await (await fetch(url)).json();
    const promises = data.features.map(async (item) => ({
      id: item.id,
      name: item.text_es,
    }));
    const result = await Promise.all(promises).then((completed) => completed);
    return setOptions(result);
  };

  const handleItemClicked = (e) => {
    setSearch(e.target.value);
    setDisplay(false);
    setOptions([]);
  };

  const handleSearchChange = (e) => {
    setDisplay(true);
    setSearch(e.target.value);
    debounce(getStreetsResults(), 300);
  };

  return (
    <AutocompletePlace>
      <InputSection>
        <Input
          type="text"
          name="street"
          id="street"
          autoComplete="off"
          value={search}
          onChange={handleSearchChange}
          placeholder="Type an address"
          ref={reference}
          focus={error}
        />
        <InputLabel htmlFor="map">Street</InputLabel>
      </InputSection>
      <Constraints id="map">{errorMsg}</Constraints>
      {display && (
        <AutocompletePlaceResults>
          {options.map((item) => (
            <AutocompletePlaceItems onClick={handleItemClicked} key={item.id} tabIndex="0">
              {item.name}
            </AutocompletePlaceItems>
          ))}
        </AutocompletePlaceResults>
      )}
    </AutocompletePlace>
  );
}

export default SearchMap;

const AutocompletePlace = styled.div`
  position: relative;
  section {
    word-wrap: break-word;
    input {
      flex-wrap: nowrap;
      word-wrap: break-word;
    }
  }
`;

const AutocompletePlaceResults = styled.ul`
  display: ${({ display }) => display};
  padding: 0;
  margin: 0;
  position: absolute;
  border: 1px solid #d4d4d4;
  border-bottom: none;
  border-top: none;
  z-index: 99;
  /*position the autocomplete items to be the same width as the container:*/
  top: 100%;
  left: 0;
  right: 0;
  transition: all 0.3s;
`;

const AutocompletePlaceItems = styled.option`
  cursor: pointer;
  padding: 10px;
  cursor: pointer;
  background-color: #fff;
  border-bottom: 1px solid #d4d4d4;
  padding: 0.5rem 1.25rem;
  overflow-x: scroll;
  transition: all 0.3s;
  &::-webkit-scrollbar {
    display: none; /* Ocultar scroll */
  }
  &:hover {
    background-color: #e9e9e9;
  }
`;
