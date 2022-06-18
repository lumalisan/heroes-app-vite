import React, { useMemo } from 'react'
import queryString from 'query-string';
import { useNavigate, useLocation } from 'react-router-dom';
import { getHeroByName } from '../../helpers/getHeroByName';
import { useForm } from '../../hooks/useForm';
import HeroCard from '../hero/HeroCard';

const SearchScreen = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const { q = '' } = queryString.parse(location.search);

    const initialForm = {
        searchText: q
    };

    const [{ searchText }, handleInputChange] = useForm(initialForm);
    const heroesFiltered = useMemo(() => getHeroByName(q), [q]);

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('?q=' + searchText);
    }

    return (
        <>
            <h1>Search Hero</h1>
            <hr />

            <div className='row'>

                <div className='col-5'>
                    <h4>Search</h4>
                    <hr />

                    <form onSubmit={handleSubmit}>
                        <input
                            type='text'
                            placeholder='Search a hero'
                            className='form-control'
                            name='searchText'
                            autoComplete='off'
                            onChange={handleInputChange}
                            value={searchText}
                        />

                        <button type='submit' className='btn btn-outline-primary mt-1 btn-block'>
                            Search
                        </button>
                    </form>
                </div>

                <div className='col-7'>
                    <h4>Results</h4>
                    <hr />

                    {
                        (q === '') ? <div className='alert alert-info'>Please type a hero name</div> :
                        (heroesFiltered.length > 0) ? heroesFiltered.map(hero => (
                            <HeroCard key={hero.id} {...hero} />
                        )) : <div className='alert alert-warning'>No results</div>        
                    }

                </div>

            </div>
        </>
    )
}

export default SearchScreen