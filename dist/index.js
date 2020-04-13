'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var PropTypes = _interopDefault(require('prop-types'));

var Demo = function Demo(_ref) {
  var children = _ref.children;
  return React.createElement(
    'p',
    { className: 'c-demo' },
    children
  );
};

Demo.propTypes = {
  children: PropTypes.string.isRequired
};

exports.Demo = Demo;
//# sourceMappingURL=index.js.map
