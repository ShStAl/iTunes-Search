import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Homepage from './pages/HomePage';
import ItemPage from './pages/ItemPage';


function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Homepage />} />
        <Route path="/track/:id" element={<ItemPage />} />
      </Route>
    </Routes>
  )
}

export default App
