import React from 'react';
import { useForm } from 'react-hook-form';
import builderQuery from '../../helper/BuilderQuery';
import InputCheckBox from '../shared/Form/InputCheckBox';
import InputForm from '../shared/Form/InputForm';
import InputRadio from '../shared/Form/InputRadio';
import SubmitButton from '../shared/Form/styles/SubmitButton';
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

function SearchContent({ search, setSearch, setFilter }) {
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
  );
}

export default SearchContent;
