import { Router } from './utils';
import { Provider } from 'react-redux';
import { Header } from './components/Header/Header';
import { setupStore } from './utils/store';
import './css/entry.css';

export default function App() {
  return (
    <Provider store={setupStore()}>
      <Header />
      <Router />
      <noscript>You need to enable JavaScript to run this app.</noscript>
    </Provider>
  );
}
