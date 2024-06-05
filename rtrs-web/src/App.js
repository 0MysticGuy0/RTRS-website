import AppRouter from './components/AppRouter';
import MyModal from './components/UI/MyModal/MyModal';
import Login from './pages/Login';
import Register from './pages/Register';
import './styles/App.css';

function App() {
  return (
    <div className="App">
        <AppRouter/>
    </div>
  );
}

export default App;
