/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */
/* eslint-disable complexity */
/* eslint-disable no-console */
/* eslint-disable no-nested-ternary */
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import styled from 'styled-components';
import Publication from '../components/Publication/Publication';
import ListPublicationWrapper from '../components/Publication/styles/Publication/ListPublicationWrapper';
import InputCheckBox from '../components/shared/Form/InputCheckBox';
import InputForm from '../components/shared/Form/InputForm';
import InputRadio from '../components/shared/Form/InputRadio';
import SubmitButton from '../components/shared/Form/styles/SubmitButton';
import Icon from '../components/shared/Icon';

const fetchPublicationSearch = async (pageParam, value, filter) => {
  const res = await (
    await fetch(`/api/v1/publications/?limit=10&page=${pageParam * 10}&search=${value}${filter}`)
  ).json();
  return res.data;
};

function Search() {
  const [filter, setFilter] = useState('');
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(0);
  const fetchProjects = (size = 0, value, query) => fetchPublicationSearch(size, value, query);

  const { isLoading, isError, error, data, isFetching, isPreviousData } = useQuery(
    ['data', page, search, filter],
    () => fetchProjects(page, search, filter)
  );
  console.log(data);

  function builderQuery(object) {
    if (typeof object !== 'object') {
      throw new Error('Invalid input column builder');
    }
    if (Object.entries(object).length === 0) {
      return '';
    }
    const keys = Object.keys(object);
    let column = '';
    column = keys
      .filter((key) => {
        if (object[key] === '' || object[key] === null || object[key] === false) {
          return;
        }
        return key;
      })
      .map((key) => `${key}=${object[key]}`)
      .join('&');
    const result = `&${column}`;
    return result;
  }

  const { register, handleSubmit, errors, getValues } = useForm({
    mode: 'onChange',
  });

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const onSubmit = async (formData) => {
    const query = builderQuery(formData);
    if (formData !== undefined) {
      setFilter(query);
    }
  };

  return (
    <SearchWrapper>
      <SearchContainer>
        <SearchForm method="POST" onSubmit={handleSubmit(onSubmit)}>
          <SearchItem>
            <SearchButton id="btn-search" type="button">
              <Icon>search</Icon>
            </SearchButton>
            <SearchInput
              id="search"
              value={search}
              name="search"
              type="search"
              onChange={handleSearchChange}
              placeholder="¿Qué es lo que buscas?"
            />
          </SearchItem>
          <FilterContainer>
            <FilterInput type="checkbox" id="filter" />
            <FilterButton htmlFor="filter">
              <Icon>filter_list</Icon>
            </FilterButton>
            <FilterContent>
              <ul>
                <li>
                  <InputForm
                    id="area"
                    name="area"
                    label="Area"
                    type="number"
                    errorMsg={errors.area && errors.area.message}
                    error={errors.area}
                    placeholder="120"
                    reference={register}
                  />
                </li>
                <li>
                  <InputForm
                    id="rooms"
                    name="rooms"
                    label="Rooms"
                    type="number"
                    errorMsg={errors.rooms && errors.rooms.message}
                    error={errors.rooms}
                    placeholder="2"
                    reference={register}
                  />
                </li>
                <li>
                  <InputForm
                    id="bathrooms"
                    name="bathrooms"
                    label="Bathrooms"
                    type="number"
                    errorMsg={errors.bathrooms && errors.bathrooms.message}
                    error={errors.bathrooms}
                    placeholder="3"
                    reference={register}
                  />
                </li>
                <li>
                  <InputRadio
                    idFirst="gas"
                    idSecond="electrical"
                    name="heating"
                    labelFirst="Gas"
                    labelSecond="Electrical"
                    errorMsg={errors.heating && errors.heating.message}
                    error={errors.heating}
                    reference={register}
                  />
                  <InputRadio
                    idFirst="flat"
                    idSecond="house"
                    name="publication_type"
                    labelFirst="Flat"
                    labelSecond="House"
                    errorMsg={errors.publication_type && errors.publication_type.message}
                    error={errors.publication_type}
                    reference={register}
                  />
                </li>
                <li>
                  <InputCheckBox
                    id="storage_room"
                    name="storage_room"
                    label="Storage Room"
                    errorMsg={errors.storage_room && errors.storage_room.message}
                    error={errors.storage_room}
                    reference={register}
                  />
                  <InputCheckBox
                    id="garage"
                    name="garage"
                    label="Garage"
                    errorMsg={errors.garage && errors.garage.message}
                    error={errors.garage}
                    reference={register}
                  />
                </li>
                <SubmitButton id="register">Apply Filter</SubmitButton>
              </ul>
            </FilterContent>
          </FilterContainer>
        </SearchForm>
      </SearchContainer>
      {isLoading ? (
        <div>Loading...</div>
      ) : isError ? (
        <div>Error: {error.message}</div>
      ) : (
        <ListPublicationWrapper>
          {data && data.map((item) => <Publication key={item.id} publication={item} lessor />)}
        </ListPublicationWrapper>
      )}
      <FlexContainer>
        <CurrentPage>Current Page: {page + 1}</CurrentPage>
        <ButtonPage
          type="button"
          onClick={() => setPage((old) => Math.max(old - 1, 0))}
          disabled={page === 0}>
          Previous Page
        </ButtonPage>
        <ButtonPage
          type="button"
          onClick={() => {
            if (!isPreviousData && data) {
              setPage((old) => old + 1);
            }
          }}
          // Disable the Next Page button until we know a next page is available
          disabled={
            isPreviousData || (data?.length > 1 && data?.length < 10) || data?.length === 0
          }>
          Next Page
        </ButtonPage>
      </FlexContainer>
    </SearchWrapper>
  );
}

const SearchWrapper = styled.section`
  display: grid;
  grid-row: 2;
`;

const SearchContainer = styled.section`
  display: flex;
  position: relative;
  justify-content: center;
`;

const SearchForm = styled.form`
  display: flex;
  flex: 0 1 max(45rem);
  border-radius: 0.2rem;
  margin: 0.5rem;
  align-self: center;
  box-shadow: ${({ theme }) => theme.boxShadow.default};
`;

const SearchItem = styled.section`
  display: flex;
  flex: 1 1 auto;
`;

const SearchButton = styled.button`
  display: flex;
  margin: 0;
  padding: 0.5rem;
  border: none;
  backdrop-filter: blur(25px);
  background-color: rgba(255, 255, 255, 0.9);
`;

const SearchInput = styled.input`
  backdrop-filter: blur(25px);
  background-color: rgba(255, 255, 255, 0.9);
  flex: 1 1 auto;
  letter-spacing: 0.1rem;
  margin-left: 1rem;
  border: none;
  outline: none;
  &::-webkit-search-cancel-button {
    opacity: 0.6;
    filter: saturate(300%);
    font-size: 1.3rem;
  }
  &::placeholder {
    font-size: 0.875rem;
  }
`;

const FilterContainer = styled.section`
  display: flex;
  position: relative;
`;

const FilterButton = styled.label`
  border: none;
  display: flex;
  margin: 0;
  padding: 0.5rem;
`;

const FilterInput = styled.input`
  &[type='checkbox'] {
    display: none;
  }
  &[type='checkbox']:checked ~ nav {
    display: flex;
  }
  &[type='checkbox']:checked + label {
    background-color: #f7f7f7;
    color: $color-03;
    backdrop-filter: blur(25px);
  }
`;

const FilterContent = styled.nav`
  position: absolute;
  justify-content: center;
  flex-direction: column;
  margin-top: 2.5rem;
  right: 0;
  background-color: #f7f7f7;
  border-radius: 0.2rem;
  display: none;
  z-index: 5;
  box-shadow: ${({ theme }) => theme.boxShadow.default};
  label {
    background-color: #f7f7f7;
  }
  ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
    list-style: none;
    align-items: center;
    margin: 0;
    padding: 0 0.2rem;
    li {
      margin: 0.5rem;
    }
  }
`;

const CurrentPage = styled.span`
  padding: 0.5rem 0.5rem;
  font-size: 0.875rem;
`;

const ButtonPage = styled.button`
  padding: 0.5rem 0.5rem;
  margin: 0.2rem;
  font-size: 0.875rem;
  background-color: ${({ theme, disabled }) => (disabled ? 'gray' : theme.colors.primary['800'])};
  box-shadow: ${({ theme }) => theme.boxShadow.default};
  color: white;
  border-radius: 0.2rem;
  outline: none;
`;

const FlexContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Search;
