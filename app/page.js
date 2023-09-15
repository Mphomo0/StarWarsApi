import Link from 'next/link';
import getAllFilms from '@/libs/getAllFilms';

export default async function Home() {
  // Fetch the list of Star Wars films
  const films = await getAllFilms();

  return (
    <div>
      {/* Background container */}
      <div className="bg-container"></div>
      
      {/* Page title */}
      <h1 className='text-center mt-5'>Star Wars Movies</h1>
      
      {/* Container for the film cards */}
      <div className="container card-grid mt-5">
        {/* Map through the films and render a card for each */}
        {films.results.map((film) => (
          <div className="card" key={film.episode_id}>
            <div className="card-body">
              {/* Film title */}
              <h4 className="card-title">{film.title}</h4>
              
              {/* Release date */}
              <p>{film.release_date}</p>
              
              {/* Opening crawl text (truncated if too long) */}
              <p>
                {film.opening_crawl.length > 150
                  ? `${film.opening_crawl.substring(0, 250)}...`
                  : film.opening_crawl
                }
              </p>
              
              {/* Link to view film details */}
              <Link href={`/${film.episode_id}`}>
                <button className="btn btn-danger">View Details</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
