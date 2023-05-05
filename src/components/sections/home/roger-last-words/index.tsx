import * as St from '@bsmnt/scrollytelling'
import React from 'react'

export const RogerLastWords = () => {
  return (
    <>
      <St.Root scrub={1.5}>
        <St.Pin top={0} childHeight={0} pinSpacerHeight={'500vh'}>
          <div className="h-full-vh w-full-vw grid bg-white overflow-x-hidden">
            <St.Animation
              tween={[
                {
                  start: 0,
                  end: 100,
                  to: {
                    xPercent: -100
                  }
                }
              ]}
            >
              <div className="flex items-center whitespace-nowrap">
                <p className=" text-[35vh] text-dark-void font-glare font-extrabold">
                  My wealth and treasure?
                </p>
              </div>
            </St.Animation>
          </div>
        </St.Pin>
      </St.Root>
    </>
  )
}
