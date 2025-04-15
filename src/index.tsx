import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import { I18nextProvider } from 'react-i18next'
import 'antd/dist/reset.css'
import Router from './router'
import i18n from './translation'

const App = () => (
  <BrowserRouter>
    <I18nextProvider i18n={i18n}>
      <Router />
    </I18nextProvider>
  </BrowserRouter>
)
const root = createRoot(document.getElementById('root')!)
root.render(<App />)
