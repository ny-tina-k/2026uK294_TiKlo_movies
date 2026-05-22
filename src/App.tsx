import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './Components/Pages/LoginPage';
import MovieListPage from './Components/Pages/MovieListPage';
import ProtectedRoute from './Components/Atoms/ProtectedRoute';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<LoginPage />} />
                <Route element={<ProtectedRoute />}>
                    <Route path="/movies" element={<MovieListPage />} />
                </Route>
                <Route path="*" element={<Navigate to="/login" />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;