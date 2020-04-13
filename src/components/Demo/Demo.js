import React from 'react'
import PropTypes from 'prop-types'

const Demo = ({ children }) => <p className="c-demo">{children}</p>

Demo.propTypes = {
  children: PropTypes.string.isRequired
}

export default Demo
