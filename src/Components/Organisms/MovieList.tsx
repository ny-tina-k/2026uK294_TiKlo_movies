import { Stack } from '@mui/material';
import type { Movie } from '../../Services/movieService';
import MovieCard from '../Atoms/MovieCard';

interface MovieListProps {
    movies: Movie[];
    onDetail: (id: string) => void;
    onDelete: (id: string) => void;
}

const MovieList = ({ movies, onDetail, onDelete }: MovieListProps) => {
    return (
        <Stack spacing={2}>
            {movies.map(movie => (
                <MovieCard key={movie.id} movie={movie} onDetail={onDetail} onDelete={onDelete} />
            ))}
        </Stack>
    );
};

export default MovieList;