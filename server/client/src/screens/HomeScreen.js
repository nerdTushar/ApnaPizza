import React,{useEffect} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import Pizza from '../components/Pizza';
import {getAllPizzas} from '../actions/pizzaAction';
import Loader from '../components/Loader';
import Error from '../components/Error';
import Filters from '../components/Filters';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const pizzastate = useSelector(state => state.getAllPizzaReducer);
  const {loading,pizzas,error} = pizzastate;
  useEffect(() => {dispatch(getAllPizzas())}, [dispatch]);
  return (
    <>
      {loading ? (<Loader />) : error ? (<Error>Error while fetching pizzas {error}</Error>) : 
      (
        <div className='d-flex justify-content-center'>
        <div className='container'>
          <Filters/>
          <div className='d-flex flex-md-row flex-column flex-wrap justify-content-center align-content-center gap-5'>
          {pizzas.map(pizza => (
                <div key={pizza.name}>
                    <Pizza pizza={pizza}/>
                </div>
            ))}
          </div>
        </div>
      </div>
      )}
    </>
  )
};

export default HomeScreen;
