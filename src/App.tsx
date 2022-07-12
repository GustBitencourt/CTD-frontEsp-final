import { Routes, Route } from "react-router-dom";

import { Provider } from "react-redux";
import { store } from './store'

import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { FavoritesPage } from "./pages/FavoritesPage";
import { DetailsPage } from "./pages/DetailsPage";

import './App.css';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="favoritos" element={<FavoritesPage />} />
            <Route path="detalhe" element={<DetailsPage />} />
          </Routes>
      </Provider>
    </div>
  );
}

export default App;
