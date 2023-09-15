import getFilm from "@/libs/getFilm"
import Link from 'next/link'

export default async function FilmPage({ params: { id } }) {
  // Fetch film data using the provided ID
  const film = await getFilm(id)

  return (
    <div className="container mt-5">
      <h1>{film.title}</h1>
      <h3>Episode {film.episode_id}</h3>
      <p>Director: {film.director}</p>
      <p>Producer: {film.producer}</p>
      <p>Year: {film.release_date}</p>
      <p>{film.opening_crawl}</p>

      {/* Create a Link component to navigate to the home page */}
      <Link href='/'>
        {/* Button to go home */}
        <button className="btn btn-primary">Go Home</button>
      </Link>
    </div>
  )
}