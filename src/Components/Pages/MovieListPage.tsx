import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, List, ListItem, ListItemText } from '@mui/material';
import { getMovies, deleteMovie } from '../../Services/movieService';
import type { Movie } from '../../Services/movieService';

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
        <List>
            {movies.map(movie => (
                <ListItem key={movie.id}>
                    <ListItemText primary={movie.title} secondary={movie.releaseDate} />
                    <Button onClick={() => navigate(`/movies/${movie.id}`)}>Detail</Button>
                    <Button onClick={() => handleDelete(movie.id)}>Delete</Button>
                </ListItem>
            ))}
        </List>
    );
};

export default MovieListPage;