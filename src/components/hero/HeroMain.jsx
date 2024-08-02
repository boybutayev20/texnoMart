import React from 'react'
import ImageCarousel from './Hero'
import AutoScrollingCarousel from './HeroBottom'
import HeroCategory from './HeroCategory'

const HeroMain = () => {
  return (
    <div>
        <ImageCarousel/>
        <AutoScrollingCarousel/>
        <HeroCategory/>
    </div>
  )
}

export default HeroMain