import React, { Fragment } from 'react'
import { Helmet } from 'react-helmet'
import { injectGlobal } from 'styled-components'
import globalStyles from '../designsystem/globalStyles'
import Footer from '../components/Footer'
import ThemeSwitch from '../components/ThemeSwitch'

injectGlobal`
  ${globalStyles}
`

export default ({
  children,
  title = 'This is the default title',
  description = 'Personal website for Zander Martineau',
  canonical = null,
}) => (
  <Fragment>
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {canonical && <link rel="canonical" href={canonical} />}
      <link
        rel="alternate"
        href="/atom.xml"
        type="application/atom+xml"
        title="RSS Feed"
      />
    </Helmet>

    {children}

    <Footer />
    <ThemeSwitch />
  </Fragment>
)
