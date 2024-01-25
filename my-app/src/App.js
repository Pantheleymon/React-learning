// import logo from './logo.svg';
import './App.css';

const Header = () => {
  return <h2>Hellow!</h2>
}

const Field = () => {
  return <input placeholder="Type here..." type="text" />
}

function Btn() {
  const text = <span>Зарегистрироваться</span>;
  const logged = true;

  return <button>{logged ? 'Войти' : text}</button>
}

function App() {
  return (
    <div className="App">
      <Header/>
      <Field/>
      <Btn/>
    </div>
  );
}

export default App;
