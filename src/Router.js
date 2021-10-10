import Body from './component/body/Body';
import Footer from './component/footer/Footer';
import Header from './component/header/Header';
import './router.scss';

function App() {
  return (
    <div className="App container-fluid">
      <Header/>
      <Body/>
      <Footer/>
    </div>
  );
}

export default App;
