import '../src/components/style.css';
import Explore from './components/Explore';
import Header from './components/HeaderForm'
import NewRelease from './components/NewRelease';

function App() {
  return (
    <div>
      <Header/>
      <Explore/>
      <NewRelease/>
    </div>
  );
}

export default App;
