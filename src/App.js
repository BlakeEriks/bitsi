import './App.css';
import Dashboard from './component/Dashboard';
import Header from './component/Header';
import SidePanel from './component/SidePanel';
import { HorizontalFlexBox } from './styles/Boxes';

const App = () => {
  return (
    <div className="App">
      <Header />
      <HorizontalFlexBox >
        <SidePanel />
        <Dashboard />
      </HorizontalFlexBox>
    </div>
  );
}

export default App;