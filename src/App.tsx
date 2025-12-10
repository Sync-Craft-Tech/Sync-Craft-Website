// ===========================================
// Imports
// ===========================================
import './App.css';

// Sections used in the page
import ContactUsComponents from './components/custom/ContactUs.components';
import ServicesComponent from './components/custom/Services.components';
import HeroComponents from './components/custom/Hero.components';
function App() {
  
  return (
    <>
      {/* Hero Sections */}
      <HeroComponents />
      {/* Services Sections */}
      <ServicesComponent />
      {/* Contact Section */}
      <ContactUsComponents />
    </>
  );
}

export default App;