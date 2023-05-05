import * as Scrollytelling from '@bsmnt/scrollytelling'
import React from 'react'
import SplitType from 'split-type'

import { useIsomorphicLayoutEffect } from '~/hooks/use-isomorphic-layout-effect'

export const NarratorIntro = () => {
  // const narratorText = useMemo(() => SplitType.create('#narrator-text'), [])

  useIsomorphicLayoutEffect(() => {
    SplitType.create('#narrator-text')
  }, [])

  return (
    <Scrollytelling.Root
      debug
      start="top top+=25%"
      end="bottom bottom"
      scrub={1.5}
    >
      <Scrollytelling.Pin childHeight={0} pinSpacerHeight={'300vh'}>
        <div className="h-full-vh w-full-vw grid place-content-center">
          <Scrollytelling.Animation
            tween={[
              {
                target: '.word',
                start: 0,
                end: 45,
                from: {
                  opacity: 0,
                  stagger: {
                    each: 2
                  }
                }
              },
              {
                target: '.word',
                start: 80,
                end: 100,
                to: {
                  autoAlpha: 0,
                  filter: 'blur(25px)',
                  yPercent: -100,
                  stagger: {
                    each: 1.2
                  }
                }
              }
            ]}
          />
          <p
            id="narrator-text"
            className="text-white font-glare max-w-[85vw] text-[3.5vw]"
          >
            The man who had acquired everything in this world, the Pirate King,
            Gol <span className="text-red-will">D.</span> Roger. The final words
            that were said at his execution sent people to the seas.
          </p>
        </div>
      </Scrollytelling.Pin>
    </Scrollytelling.Root>
  )
}
