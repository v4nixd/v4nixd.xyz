import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from "./pages/HomePage";
import AlphaPage from "./pages/AlphaPage";
import ViewMarkdown from "./pages/ViewMarkdown";
import NewHomePage from "./pages/NewHomePage";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/beta/" element={<HomePage />} />
                <Route path="/beta/alpha" element={<AlphaPage />} />
                <Route path="/beta/alpha/md/view/:uuid" element={<ViewMarkdown />} />
                <Route path="/beta/new" element={<NewHomePage />} />
            </Routes>
        </Router>
    )
}

export default App;