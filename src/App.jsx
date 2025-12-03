import { HeroHeader } from '@/components/header'
import HeroSection from '@/components/hero-section'
import Features from '@/components/features'
import FooterSection from '@/components/footer'
import ContentSection from '@/components/content'
import GettingStarted from '@/components/getting-started'

function App() {
  return (
    <>
      <HeroHeader />
      <HeroSection />
      <ContentSection />
      <Features />
      <GettingStarted />
      <FooterSection />
    </>
  )
}

export default App
