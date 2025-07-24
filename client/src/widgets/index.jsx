import React from 'react'

// Static exports (loaded immediately)
export { default as Clock } from './Clock'
export { default as Calculator } from './Calculator'
export { default as SoundCloud } from './Soundcloud'
// export { default as Jokes } from './Jokes'
// export { default as Quotes } from './Quotes'

// Dynamic imports using React.lazy() - loaded on demand
export const ClockLazy = React.lazy(() => import('./Clock'))
export const CalculatorLazy = React.lazy(() => import('./Calculator'))
export const SoundCloudLazy = React.lazy(() => import('./Soundcloud'))
// export const JokesLazy = React.lazy(() => import('./Jokes'))
// export const QuotesLazy = React.lazy(() => import('./Quotes'))

// Dynamic import function for runtime loading
export const importWidget = async (widgetName) => {
  switch (widgetName) {
    case 'Clock':
      return (await import('./Clock')).default
    case 'Calculator':
      return (await import('./Calculator')).default
    case 'SoundCloud':
      return (await import('./Soundcloud')).default
    // case 'Jokes':
    //   return (await import('./Jokes')).default
    // case 'Quotes':
    //   return (await import('./Quotes')).default
    default:
      throw new Error(`Widget ${widgetName} not found`)
  }
}
