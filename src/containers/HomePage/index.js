
import React from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'
import MarkedLocale from 'components/MarkedLocale'

const navigate = (fn, path) => event => fn(path)
const HomePage = ({ history }) => (
  <div className='home'>
    <div className='hero banner' style={styles.hero}>
      <div>
        <MarkedLocale id='homePage.hero.title' />
        <MarkedLocale id='homePage.hero.body' />
        <MarkedLocale id='homePage.hero.cta' />
      </div>
    </div>

    <div className='banner bannerOne'>
        <MarkedLocale id='homePage.bannerOne.title' />
        <MarkedLocale id='homePage.bannerOne.body' />
        <img src={logoOutline} />
    </div>

    <div className='banner bannerTwo'>
        <MarkedLocale id='homePage.bannerTwo.title' />
        <div className='column'>
          <MarkedLocale id='homePage.bannerTwo.left' />
          <img src={iconEverywhere} />
        </div>
        <div className='column'>
          <MarkedLocale id='homePage.bannerTwo.right' />
          <img src={iconWallet} />
        </div>
    </div>
    <div className='cards'>
        <div className='card last' style={styles.cards[0]}>
          <MarkedLocale id='cards.0.title' />
          <MarkedLocale id='cards.0.body' />
        </div>
        <div className='card' style={styles.cards[1]}>
          <img src={iconThermo} />
          <MarkedLocale id='cards.1.title' className='title' />
          <MarkedLocale id='cards.1.body' />
        </div>
        <div className='card' style={styles.cards[2]}>
          <img src={iconPlay} />
          <MarkedLocale id='cards.2.title' className='title' />
          <MarkedLocale id='cards.2.body' />
        </div>
        <div className='card' style={styles.cards[3]}>
          <img src={iconTimeSave} />
          <MarkedLocale id='cards.3.title' className='title' />
          <MarkedLocale id='cards.3.body' />
        </div>
        <div className='card' style={styles.cards[4]}>
          <img src={iconRenewables} />
          <MarkedLocale id='cards.4.title' className='title' />
          <MarkedLocale id='cards.4.body' />
        </div>
    </div>
    <div className='bannerThree' style={styles.bannerThree}>
      <div>
        <MarkedLocale id='homePage.bannerThree.title' />
        <MarkedLocale id='homePage.bannerThree.body' />
        <small>
          <h5><MarkedLocale id='misc.example' /></h5>
          <MarkedLocale id='homePage.bannerThree.example' />
        </small>
      </div>
    </div>

    <div className='bannerFour'>
      <MarkedLocale id='homePage.bannerFour.title' />
      <div className="column">
        <MarkedLocale id='homePage.bannerFour.one' />
      </div>
      <div className="column">
        <MarkedLocale id='homePage.bannerFour.two' />
        <br /><br />
        <a href="#"><MarkedLocale id='homePage.bannerFour.download' /></a>
      </div>
      <div className="column renderTwo" style={styles.bannerFour}></div>
    </div>

    <footer>
      <FormattedMessage id='homePage.footer' />
    </footer>
  </div>
)

const bannerThreeBg = require('assets/app-example.png')
const heroBg = require('assets/poolhouse.jpg')
const iconEverywhere = require('assets/icon-everywhere.svg')
const iconPlay = require('assets/icon-play.svg')
const iconRenewables = require('assets/icon-renewables.svg')
const iconThermo = require('assets/icon-thermo.svg')
const iconTimeSave = require('assets/icon-time-save.svg')
const iconWallet = require('assets/icon-wallet.svg')
const logoOutline = require('assets/logo-outline.svg')
const renderOneBg = require('assets/render-one.jpg')
const renderTwoBg = require('assets/render-two.jpg')

const styles = {
  hero: { backgroundImage:`url(${heroBg})` },
  cards: [
    { backgroundImage:`url(${renderOneBg}), linear-gradient(#ffffff, #f4f4f4 80%)` },
    { background:`radial-gradient(circle, #dadada, #f7f7f7)` },
    { background:`radial-gradient(ellipse at top, #dadada, #f7f7f7)` },
    { background:`radial-gradient(ellipse at bottom, #dadada, #f7f7f7)` },
    { background:`radial-gradient(circle, #dadada, #f7f7f7)` },
  ],
  bannerThree: { backgroundImage:`url(${bannerThreeBg}), radial-gradient(circle at 75%, #333333, #646464)` },
  bannerFour: { backgroundImage:`url(${renderTwoBg})` },
}

HomePage.contextTypes = {
  intl: PropTypes.object.isRequired,
}

HomePage.propTypes = {
  history: PropTypes.object.isRequired,
}

export default HomePage
