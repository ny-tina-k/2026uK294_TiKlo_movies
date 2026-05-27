import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './Components/Pages/LoginPage';
import MovieListPage from './Components/Pages/MovieListPage';
import ProtectedRoute from './Components/Atoms/ProtectedRoute';
import MovieDetailPage from './Components/Pages/MovieDetailPage';
import MovieEditPage from './Components/Pages/MovieEditPage';
import MovieCreatePage from './Components/Pages/MovieCreatePage';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<LoginPage />} />
                <Route element={<ProtectedRoute />}>
                    <Route path="/movies" element={<MovieListPage />} />
                    <Route path="/movies/:id" element={<MovieDetailPage />} />
                    <Route path="/movies/:id/edit" element={<MovieEditPage />} />
                    <Route path="/movies/create" element={<MovieCreatePage />} />
                </Route>
                <Route path="*" element={<Navigate to="/login" />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;