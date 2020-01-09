import React from 'react'
import { string, object } from 'prop-types'
import { intlShape } from 'react-intl'
import ReactMarkdown from 'react-markdown'

const MarkedLocale = ({ id, values, className }, { intl: { formatMessage } }) => (
  <ReactMarkdown source={formatMessage({id}, values)} className={className} />
)

MarkedLocale.contextTypes = {
  intl: intlShape,
}

MarkedLocale.propTypes = {
  id: string.isRequired,
  values: object,
}

export default MarkedLocale
