import { useDispatch, useSelector } from 'react-redux';
import css from './Filter.module.css';
import { changeFilter } from '../../redux/filterSlice';
import React from 'react';
import { getFilter } from '../../redux/selector';

const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const handleChange = event => {
    dispatch(changeFilter(event.target.value));
  };
  return (
    <label className={css.label}>
      Find contacts by name
      <input
        className={css.input}
        type="text"
        value={filter}
        onChange={handleChange}
      />
    </label>
  );
};

export default Filter;
