import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, TextField, Box, Typography } from '@mui/material';
import { createMovie } from '../../Services/movieService';

const MovieCreatePage = () => {
    const [title, setTitle] = useState('');
    const [releaseDate, setReleaseDate] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async () => {
        await createMovie({ title, releaseDate });
        navigate('/movies');
    };

    return (
        <Box>
            <Typography variant="h5">Film erstellen</Typography>
            <TextField
                name="title"
                label="Titel"
                value={title}
                onChange={e => setTitle(e.target.value)}
            />
            <TextField
                name="releaseDate"
                label="Release Date"
                value={releaseDate}
                onChange={e => setReleaseDate(e.target.value)}
            />
            <Button onClick={handleSubmit}>Erstellen</Button>
            <Button onClick={() => navigate('/movies')}>Abbrechen</Button>
        </Box>
    );
};

export default MovieCreatePage;