import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button, Typography, Box } from '@mui/material';
import { getMovieById } from '../../Services/movieService';
import type { Movie } from '../../Services/movieService';

const MovieDetailPage = () => {
    const { id } = useParams<{ id: string }>();
    const [movie, setMovie] = useState<Movie | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        if (id) getMovieById(id).then(setMovie);
    }, [id]);

    if (!movie) return <div>Laden...</div>;

    return (
        <Box>
            <Typography variant="h5">{movie.title}</Typography>
            <Typography>Release Date: {movie.releaseDate}</Typography>
            <Button onClick={() => navigate(`/movies/${id}/edit`)}>Bearbeiten</Button>
            <Button onClick={() => navigate('/movies')}>Zurück</Button>
        </Box>
    );
};

export default MovieDetailPage;