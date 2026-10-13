import Landing from './pages/Landing'
import { LanguageProvider } from './i18n'

export default function App() {
  return (
    <LanguageProvider>
      <Landing />
    </LanguageProvider>
  )
}


