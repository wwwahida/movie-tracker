import './App.css'
import * as Pages from './pages'

function App() {
  return (
    <>
      <Pages.HomePage />
      <Pages.NotFoundPage />
      <Pages.SearchPage />
      <Pages.ShowPage />
      <Pages.ShowsPage />
    </>
  )
}

export default App