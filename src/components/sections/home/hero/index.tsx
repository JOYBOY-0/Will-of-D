import * as St from '@bsmnt/scrollytelling'
import React from 'react'

import s from './styles.module.css'

export const Hero = () => {
  return (
    <St.Root start="top top" end="bottom top+=50%">
      <St.Pin childHeight={0} pinSpacerHeight={'100vh'}>
        <div className="h-full-vh w-full-vw grid place-content-center">
          <h1 className={s.heroTitle}>
            <span className="font-serif font-light">WEALTH</span>
            <span className="font-glare">FAME</span>
            <span className="font-sans">POWER</span>
          </h1>
        </div>
      </St.Pin>
    </St.Root>
  )
}
