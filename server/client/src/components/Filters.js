import React,{useState} from 'react';
import {useDispatch} from 'react-redux';
import {filterPizza} from '../actions/pizzaAction';

const Filters = () => {
    const dispatch = useDispatch();
    const [searchKey,setSearchKey] = useState('');
    const [category,setCategory] = useState('all');
  return (
    <>
    <div className='bg-dark p-4 mb-4'>
      <div className='d-flex flex-md-row flex-column gap-4 justify-content-between'>
        <input className='rounded px-2 col-md-6 py-2' type='text' placeholder="Search Pizza" value={searchKey}
            onChange={(e) => setSearchKey(e.target.value)} />
        <select className='form-select rounded' value={category}
            onChange={(e) => setCategory(e.target.value)}>
             <option >All</option>
             <option >Veg</option>
             <option >Nonveg</option>
        </select>
        <button className='rounded bg-primary text-light py-2 px-4 fs-6' onClick={() => {dispatch(filterPizza(searchKey,category))}}>Search</button>
      </div>
    </div>
    </>
  )
};

export default Filters;
