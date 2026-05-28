import {Box, Button, Paper, Stack, Typography } from '@mui/material';
import type { Movie } from '../../Services/movieService';

interface MovieCardProps {
    movie: Movie;
    onDetail: (id: string) => void;
    onDelete: (id: string) => void;
}

const MovieCard = ({ movie, onDetail, onDelete }: MovieCardProps) => {
    return (
        <Paper sx={{ p: 2 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Box>
                    <Typography variant="h6">{movie.title}</Typography>
                    <Typography variant="body2" color="text.secondary">{movie.releaseDate}</Typography>
                </Box>
                <Stack direction="row" spacing={1}>
                    <Button variant="outlined" onClick={() => onDetail(movie.id)}>Detail</Button>
                    <Button variant="outlined" color="error" onClick={() => onDelete(movie.id)}>Delete</Button>
                </Stack>
            </Box>
        </Paper>
    );
};

export default MovieCard;