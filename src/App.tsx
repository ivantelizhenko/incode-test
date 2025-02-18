import { Toaster } from 'react-hot-toast';

import AppLayout from './ui/AppLayout';
import Fields from './ui/Fields';
import Header from './ui/Header';

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
