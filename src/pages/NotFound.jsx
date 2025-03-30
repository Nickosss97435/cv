import React from 'react';
import bgImage from '../img/404-Ampoule.jpeg';

const NotFound = () => {
  return (
    <div className="container pt-2 pb-5 mx-5 px-5 w-100 h-100">
      <div className='home'>
        <div
          initial={{ opacity: 0, y: '-100px' }}
          animate={{ opacity: 10, y: 0 }}
          transition={{ duration: 2.5 }}
          className='home-content'
          style={{ backgroundImage: `url(${bgImage})` }}
        >
          <div className="section-header pt-5 pb-5 mx-auto text-center">
            <h3 className="section-title">
              <span>404 </span>Erreur <span>Not Found</span>
            </h3>
            <div className='notfound'>
              <div className='content-text'>
                <div className='big-404 text-success'>
                  <h1>Oops ! 404</h1>
                </div>
                <div className='you-lost text-warning'>
                  <h3>Il semblerait que vous soyez échoué</h3>
                </div>
                <div>
                  <h2 className='text-light'>pas de panique</h2>
                </div >
                <a className="section-subtitle mx-auto text-danger " href='/'>
                  Revenez sur terre.
                </a>
              </div>
              <span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
