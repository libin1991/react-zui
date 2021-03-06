/**
 * 标签选择
 */
"use strict";

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

require('./less/month-picker.less');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Icon = require('./Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _Picker = require('./Picker');

var _Picker2 = _interopRequireDefault(_Picker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var YearData = ['至今'];
for (var i = new Date().getFullYear(); i > 1970; i--) {
    YearData.push(i);
}

var MonthData = [];
for (var _i = 1; _i <= 12; _i++) {
    _i = _i < 10 ? '0' + _i : _i;
    MonthData.push(_i);
}

var MonthPicker = function (_React$Component) {
    (0, _inherits3.default)(MonthPicker, _React$Component);

    function MonthPicker() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, MonthPicker);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = MonthPicker.__proto__ || (0, _getPrototypeOf2.default)(MonthPicker)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            year: new Date().getFullYear()
        }, _this.render = function () {
            var prefix = _this.props.prefix;
            var status = _this.props.status;
            var value = _this.props.value || '-';
            return _react2.default.createElement(
                _Picker2.default,
                { className: prefix + '-month-picker', status: status },
                _react2.default.createElement(
                    'ul',
                    { className: prefix + '-month-picker-year-list' },
                    YearData.map(function (item, key) {
                        var cls = item == _this.state.year ? 'active' : '';
                        return _react2.default.createElement(
                            'li',
                            { className: prefix + '-month-picker-year-list-item ' + cls, key: key, onClick: function onClick() {
                                    _this.setState({ year: item, month: '01' });
                                    item == '至今' && _this.props.onChange('至今');
                                } },
                            item
                        );
                    })
                ),
                _react2.default.createElement(
                    'ul',
                    { className: prefix + '-month-picker-month-list' },
                    _this.state.year == '至今' ? null : MonthData.map(function (item, key) {
                        var cls = item == value.split('-')[1] ? 'active' : '';
                        return _react2.default.createElement(
                            'li',
                            { className: prefix + '-month-picker-month-list-item ' + cls, key: key, onClick: function onClick() {
                                    _this.props.onChange(_this.state.year + '-' + item);
                                } },
                            item,
                            '\u6708',
                            cls == 'active' ? _react2.default.createElement(_Icon2.default, { type: 'check' }) : null
                        );
                    })
                )
            );
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    return MonthPicker;
}(_react2.default.Component);

MonthPicker.defaultProps = {
    status: '',
    prefix: 'zui',
    name: '选择日期',
    onChange: function onChange() {}
};
exports.default = MonthPicker;