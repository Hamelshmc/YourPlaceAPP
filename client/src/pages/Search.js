/* eslint-disable complexity */
/* eslint-disable no-console */
/* eslint-disable no-nested-ternary */
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import styled from 'styled-components';
import Publication from '../components/Publication/Publication';
import ListPublicationWrapper from '../components/Publication/styles/Publication/ListPublicationWrapper';
import Icon from '../components/shared/Icon';

const fetchPublicationSearch = async (pageParam, value) => {
  const res = await (
    await fetch(`/api/v1/publications/?limit=10&page=${pageParam * 10}&search=${value}`)
  ).json();
  return res.data;
};

function Search() {
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(0);
  const fetchProjects = (size = 0, value) => fetchPublicationSearch(size, value);

  const { isLoading, isError, error, data, isFetching, isPreviousData } = useQuery(
    ['data', page, search],
    () => fetchProjects(page, search),
    { keepPreviousData: true }
  );
  console.log(data);

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div>
      <SearchContainer>
        <SearchBox>
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
              required
            />
          </SearchItem>
          <FilterContainer>
            <FilterInput type="checkbox" id="filter" />
            <FilterButton htmlFor="filter">
              <Icon>filter_list</Icon>
            </FilterButton>
          </FilterContainer>
        </SearchBox>
      </SearchContainer>
      {isLoading ? (
        <div>Loading...</div>
      ) : isError ? (
        <div>Error: {error.message}</div>
      ) : (
        <ListPublicationWrapper>
          {data.map((item) => (
            <Publication key={item.id} publication={item} lessor />
          ))}
        </ListPublicationWrapper>
      )}
      <span>Current Page: {page + 1}</span>
      <button
        type="button"
        onClick={() => setPage((old) => Math.max(old - 1, 0))}
        disabled={page === 0}>
        Previous Page
      </button>
      <button
        type="button"
        onClick={() => {
          if (!isPreviousData && data) {
            setPage((old) => old + 1);
          }
        }}
        // Disable the Next Page button until we know a next page is available
        disabled={isPreviousData || (data?.length > 5 && data?.length < 10) || data?.length === 0}>
        Next Page
      </button>
      {isFetching ? <span> Loading...</span> : null}{' '}
    </div>
  );
}

const SearchContainer = styled.section`
  display: flex;
  position: relative;
  justify-content: center;
`;

const SearchBox = styled.form`
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
    display: block;
  }
  &[type='checkbox']:checked + label {
    background-color: #f7f7f7;
    color: $color-03;
    backdrop-filter: blur(25px);
  }
`;

export default Search;
