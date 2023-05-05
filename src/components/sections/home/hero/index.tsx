import { ViewportHeightBox } from 'next-real-viewport'
import React from 'react'

export const Hero = () => {
  return (
    <ViewportHeightBox>
      My full height content. A mobile menu, maybe.
    </ViewportHeightBox>
  )
}
