import * as St from '@bsmnt/scrollytelling'
import React from 'react'
import SplitType from 'split-type'

import { useIsomorphicLayoutEffect } from '~/hooks/use-isomorphic-layout-effect'

import s from './styles.module.css'

export const NarratorIntro = () => {
  // we split the text into chars and words to animate them
  useIsomorphicLayoutEffect(() => {
    SplitType.create('#narrator-text')
  }, [])

  return (
    <St.Root>
      <St.Pin top={0} childHeight={0} pinSpacerHeight={'700vh'}>
        <div
          className="h-full-vh w-full-vw flex items-center justify-center 
        overflow-x-hidden relative bg-dark-void"
        >
          <St.Animation
            tween={[
              {
                start: 0,
                end: 92,
                from: {
                  opacity: 0,
                  ease: 'none'
                }
              },
              {
                start: 93,
                end: 100,
                to: {
                  scale: 16,
                  yPercent: -100
                }
              }
            ]}
          >
            <svg
              className="w-[85vw] absolute"
              viewBox="0 0 1247 634"
              origin={'bottom'}
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1246.13 0C1243.85 140.098 1198.49 269.324 1122.8 373.965C1009.15 531.307 827.571 633.109 623.067 633.109C418.564 633.109 236.983 531.307 123.339 373.965C47.6459 269.324 2.28534 140.098 0 0C4.29367 109.904 72.6462 209.42 181.858 282.413C294.601 357.829 450.628 404.575 623.067 404.575C795.507 404.575 951.533 357.829 1064.35 282.413C1173.56 209.42 1241.84 109.904 1246.13 0Z"
                fill="white"
              />
              <St.Animation
                tween={[
                  {
                    start: 83,
                    end: 90,
                    from: {
                      scaleX: 1.01,
                      scaleY: 2
                    }
                  }
                ]}
              >
                <path
                  d="M182.489 283.661C72.9389 210.443 4.37437 110.618 0.0673828 0.372559H1250.07C1245.76 110.618 1177.27 210.443 1067.71 283.661C954.552 359.312 798.042 406.202 625.067 406.202C452.093 406.202 295.583 359.312 182.489 283.661Z"
                  fill="#131211"
                />
              </St.Animation>
            </svg>
          </St.Animation>
          <St.Animation
            tween={[
              {
                target: '.word',
                start: 0,
                end: 30,
                from: {
                  opacity: 0,
                  stagger: {
                    each: 1.5
                  }
                }
              },
              {
                target: '.word',
                start: 55,
                end: 60,
                to: {
                  autoAlpha: 0,
                  filter: 'blur(28px)',
                  yPercent: -120,
                  scale: 1.3,
                  color: 'red',
                  stagger: {
                    each: 0.75
                  }
                }
              }
            ]}
          />
          <p id="narrator-text" className={s.narratorText}>
            The man who had acquired everything in this world, the Pirate King,
            Gol <span className="text-red-will">D.</span> Roger. The final words
            that were said at his execution sent people to the seas.
          </p>
        </div>
      </St.Pin>
    </St.Root>
  )
}
