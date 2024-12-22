import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import SelectedPlaceDetails from './components/SelectedPlaceDetails';
import HomePage from './components/HomePage';
import TourPackage from './components/TourPackage';

const App = () => {
  return (
    <Router>
      <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/details/:placename' element={<SelectedPlaceDetails />} />
          <Route path='/yourpackage' element={<TourPackage />} />
      </Routes>
    </Router>
  )
}

export default App