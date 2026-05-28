import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Box, Button, Paper, Stack, Typography } from '@mui/material';
import { getMovieById, updateMovie } from '../../Services/movieService';
import type { Movie } from '../../Services/movieService';
import MovieForm from '../Molecules/MovieForm';

const MovieEditPage = () => {
    const { id } = useParams<{ id: string }>();
    const [movie, setMovie] = useState<Movie | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        if (id) getMovieById(id).then(setMovie);
    }, [id]);

    const handleSubmit = async () => {
        if (!id || !movie) return;
        await updateMovie(id, movie);
        navigate(`/movies/${id}`);
    };

    if (!movie) return <div>Laden...</div>;

    return (
        <Box sx={{ maxWidth: 600, mx: 'auto', mt: 4, px: 2 }}>
            <Paper sx={{ p: 4 }}>
                <Typography variant="h5" sx={{ mb: 3 }}>Film bearbeiten</Typography>
                <Stack spacing={2}>
                    <MovieForm
                        title={movie.title}
                        releaseDate={movie.releaseDate}
                        onTitleChange={value => setMovie({ ...movie, title: value })}
                        onReleaseDateChange={value => setMovie({ ...movie, releaseDate: value })}
                    />
                    <Stack direction="row" spacing={2}>
                        <Button variant="contained" onClick={handleSubmit}>Speichern</Button>
                        <Button variant="outlined" onClick={() => navigate(`/movies/${id}`)}>Abbrechen</Button>
                    </Stack>
                </Stack>
            </Paper>
        </Box>
    );
};

export default MovieEditPage;