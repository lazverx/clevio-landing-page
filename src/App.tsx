import Landing from './pages/Landing'
import ClevioPro from './pages/ClevioPro'
import { LanguageProvider } from './i18n'

export default function App() {
  const path = typeof window !== 'undefined' ? window.location.pathname : '/'
  const search = typeof window !== 'undefined' ? window.location.search : ''
  const isStaffView = path === '/staff' || search.includes('view=staff')

  return (
    <LanguageProvider>
      {isStaffView ? <Landing /> : <ClevioPro />}
    </LanguageProvider>
  )
}
