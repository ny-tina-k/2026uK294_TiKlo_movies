import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Typography } from '@mui/material';
import { getMovies, deleteMovie } from '../../Services/movieService';
import type { Movie } from '../../Services/movieService';
import MovieList from '../Organisms/MovieList';

const MovieListPage = () => {
    const [movies, setMovies] = useState<Movie[]>([]);
    const navigate = useNavigate();

    useEffect(() => {
        getMovies().then(setMovies);
    }, []);

    const handleDelete = async (id: string) => {
        await deleteMovie(id);
        setMovies(movies.filter(m => m.id !== id));
    };

    return (
        <Box sx={{ maxWidth: 800, mx: 'auto', mt: 4, px: 2 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                <Typography variant="h4">Movies</Typography>
                <Button variant="contained" onClick={() => navigate('/movies/create')}>Neu erstellen</Button>
            </Box>
            <MovieList
                movies={movies}
                onDetail={(movieId: any) => navigate(`/movies/${movieId}`)}
                onDelete={handleDelete}
            />
        </Box>
    );
};

export default MovieListPage;