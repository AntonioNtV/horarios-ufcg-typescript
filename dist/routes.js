"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _ScheduleController = require('./controllers/ScheduleController'); var _ScheduleController2 = _interopRequireDefault(_ScheduleController);

const routes = _express.Router.call(void 0, )

routes.get('/', _ScheduleController2.default.index)

exports. default = routes
