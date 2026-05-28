import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Box, Button, Paper, Stack, Typography } from '@mui/material';
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
        <Box sx={{ maxWidth: 600, mx: 'auto', mt: 4, px: 2 }}>
            <Paper sx={{ p: 4 }}>
                <Typography component="h4" variant="h4" sx={{ mb: 2 }}>{movie.title}</Typography>
                <Typography variant="body1" sx={{ mb: 3 }}>Release Date: {movie.releaseDate}</Typography>
                <Stack direction="row" spacing={2}>
                    <Button variant="contained" onClick={() => navigate(`/movies/${id}/edit`)}>Bearbeiten</Button>
                    <Button variant="outlined" onClick={() => navigate('/movies')}>Zurück</Button>
                </Stack>
            </Paper>
        </Box>
    );
};

export default MovieDetailPage;