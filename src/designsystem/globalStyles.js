import { css } from 'styled-components'
import { ds } from './index'
// import fluidType, { fluidSpace } from '../utils/fluidType'

export const baseline = ds.pxTo(35, 25, 'rem')
// const baseFluidType = fluidType('15px', '20px', '320px', '1000px')
// const baseFluidType = fluidSpace('16px', '25px', '320px', '1000px')

// global styles
export default `
  @supports (--theme-foreground: #fff) {
    :root {
      --theme-foreground: #fff;
      --theme-background: #000;
    }

    :root.theme-inverse {
      --theme-foreground: #000;
      --theme-background: #fff;
    }
  }
  /* 16px @ 300px increasing to 25px @ 1000px */
  @media (min-width: 300px) {
    :root {
      font-size: calc(1rem + ((1vw - 3px) * 1.2857));
      /* Where: * 1.2857 = 100 * font_Size_Difference / viewport_Width_Difference */
    }
  }
  /* Prevent font scaling beyond this breakpoint */
  @media (min-width: 1000px) {
    :root {
      font-size: 25px;
    }
  }

  html {
    box-sizing: border-box;
    text-size-adjust: 100%;
    text-rendering: optimizeLegibility;
    scroll-behaviour: smooth;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
  }

  @font-face {
    font-family: 'Colfax';
    font-weight: normal;
    src: url('/public/fonts/ColfaxWebRegularSub.woff') format('woff');
  }

  @font-face {
    font-family: 'Colfax';
    font-weight: bold;
    src: url('/public/fonts/ColfaxWebBoldSub.woff') format('woff');
  }

  html {
    color: ${ds.color('bright')};
    color: var(--theme-foreground);
    background-color: ${ds.color('dark')};
    background-color: var(--theme-background);
    font-family: ${ds.get('type.fontFamilyBase')};
    line-height: ${ds.get('type.lineHeight.base')};
    scroll-behaviour: smooth;
  }

  p {
    margin-top: 0;
    margin-bottom: ${baseline};
  }

  /**
  * Headings
  */
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: ${ds.get('type.fontFamilyHeadings')};
    line-height: ${ds.get('type.lineHeight.headings')};
    margin-top: 0;
    margin-bottom: ${baseline};
  }

  h1 {
    font-size: ${ds.fs('xxl')};
    margin-bottom: ${ds.pxTo(70, 25, 'rem')};
  }

  h2 {
    font-size: ${ds.fs('xl')};
  }

  h3 {
    font-size: ${ds.fs('l')};
  }

  h4 {
    font-size: ${ds.fs('m')};
  }

  h5,
  h6 {
    font-size: ${ds.fs('m')};
    margin-bottom: 0;
  }

  * + h1,
  * + h2,
  * + h3,
  * + h4,
  * + h5,
  * + h6 {
    margin-top: ${baseline};
  }

  ::-moz-selection {
    background: var(--theme-foreground);
    color: var(--theme-background);
  }

  ::selection {
    background: var(--theme-foreground);
    color: var(--theme-background);
  }
`

export const linkStyles = css`
  word-wrap: break-word;
  text-decoration: none;

  &:link,
  &:visited {
    color: ${ds.color('bright')};
    color: var(--theme-foreground);
  }

  &:hover,
  &:active {
    color: ${ds.color('dark')};
    color: var(--theme-background);
    background-color: ${ds.color('bright')};
    background-color: var(--theme-foreground);
  }
`

export const paddedLinkStyles = css`
  ${linkStyles};
  display: inline-block;
  padding: 0.1em 0.6em;
`

export const codeStyles = css`
  code,
  pre {
    font-family: ${ds.get('type.fontFamily.mono')};
    font-size: ${ds.fs('xs')};
    color: ${ds.color('dark')};
    color: var(--theme-background);
    background-color: ${ds.color('bright')};
    background-color: var(--theme-foreground);
  }

  code {
    padding: 2px 4px;
  }

  pre {
    position: relative;
    display: block;
    padding: ${baseline};
    margin: 0 0 ${baseline};
    /* max-height: 90vh; */
    overflow: auto;
    tab-size: 3;
    white-space: pre;

    code {
      padding: 0;
      color: ${ds.color('bright')};
      color: var(--theme-foreground);
      background-color: ${ds.color('dark')};
      background-color: var(--theme-background);
      border: 0;
    }
  }
`
