import React, { useState } from 'react';
import CountdownSection from "./components/countdown";
import Hero from "./components/hero";
import MeetFounder from "./components/meetFounder";
import Services from "./components/services";
import CTASection from "./components/CTASection";
import ContactForm from "./components/ContactForm";

function App() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleFormClose = () => {
    setIsFormOpen(false);
  };

  return (
    <>
      <Hero />
      <MeetFounder />
      <Services />
      <CountdownSection />
      <CTASection />
      <ContactForm onClose={handleFormClose} />
    </>
  );
}

export default App;
