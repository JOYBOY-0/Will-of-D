import '~/css/global.scss'

import localFont from '@next/font/local'
/* MISC */
import Lenis from '@studio-freight/lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import type { NextComponentType, NextPageContext } from 'next'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import * as React from 'react'

import { useAppStore } from '~/context/use-app-store'
import {
  basementLog,
  gaTrackingId,
  isClient,
  isDev,
  isProd
} from '~/lib/constants'
import { GAScripts, useAppGA } from '~/lib/ga'

// TODO delete this basement log if not a basement project.
if (isProd && isClient) {
  // eslint-disable-next-line no-console
  console.log(basementLog)
}

/* CUSTOM APP */

const FragmentText = localFont({
  src: [
    {
      path: '../fonts/PPFragment-TextRegular.woff2',
      weight: '400'
    }
  ],
  display: 'swap'
})

const FragmentGlare = localFont({
  src: [
    {
      path: '../fonts/PPFragment-GlareRegular.woff2',
      weight: '400'
    }
  ],
  display: 'swap'
})

const FragmentSerif = localFont({
  src: [
    {
      path: '../fonts/PPFragment-SerifLight.woff2',
      weight: '300'
    }
  ],
  display: 'swap'
})

const FragmentSans = localFont({
  src: [
    {
      path: '../fonts/PPFragment-SansRegular.woff2',
      weight: '400'
    }
  ],
  display: 'swap'
})

const App = ({ Component, pageProps, ...rest }: AppProps) => {
  if (gaTrackingId) useAppGA()

  useOverflowDebuggerInDev()
  useUserIsTabbing()
  useFontsLoaded()

  const getLayout: GetLayoutFn =
    (Component as any).getLayout ||
    (({ Component, pageProps }) => <Component {...pageProps} />)

  // init lenis scroll
  const scrollRef = React.useRef<Lenis>()
  React.useEffect(() => {
    scrollRef.current = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false
    })

    scrollRef.current.on('scroll', ScrollTrigger.update)

    const updateFunc: gsap.TickerCallback = (time) => {
      scrollRef.current?.raf(time * 1000)
    }

    gsap.ticker.add(updateFunc, false, true)

    return () => {
      gsap.ticker.remove(updateFunc)
      scrollRef.current?.destroy()
    }
  }, [])

  return (
    <>
      {gaTrackingId && <GAScripts />}
      <Head>
        <style
          type="text/css"
          dangerouslySetInnerHTML={{
            __html: `
        :root {
          --font-sans: ${FragmentSans.style.fontFamily}, var(--font-system), sans-serif;
          --font-serif: ${FragmentSerif.style.fontFamily}, var(--font-system), serif;
          --font-glare: ${FragmentGlare.style.fontFamily}, var(--font-system), serif;
          --font-text: ${FragmentText.style.fontFamily}, var(--font-system), serif;
        }
        `
          }}
        />
      </Head>
      {getLayout({ Component, pageProps, ...rest })}
    </>
  )
}

/* APP HOOKS */

const useOverflowDebuggerInDev = () => {
  React.useEffect(() => {
    if (!isDev) return
    let mousetrapRef: Mousetrap.MousetrapInstance | undefined = undefined
    import('mousetrap').then(({ default: mousetrap }) => {
      mousetrapRef = mousetrap.bind(['command+i', 'ctrl+i', 'alt+i'], () => {
        document.body.classList.toggle('inspect')
      })
    })

    return () => {
      mousetrapRef?.unbind(['command+i', 'ctrl+i', 'alt+i'])
    }
  }, [])
}

const useUserIsTabbing = () => {
  React.useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.code === `Tab`) {
        document.body.classList.add('user-is-tabbing')
      }
    }

    function handleMouseDown() {
      document.body.classList.remove('user-is-tabbing')
    }

    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('mousedown', handleMouseDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('mousedown', handleMouseDown)
    }
  }, [])
}

const useFontsLoaded = () => {
  React.useEffect(() => {
    const maxWaitTime = 1500 // tweak this as needed.

    const timeout = window.setTimeout(() => {
      onReady()
    }, maxWaitTime)

    function onReady() {
      window.clearTimeout(timeout)
      useAppStore.setState({ fontsLoaded: true })
      document.documentElement.classList.add('fonts-loaded')
    }

    try {
      document.fonts.ready
        .then(() => {
          onReady()
        })
        .catch((error: unknown) => {
          console.error(error)
          onReady()
        })
    } catch (error) {
      console.error(error)
      onReady()
    }
  }, [])
}

/* TYPES */

export type Page<P = Record<string, unknown>> = NextComponentType<
  NextPageContext,
  Record<string, unknown>,
  P
> & { getLayout?: GetLayoutFn<P> }

export type GetLayoutFn<P = Record<string, unknown>> = (
  props: Omit<AppProps<P>, 'pageProps'> & { pageProps: P }
) => React.ReactNode

/* EXPORT */

export default App
