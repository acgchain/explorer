import React from 'react'
import PropTypes from 'prop-types'
import AccountLink from './AccountLink'

const Asset = ({code, issuer, type}) => {
  const isLumens = type === 'native'
  const propCode = isLumens ? 'SPC' : code
  return (
    <span>
      {propCode}{' '}
      {!isLumens && (
        <span style={{fontSize: 'x-small'}}>
          [<AccountLink account={issuer} />]
        </span>
      )}
    </span>
  )
}

Asset.propTypes = {
  code: PropTypes.string,
  issuer: PropTypes.string,
  type: PropTypes.string.isRequired,
}

export default Asset
