import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Form from './views/Form';
import Result from './views/Result';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
