import React, { useMemo } from 'react'
import 'animate.css';
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { getHeroById } from '../../helpers/getHeroById';

const HeroScreen = () => {

  const { heroId } = useParams();
  const navigate = useNavigate();

  const hero = useMemo(() => getHeroById(heroId), [heroId]);

  if (!hero) return <Navigate to={'/'} />

  const handleReturn = () => {
      navigate(-1);
  }

  const heroImageUrl = `/assets/${ heroId }.jpg`;

  return (
    <div className='row row-cols-1 row-cols-lg-2 mb-5'>
      <div className='col col-lg-4 mb-4'>
        <img src={heroImageUrl} alt={hero.superhero} className='img-thumbnail animate__animated animate__fadeInLeft' />
      </div>
      <div className='col col-lg-8 animate__animated animate__fadeIn'>
        <h3>{hero.superhero}</h3>
        <ul className='list-group list-group-flush'>
          <li className='list-group-item'><b>Alter ego:</b> {hero.alter_ego}</li>
          <li className='list-group-item'><b>Publisher:</b> {hero.publisher}</li>
          <li className='list-group-item'><b>First appearance:</b> {hero.first_appearance}</li>
        </ul>

        <h5 className='mt-3'>Characters</h5>
        <p>{hero.characters}</p>

        <button
          className='btn btn-outline-info'
          onClick={handleReturn}
        >
          Return
        </button>
      </div>
    </div>
  )
}

export default HeroScreen