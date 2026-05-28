import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Paper, Stack, Typography } from '@mui/material';
import { createMovie } from '../../Services/movieService';
import MovieForm from '../Molecules/MovieForm';

const MovieCreatePage = () => {
    const [title, setTitle] = useState('');
    const [releaseDate, setReleaseDate] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async () => {
        await createMovie({ title, releaseDate });
        navigate('/movies');
    };

    return (
        <Box sx={{ maxWidth: 600, mx: 'auto', mt: 4, px: 2 }}>
            <Paper sx={{ p: 4 }}>
                <Typography variant="h5" component="h5" sx={{ mb: 3 }}>
                    Film erstellen
                </Typography>
                <Stack spacing={2}>
                    <MovieForm
                        title={title}
                        releaseDate={releaseDate}
                        onTitleChange={setTitle}
                        onReleaseDateChange={setReleaseDate}
                    />
                    <Stack direction="row" spacing={2}>
                        <Button variant="contained" onClick={handleSubmit}>Erstellen</Button>
                        <Button variant="outlined" onClick={() => navigate('/movies')}>Abbrechen</Button>
                    </Stack>
                </Stack>
            </Paper>
        </Box>
    );
};

export default MovieCreatePage;