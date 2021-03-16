/* eslint-disable no-nested-ternary */
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import styled from 'styled-components';
import { fetchPublicationSearchV2 } from '../api/Publication';
import Publication from '../components/Publication/Publication';
import ListPublicationWrapper from '../components/Publication/styles/Publication/ListPublicationWrapper';
import SearchContent from '../components/Search/SearchContent';

function Search() {
  const [filter, setFilter] = useState('');
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(0);

  const { isLoading, isError, error, data, isPreviousData } = useQuery(
    ['data', page, search, filter],
    async () => await fetchPublicationSearchV2(page, search.trim(), filter)
  );

  const previousPage = async () => {
    setPage((old) => Math.max(old - 1, 0));
  };

  const nextPage = async () => {
    if (!isPreviousData && data) {
      setPage((old) => old + 1);
    }
  };
  const resetPage = async () => {
    setSearch('');
    setFilter('');
    setPage(0);
  };

  console.log(data);

  return (
    <SearchWrapper>
      <SearchContent
        setFilter={setFilter}
        setSearch={setSearch}
        search={search}
        setReset={resetPage}
      />
      {isLoading ? (
        <div>Loading...</div>
      ) : isError ? (
        <div>Error: {error.message}</div>
      ) : (
        <ListPublicationWrapper>
          {data && data.map((item) => <Publication key={item.id} publication={item} />)}
        </ListPublicationWrapper>
      )}
      <FlexContainer>
        <CurrentPage>Current Page: {page + 1}</CurrentPage>
        <ButtonPage type="button" onClick={previousPage} disabled={page === 0}>
          Previous Page
        </ButtonPage>
        <ButtonPage
          type="button"
          onClick={nextPage}
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

const CurrentPage = styled.span`
  padding: 0.5rem 0.5rem;
  font-size: 0.875rem;
`;

const ButtonPage = styled.button`
  padding: 0.5rem;
  margin: 0.1rem;
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
  align-items: flex-start;
`;

export default Search;
