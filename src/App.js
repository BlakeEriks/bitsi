import './App.css';
import Dashboard from './component/Dashboard';
import Footer from './component/Footer';
import Header from './component/Header';
import SidePanel from './component/SidePanel';
import { HorizontalFlexBox } from './styles/Boxes';

const App = () => {
  return (
    <div className="App">
      <Header />
      <HorizontalFlexBox height='calc(100vh - 176px);'>
        <SidePanel />
        <Dashboard />
      </HorizontalFlexBox>
      <Footer />
    </div>
  );
}

export default App;