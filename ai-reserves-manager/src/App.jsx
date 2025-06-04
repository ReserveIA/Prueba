import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Industries from './components/Industries';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import ContactForm from './components/ContactForm';
import { FormProvider } from './context/FormContext';
import './index.css';

function App() {
  return (
    <FormProvider>
      <div className="min-h-screen">
        <Header />
        <Hero />
        <Features />
        <Industries />
        <Pricing />
        <Footer />
        <ContactForm />
      </div>
    </FormProvider>
  );
}

export default App;
