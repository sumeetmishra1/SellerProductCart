import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { FormContextProvider } from './components/store/form-context';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<FormContextProvider>
<App />
</FormContextProvider>
);

