import Header from './components/Header';
import Fields from './components/Fields';
import AppLayout from './components/AppLayout';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <AppLayout>
      <Header />
      <Fields />
      <Toaster />
    </AppLayout>
  );
}

export default App;
