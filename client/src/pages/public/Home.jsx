import React from 'react'
import Navbar from '../../components/Navbar.jsx'
import Footer from '../../components/Footer.jsx'
import HeroSection from '../../components/HeroSection.jsx'
import FeaturesSection from '../../components/FeaturesSection.jsx'
import Howitworks from '../../components/Howitworks.jsx'
import WhyAstroGem from '../../components/WhyAstroGem.jsx'
import FAQSection from '../../components/FAQSection.jsx'

const Home = () => {
  return (
    <div>
      <Navbar />

      <section id="hero">
        <HeroSection />
      </section>

      <section id="features">
        <FeaturesSection />
      </section>

      <section id="how-it-works">
        <Howitworks />
      </section>

      <section id="why-us">
        <WhyAstroGem />
      </section>

      <section id="faq">
        <FAQSection />
      </section>

      <Footer />
    </div>
  )
}

export default Home