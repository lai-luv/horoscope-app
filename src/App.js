// import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';
import ErrorBoundary from './ ErrorBoundary';

function App() {
  return (
    <div className="App">
      <ErrorBoundary fallback="pleeeeeeaaaassse work!!!!!!">
        <Home />
      </ErrorBoundary>
    </div>
  );
}

export default App;
