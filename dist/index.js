'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var PropTypes = _interopDefault(require('prop-types'));

var Button = function Button(props) {
  return React.createElement(
    'button',
    { className: 'ku-c-button ku-c-button--primary' },
    props.children
  );
};

Button.propTypes = {
  children: PropTypes.string.isRequired
};

exports.Button = Button;
//# sourceMappingURL=index.js.map
