import { Router } from './utils';
import { Provider } from 'react-redux';
import { Header } from './components/Header/Header';
import { store } from './utils/store';
import './css/entry.css';

export default function App() {
  return (
    <Provider store={store}>
      <Header />
      <Router />
      <noscript>You need to enable JavaScript to run this app.</noscript>
    </Provider>
  );
}
