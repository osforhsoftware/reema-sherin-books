import Hero from './components/Hero'
import BookShowcase from './components/BookShowcase'
import FeatureRow from './components/FeatureRow'
import AuthorStory from './components/AuthorStory'
import SocialCollage from './components/SocialCollage'
import Footer from './components/Footer'

export default function App() {
  return (
    <main className="min-h-screen overflow-hidden bg-white text-black">
      <Hero
        headline="Poetry for Life’s Quiet, Honest Moments"
        subheadline="Explore Reema Sherin’s reflections on love, healing, inner strength, and the emotions woven into everyday life."
      />
      <BookShowcase />
      <FeatureRow />
      <AuthorStory />
      <SocialCollage />
      <Footer />
    </main>
  )
}

