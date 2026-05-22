import { useFormik } from 'formik';
import * as yup from 'yup';
import { TextField, Button, Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { login } from '../../Services/movieService';

const validationSchema = yup.object({
    email: yup.string().email('Ungültige E-Mail').required('E-Mail ist erforderlich'),
    password: yup.string().required('Passwort ist erforderlich'),
});

const Login = () => {
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: { email: '', password: '' },
        validationSchema,
        onSubmit: async ({ email, password }) => {
            const data = await login(email, password);
            localStorage.setItem('accessToken', data.accessToken);
            navigate('/movies');
        },
    });

    return (
        <Box component="form" onSubmit={formik.handleSubmit}>
            <Typography variant="h5">Login</Typography>
            <TextField
                name="email"
                label="E-Mail"
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
            />
            <TextField
                name="password"
                label="Passwort"
                type="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                error={formik.touched.password && Boolean(formik.errors.password)}
                helperText={formik.touched.password && formik.errors.password}
            />
            <Button type="submit">Login</Button>
        </Box>
    );
};

export default Login;