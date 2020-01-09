import React from 'react'
import { string, node } from 'prop-types'
import LocaleSelect from 'containers/LocaleSelect'

const logoUrl = require('assets/logo.svg')
const navigate = (fn, path) => event => fn(path)
const Navigation = ({ title, children }) => (
  <div className='navigation'>
    <div className='app-bar'>
      <a href='/'>
        <img src={logoUrl} />
        <h1>{title}</h1>
      </a>
      <div className='center-content' />
      <div>{children}</div>
      <div className='locale-select-container'><LocaleSelect /></div>
    </div>
  </div>
)

Navigation.propTypes = {
  /**
   * The navigation title
   */
  title: string.isRequired,
  /**
   * Children components to be rendered on the right
   */
  children: node,
}

export default Navigation
