import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import RequestQuote from './pages/RequestQuote'
import ThankYou from './pages/ThankYou'
import FloatingContact from './components/FloatingContact'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/request-quote" element={<RequestQuote />} />
        <Route path="/thank-you" element={<ThankYou />} />
      </Routes>
      <FloatingContact />
    </>
  )
}

export default App
