import { Meta } from '~/components/common/meta'
import { PageLayout } from '~/components/layout/page'
import { Hero } from '~/components/sections/home/hero'
import { NarratorIntro } from '~/components/sections/home/narrator-intro'
import { RogerLastWords } from '~/components/sections/home/roger-last-words'

const HomePage = () => {
  return (
    <PageLayout>
      <Meta
        title="Will of D."
        description="A One Piece scrollytelling - fan site."
      />
      <Hero />
      <NarratorIntro />
      <RogerLastWords />
    </PageLayout>
  )
}

export default HomePage
