'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

require('./less/modal.less');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Mask = require('./Mask');

var _Mask2 = _interopRequireDefault(_Mask);

var _Icon = require('./Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Modal = function (_React$Component) {
    (0, _inherits3.default)(Modal, _React$Component);

    function Modal() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, Modal);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Modal.__proto__ || (0, _getPrototypeOf2.default)(Modal)).call.apply(_ref, [this].concat(args))), _this), _this.state = {}, _this.componentWillReceiveProps = function (nextProps) {
            _this.setState({
                visible: nextProps.visible
            });
        }, _this.onCloseClick = function () {
            _this.setState({ visible: false });
            _this.props.onClose();
        }, _this.render = function () {
            var prefix = _this.props.prefix;
            var title = _this.props.title;
            return _this.state.visible ? _react2.default.createElement(
                'div',
                { className: prefix + '-modal open ' + _this.props.className },
                _react2.default.createElement(_Mask2.default, { onClick: _this.onCloseClick }),
                _react2.default.createElement(
                    'div',
                    { className: prefix + '-modal-content' },
                    _react2.default.createElement(
                        'div',
                        { className: prefix + '-modal-close', onClick: _this.onCloseClick },
                        _react2.default.createElement(_Icon2.default, { type: 'close' })
                    ),
                    title && _react2.default.createElement(
                        'div',
                        { className: prefix + '-modal-header' },
                        title
                    ),
                    _react2.default.createElement(
                        'div',
                        null,
                        _this.props.children
                    )
                )
            ) : null;
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    return Modal;
}(_react2.default.Component);

Modal.defaultProps = {
    prefix: 'zui',
    visible: false,
    onClose: function onClose() {}
};
exports.default = Modal;