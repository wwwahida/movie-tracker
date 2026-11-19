import "./App.css";
import * as Pages from "./pages";
import { Routes, Route } from "react-router-dom";
import { Header } from "./components";
import { ShowProvider, FilterProvider } from "./contexts";

function App() {
  return (
    <ShowProvider>
      <FilterProvider>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<Pages.HomePage />} />
            <Route path="/search" element={<Pages.SearchPage />} />
            <Route path="/shows" element={<Pages.ShowsPage />} />
            <Route path="/shows/:id" element={<Pages.ShowPage />} />
            <Route path="*" element={<Pages.NotFoundPage />} />
          </Route>
        </Routes>
      </FilterProvider>
    </ShowProvider>
  );
}

export default App;
