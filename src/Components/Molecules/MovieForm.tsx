import { Stack, TextField } from '@mui/material';

interface MovieFormProps {
    title: string;
    releaseDate: string;
    onTitleChange: (value: string) => void;
    onReleaseDateChange: (value: string) => void;
}

const MovieForm = ({ title, releaseDate, onTitleChange, onReleaseDateChange }: MovieFormProps) => {
    return (
        <Stack spacing={2}>
            <TextField label="Titel" value={title} onChange={e => onTitleChange(e.target.value)} />
            <TextField label="Release Date" value={releaseDate} onChange={e => onReleaseDateChange(e.target.value)} />
        </Stack>
    );
};

export default MovieForm;