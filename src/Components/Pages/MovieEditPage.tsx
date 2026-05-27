import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button, TextField, Box, Typography } from '@mui/material';
import { getMovieById, updateMovie } from '../../Services/movieService';
import type { Movie } from '../../Services/movieService';

const MovieEditPage = () => {
    const { id } = useParams<{ id: string }>();
    const [movie, setMovie] = useState<Movie | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        if (id) getMovieById(id).then(setMovie);
    }, [id]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!movie) return;
        setMovie({ ...movie, [e.target.name]: e.target.value });
    };

    const handleSubmit = async () => {
        if (!id || !movie) return;
        await updateMovie(id, movie);
        navigate(`/movies/${id}`);
    };

    if (!movie) return <div>Laden...</div>;

    return (
        <Box>
            <Typography variant="h5">Film bearbeiten</Typography>
            <TextField
                name="title"
                label="Titel"
                value={movie.title}
                onChange={handleChange}
            />
            <TextField
                name="releaseDate"
                label="Release Date"
                value={movie.releaseDate}
                onChange={handleChange}
            />
            <Button onClick={handleSubmit}>Speichern</Button>
            <Button onClick={() => navigate(`/movies/${id}`)}>Abbrechen</Button>
        </Box>
    );
};

export default MovieEditPage;