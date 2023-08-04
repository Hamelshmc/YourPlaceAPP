import React from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import builderQuery from '../../helper/BuilderQuery';
import InputCheckBox from '../shared/Form/InputCheckBox';
import InputForm from '../shared/Form/InputForm';
import InputRadio from '../shared/Form/InputRadio';
import Icon from '../shared/Icon';
import FilterButton from './styles/FilterButton';
import FilterContainer from './styles/FilterContainer';
import FilterContent from './styles/FilterContent';
import FilterInput from './styles/FilterInput';
import SearchButton from './styles/SearchButton';
import SearchContainer from './styles/SearchContainer';
import SearchForm from './styles/SearchForm';
import SearchInput from './styles/SearchInput';
import SearchItem from './styles/SearchItem';

function SearchContent({ search, setSearch, setFilter, setReset }) {
  const { register, handleSubmit, errors } = useForm({
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
            placeholder="Start your search"
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
                <InputForm
                  id="price"
                  name="price"
                  label="Price"
                  type="number"
                  errorMsg={errors.price && errors.price.message}
                  error={errors.price}
                  placeholder="300"
                  reference={register}
                />
              </li>
              <li>
                <InputForm
                  id="availability_date"
                  name="availability_date"
                  label="Availability Date"
                  type="date"
                  errorMsg={errors.availability_date && errors.availability_date.message}
                  error={errors.availability_date}
                  reference={register}
                />
              </li>
              <li>
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

              <ButtonSearch id="register" red>
                Apply Filter
              </ButtonSearch>
              <ButtonSearch type="button" onClick={setReset} id="reset">
                Clear Filter
              </ButtonSearch>
            </ul>
          </FilterContent>
        </FilterContainer>
      </SearchForm>
    </SearchContainer>
  );
}

const ButtonSearch = styled.button`
  background-color: ${({ theme, red }) =>
    red ? theme.colors.primary.default : theme.colors.primary['900']};
  border: 1px solid ${({ theme }) => theme.colors.primary.default};
  border-radius: 2px;
  color: ${({ theme }) => theme.colors.primary[50]};
  cursor: pointer;
  display: block;
  font-size: ${({ theme }) => theme.fontSizes.default};
  /* fallback */
  font-size: ${({ theme }) => theme.fontSizes.default};
  font-weight: 500;
  margin-bottom: 0.5rem;
  padding: 0.5rem;
  box-shadow: ${({ theme }) => theme.boxShadow.default};
  width: 100%;
  transition: all 0.3s;
  &:hover {
    background-color: ${({ theme }) => theme.colors.primary['800']};
  }
`;

export default SearchContent;
