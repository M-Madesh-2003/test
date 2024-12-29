import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import SelectedPlaceDetails from './components/SelectedPlaceDetails';
import HomePage from './components/HomePage';
import TourPackage from './components/TourPackage';
import Service from './components/Service';
import SelectedCategory from './components/SelectedCategory'

const App = () => {
  return (
    <Router>
      <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/details/:placename' element={<SelectedPlaceDetails />} />
          <Route path='/yourpackage' element={<TourPackage />} />
          <Route path='/service' element={<Service />} />
          <Route path='/category/:type' element={<SelectedCategory />} />
      </Routes>
    </Router>
  )
}

export default App