import React from 'react'
import {getContext} from 'recompose'
import PropTypes from 'prop-types'

const withEither = (
  conditionalRenderingFn,
  EitherComponent
) => Component => props =>
  conditionalRenderingFn(props)
    ? <EitherComponent {...props} />
    : <Component {...props} />


const withServer = getContext({server: PropTypes.object})

export {withEither, withServer}
