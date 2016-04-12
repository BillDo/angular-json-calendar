(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("angular-json-calendar", [], factory);
	else if(typeof exports === 'object')
		exports["angular-json-calendar"] = factory();
	else
		root["angular-json-calendar"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _calendar = __webpack_require__(1);
	
	var _calendar2 = __webpack_require__(2);
	
	var _calendar3 = __webpack_require__(3);
	
	var _month = __webpack_require__(11);
	
	var _week = __webpack_require__(12);
	
	var _day = __webpack_require__(13);
	
	exports.default = angular.module('bc.JsonCalendar', []).provider('bcCalendarConfig', _calendar.bcCalendarConfig).service('bcCalendarService', _calendar2.bcCalendarService).directive('bcCalendar', _calendar3.bcCalendarDirective).directive('bcMonth', _month.bcMonthDirective).directive('bcWeek', _week.bcWeekDirective).directive('bcDay', _day.bcDayDirective);

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var bcCalendarConfig = exports.bcCalendarConfig = function () {
	
	    // Define defaults
	
	    function bcCalendarConfig() {
	        _classCallCheck(this, bcCalendarConfig);
	
	        // The calendar will begin with today
	        // TODO: Remove 'add'
	        this.startDate = moment(new Date().toISOString()).startOf('day').add(1, 'days');
	
	        // The default interval type [day|week|month]
	        this.nestingDepth = 'month';
	
	        // How many of the interval type should be generated
	        this.count = 1;
	
	        // Define the different possible representations of the weekday
	        this.weekdayStyle = {
	            letter: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
	            abbreviation: ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'],
	            word: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Satday']
	        };
	
	        // Set the default word type (M vs Mon vs Monday)
	        this.weekTitleFormat = 'abbreviation';
	
	        // Should days be organized by week?
	        this.organizeWeeks = true;
	    }
	
	    _createClass(bcCalendarConfig, [{
	        key: '$get',
	        value: function $get() {
	            return this;
	        }
	    }]);
	
	    return bcCalendarConfig;
	}();

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var bcCalendarService = exports.bcCalendarService = function () {
	  function bcCalendarService() {
	    'ngInject';
	
	    _classCallCheck(this, bcCalendarService);
	  }
	
	  /**
	   * Test if days match
	   *
	   * @param {Date} date1
	   * @param {Date} date2
	   * @return {Bool} match
	   */
	  /*
	   *    daysMatch(date1, date2) {
	   *
	   *        let match = false;
	   *        const day1 = moment(date1).date();
	   *        const day2 = moment(date2).date();
	   *
	   *        if (day1 === day2) {
	   *            match = true;
	   *        }
	   *
	   *        return match;
	   *
	   *    }
	   */
	
	  /**
	   * Test if months match
	   *
	   * @param {Date} date1
	   * @param {Date} date2
	   * @return {Bool} match
	   */
	
	
	  _createClass(bcCalendarService, [{
	    key: 'doMonthsMatch',
	    value: function doMonthsMatch(date1, date2) {
	      var match = false;
	      var month1 = moment(date1).month();
	      var month2 = moment(date2).month();
	
	      if (month1 === month2) {
	        match = true;
	      }
	
	      return match;
	    }
	
	    /**
	     * Test if day is today
	     *
	     * @param {Date} date - The date to check
	     * @param {Date} today - The day to check against
	     * @return {Bool} isToday
	     */
	    /*
	     *    isToday(date, today) {
	     *
	     *        today = moment(today).startOf('day');
	     *
	     *        const dayToTest = moment(date).startOf('day');
	     *        const isToday = today.diff(dayToTest) ? false : true;
	     *
	     *        return isToday;
	     *
	     *    }
	     */
	
	    /**
	     * Update the date with the current time
	     *
	     * @param {Date} date
	     * @return {Date} updatedDate
	     */
	    /*
	     *    updateTime(date) {
	     *
	     *        let updatedDate;
	     *
	     *        // Get the current date
	     *        const jsDate = new Date().toISOString();
	     *        const currentHour = moment(jsDate).hour();
	     *        const currentMinutes = moment(jsDate).minutes();
	     *
	     *        // Zero out seconds and milliseconds
	     *        updatedDate = moment(date).set({
	     *            hour: currentHour,
	     *            minutes: currentMinutes,
	     *            second: 0,
	     *            millisecond: 0,
	     *        }).format();
	     *
	     *        return updatedDate;
	     *
	     *    }
	     */
	
	    /**
	     * Return an array of days for the passed in month
	     *
	     * @param {Integer} month
	     * @param {Integer} year
	     * @return {Array} days
	     */
	
	  }, {
	    key: 'getDaysInMonth',
	    value: function getDaysInMonth(month, year) {
	
	      var date = new Date(year, month, 1);
	      var days = [];
	
	      while (date.getMonth() === month) {
	        days.push(moment(date).hour(0).minute(0).second(0).format());
	        date.setDate(date.getDate() + 1);
	      }
	
	      return days;
	    }
	
	    /**
	     * Turn a count (e.g. '6') into an array: '[1,2,3,4,5,6]'
	     *
	     * @param {Integer} count
	     * @return {Array} days
	     */
	
	  }, {
	    key: 'createDaysArray',
	    value: function createDaysArray(count) {
	
	      var i = void 0;
	      var days = [];
	
	      for (i = 0; i < count; i += 1) {
	        days.push(i);
	      }
	
	      return days;
	    }
	  }]);
	
	  return bcCalendarService;
	}();

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	bcCalendarDirective.$inject = ["$compile"];
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.bcCalendarDirective = bcCalendarDirective;
	
	var _calendar = __webpack_require__(4);
	
	var _calendar2 = __webpack_require__(5);
	
	var _calendar3 = _interopRequireDefault(_calendar2);
	
	var _year = __webpack_require__(6);
	
	var _year2 = _interopRequireDefault(_year);
	
	var _month = __webpack_require__(7);
	
	var _month2 = _interopRequireDefault(_month);
	
	var _week = __webpack_require__(8);
	
	var _week2 = _interopRequireDefault(_week);
	
	var _day = __webpack_require__(9);
	
	var _day2 = _interopRequireDefault(_day);
	
	var _test = __webpack_require__(10);
	
	var _test2 = _interopRequireDefault(_test);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// TODO: turn these ^ into directives
	
	function bcCalendarDirective($compile) {
	    'ngInject';
	
	    // Define possible templates
	
	    var templates = {
	        year: _year2.default,
	        month: _month2.default,
	        week: _week2.default,
	        day: _day2.default
	    };
	
	    var directive = {
	        restrict: 'E',
	        replace: true,
	        scope: {},
	        bindToController: {
	            bcStartDate: '@?', // date - default to today
	            bcNestingDepth: '@?', // string [year|month|week|day] - defaults: month
	            bcCount: '@?', // integer - default to 1
	            bcWeekTitleFormat: '@?' },
	        // string [word|abbreviation|letter] - default: abbreviation
	        link: linkFunction,
	        templateUrl: _calendar3.default,
	        controller: _calendar.CalendarController,
	        controllerAs: 'vm'
	    };
	
	    return directive;
	
	    /**
	     * Link
	     */
	    function linkFunction($scope, $element, $attrs, vm) {
	
	        // Set the correct template based on the desired nesting depth
	        vm.getTemplateUrl = function () {
	            return templates[vm.nestingDepth];
	        };
	    }
	}

/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var CalendarController = exports.CalendarController = function () {
	    CalendarController.$inject = ["bcCalendarConfig", "bcCalendarService"];
	    function CalendarController(bcCalendarConfig, bcCalendarService) {
	        'ngInject';
	
	        _classCallCheck(this, CalendarController);
	
	        this.bcCalendarConfig = bcCalendarConfig;
	        this.bcCalendarService = bcCalendarService;
	
	        this._activate();
	    }
	
	    _createClass(CalendarController, [{
	        key: '_activate',
	        value: function _activate() {
	            // Define today's date
	            this.today = this.bcCalendarConfig.startDate;
	
	            // DEFAULTS
	            this.startDate = this.startDate || this.bcCalendarConfig.startDate;
	            this.count = parseInt(this.bcCount || this.bcCalendarConfig.count, 10);
	            this.nestingDepth = this.bcNestingDepth || this.bcCalendarConfig.nestingDepth;
	            this.weekdays = this.bcWeekTitleFormat ? this.bcCalendarConfig.weekdayStyle[this.bcWeekTitleFormat] : this.bcCalendarConfig.weekdayStyle[this.bcCalendarConfig.weekTitleFormat];
	            this.WEEK_LENGTH = 7;
	
	            // Define the calendar duration (or length)
	            this.calendarDuration = moment.duration(this.count, this.bcCalendarConfig.interval);
	
	            // Get the full count of days
	            this.calendarDays = this.calendarDuration.asDays();
	
	            // Get the current day of the month
	            this.todayDayOfMonth = moment(this.startDate).date();
	
	            // Get the current weekday
	            this.todayDayOfWeek = moment(this.startDate).day();
	
	            // Initially nothing is selected
	            this.selectedDate = null;
	
	            var JS_DATE = {
	                year: 2016,
	                month: 3,
	                day: 11
	            };
	
	            var needed = 100;
	            var tempDays = this._buildDays(needed, new Date(JS_DATE.year, JS_DATE.month, JS_DATE.day).toISOString());
	
	            /*
	             *console.log('tempDays: ', tempDays);
	             */
	
	            this.bcCollection = this._organizeMonths(tempDays);
	
	            console.log('this.bcCalendar: ', this.bcCalendar);
	
	            /*
	             *console.log('tempMonths: ', tempMonths);
	             */
	
	            // Build the calendar JSON
	            /*
	             *this.calendar = this.build(this.startDate, 2);
	             */
	        }
	
	        /**
	         * Build calendar
	         * TODO: Should this be a service?
	         * TODO: Abstract this out so I can better build the needed collection. Abstract out each part,
	         * building days, organizing weeks/months/years
	         *
	         * @param {String} start
	         * @param {Integer} duration
	         * @return {Array} collection
	         */
	
	    }, {
	        key: 'build',
	        value: function build(start, duration) {
	            var collection = [];
	            var monthsBuilt = -1;
	
	            // Loop to create months
	            while (monthsBuilt < duration) {
	                // Increment counter
	                monthsBuilt = monthsBuilt + 1;
	
	                // If not the first month generated, the start of the month should be at the beginning
	                // rather than the start date
	                if (monthsBuilt !== 0) {
	                    start = moment(start).startOf('month');
	                }
	
	                var days = this._getDaysInMonth(moment(start).add(monthsBuilt, 'months'));
	
	                // If this is the FIRST month
	                if (monthsBuilt === 0) {
	                    // Create the missing days for the padding
	                    var missingDays = this._padDaysLeft(days, this.todayDayOfWeek);
	
	                    // Add to the BEGINNING of our existing array
	                    days = missingDays.concat(days);
	                }
	
	                // If this is the LAST month
	                if (monthsBuilt === duration) {
	                    // Create the missing days for the padding
	                    var _missingDays = this._padWeekRight(days, days[days.length - 1]);
	
	                    // Add to the END of our existing array
	                    Array.prototype.push.apply(days, _missingDays);
	                }
	
	                // Add month to collection
	                collection.push(days);
	            }
	
	            if (this.organizeWeeks) {
	                collection = this._organizeWeeks(collection);
	            }
	
	            /*
	             *console.log('collection: ', collection);
	             */
	
	            return collection;
	        }
	
	        /**
	         * Check to see if the day is prior to the current date
	         * This is used to disable the unselectable days
	         *
	         * @param {Date} day
	         * @return {Bool}
	         */
	
	    }, {
	        key: 'isBeforeToday',
	        value: function isBeforeToday(date) {
	            return moment(date).isBefore(this.startDate);
	        }
	
	        /**
	         * Check to see if the day matches the current date
	         *
	         * @param {Date} day
	         * @return {Bool}
	         */
	
	    }, {
	        key: 'isDayToday',
	        value: function isDayToday(date) {
	            return moment(date).isSame(this.startDate);
	        }
	    }, {
	        key: 'isDaySelected',
	        value: function isDaySelected() {}
	    }, {
	        key: 'selectDate',
	        value: function selectDate() {}
	    }, {
	        key: '_buildDays',
	        value: function _buildDays(limit, start) {
	            var counter = 0;
	            var days = [];
	            var day = void 0;
	
	            while (counter < limit) {
	                // Create the day
	                day = moment(start).add(counter, 'days').toISOString();
	
	                // Add to the array
	                days.push({
	                    date: day
	                });
	
	                // Increment our counter
	                counter = counter + 1;
	            }
	
	            /*
	             *console.warn('build days: ', limit, start, days);
	             */
	
	            return days;
	        }
	
	        /**
	         * Return an array of dates for the passed in month
	         *
	         * @param {Date} startDate
	         * @return {Array} days
	         */
	
	    }, {
	        key: '_getDaysInMonth',
	        value: function _getDaysInMonth(startDate) {
	            var firstDate = moment(startDate);
	            var days = [];
	            var date = moment(startDate);
	
	            // As long as the month hasn't changed
	            while (moment(date).isSame(firstDate, 'month')) {
	                // Add the new day to our array
	                days.push(moment(date).startOf('day').format());
	
	                // Increment the date by one day
	                date = moment(date).add(1, 'days');
	            }
	
	            return days;
	        }
	
	        /**
	         * Turn a integer (e.g. '6') into an array: '[1,2,3,4,5,6]'
	         *
	         * @param {Integer} count
	         * @return {Array} days
	         */
	
	    }, {
	        key: '_integerToArray',
	        value: function _integerToArray(count) {
	            var i = void 0;
	            var days = [];
	
	            for (i = 0; i < count; i += 1) {
	                days.push(i);
	            }
	
	            return days;
	        }
	
	        /**
	         * Organize by month
	         *
	         * @param {Array} allDays - An array of all days
	         * @return {Array} collection - days organized into weeks and months
	         */
	
	    }, {
	        key: '_organizeMonths',
	        value: function _organizeMonths(allDays) {
	            var calendar = [];
	            var collection = allDays;
	            var month = void 0;
	            var dayOfMonth = moment(collection[0].date).date();
	            var daysInMonth = moment(collection[0].date).daysInMonth();
	
	            // Pad the beginning of the month with any missing days
	            // If the first day is not the first day of the month
	            if (moment(collection[0].date).date() > 0) {
	                // Pull this month's days from the collection
	                month = collection.slice(0, daysInMonth - (dayOfMonth - 1));
	
	                // Fill the missing days from the month
	                var pad = this._padDaysLeft(month[0].date, dayOfMonth - 1);
	
	                // Combine with the existing array
	                collection = pad.concat(collection);
	            }
	
	            // Split into months
	            // As long as there are days left in the collection
	            while (collection.length > 0) {
	
	                // Get the day of the month for the first date of the collection eg. '24'
	                dayOfMonth = moment(collection[0].date).date();
	
	                // Determine how many days there are this month (total)
	                daysInMonth = moment(collection[0].date).daysInMonth();
	
	                // Pull this month's days from the collection
	                month = collection.splice(0, daysInMonth - (dayOfMonth - 1));
	
	                // How many weekdays are prior to the first day of this month?
	                var daysNeededAtBeginning = moment(month[0].date).day();
	
	                // If days are needed for the first week
	                if (daysNeededAtBeginning > 0) {
	                    // Pad with blank tiles so that the first day is lined up in the correct column
	                    month = this._padBlankTiles(month, daysNeededAtBeginning, 'left');
	                }
	
	                // How many weekdays are after the last day of the month?
	                // (remember: weeks are zero-based)
	                var daysNeededAtEnd = this.WEEK_LENGTH - (moment(month[month.length - 1].date).day() + 1);
	
	                // If days are needed for the last week
	                if (daysNeededAtEnd > 0) {
	                    // Pad with blank tiles so that the first day is lined up in the correct column
	                    month = this._padBlankTiles(month, daysNeededAtEnd, 'right');
	                }
	
	                // Organize and add to the calendar array
	                calendar.push(this._organizeWeeks(month));
	            }
	
	            console.info('RETURNING: ', calendar);
	            return calendar;
	        }
	
	        /**
	         * Organize collection of days into sub collections of weeks
	         *
	         * @param {Array} days - array of days
	         * @return {Array} collection
	         */
	
	    }, {
	        key: '_organizeWeeks',
	        value: function _organizeWeeks(days) {
	            return this._chunk(days);
	        }
	
	        /**
	         * Split an array into chunks and return an array of these chunks
	         *
	         * @param {Array} group
	         * @param {Integer} groupsize - Chunk size. Defaults to 7 (one week).
	         * @return {Array} chunks
	         */
	
	    }, {
	        key: '_chunk',
	        value: function _chunk(group) {
	            var groupsize = arguments.length <= 1 || arguments[1] === undefined ? this.WEEK_LENGTH : arguments[1];
	
	            var sets = [];
	            var i = 0;
	            var chunks = group.length / parseInt(groupsize, 10);
	
	            while (i < chunks) {
	                sets[i] = group.splice(0, groupsize);
	                i = i + 1;
	            }
	
	            return sets;
	        }
	
	        /**
	         * Pad a collection with blank tiles at the beginning
	         *
	         * @param {Array} collection
	         * @param {Integer} count
	         * @return {Array} paddedCollection
	         */
	
	    }, {
	        key: '_padBlankTiles',
	        value: function _padBlankTiles(collection, count) {
	            var direction = arguments.length <= 2 || arguments[2] === undefined ? 'left' : arguments[2];
	
	            var i = void 0;
	            var days = [];
	
	            // Create array
	            for (i = 0; i < count; i += 1) {
	                days.push({
	                    date: null
	                });
	            }
	
	            // If direction is 'right'
	            if (direction === 'right') {
	                // pad the end
	                return collection.concat(days);
	            } else if (direction === 'left') {
	                // otherwise pad the beginning
	                return days.concat(collection);
	            }
	        }
	
	        /**
	         * Pad the beginning of a week
	         *
	         * @param {String} startDate - date to to work back from
	         * @param {Array} count - how many days to pad
	         * @return {Array} pad
	         */
	
	    }, {
	        key: '_padDaysLeft',
	        value: function _padDaysLeft(startDate, count) {
	            var pad = [];
	            var missingDays = this._integerToArray(count);
	
	            // Loop through missing days
	            for (var day in missingDays) {
	                // How many days to go back
	                var subtraction = parseInt(day, 10) + 1;
	
	                // Find that day
	                var previous = moment(startDate).subtract(subtraction, 'days').toISOString();
	
	                // Add to the beginning of the array
	                pad.unshift({
	                    date: previous
	                });
	            }
	
	            return pad;
	        }
	
	        /**
	         * Pad the beginning of a week
	         *
	         * @param {Array} days
	         * @return {Array} pad
	         */
	
	    }, {
	        key: '_padWeekRight',
	        value: function _padWeekRight(days, startDay) {
	            var pad = [];
	            var week = 7;
	            var dayOfWeek = moment(startDay).day();
	
	            // weekdays are zero based
	            var neededDays = this._integerToArray(week - (dayOfWeek + 1));
	
	            for (var day in neededDays) {
	                pad.push({
	                    date: null
	                });
	            }
	
	            return this._integerToArray(neededDays);
	        }
	    }]);
	
	    return CalendarController;
	}();

/***/ },
/* 5 */
/***/ function(module, exports) {

	var path = '/Users/bc/Code/open-source/angular-json-calendar/src/templates/calendar.html';
	var html = "<section class=bc-calendar> <header class=bc-calendar__header> <span class=\"bc-calendar__day bc-calendar__day--header\" data-ng-repeat=\"day in vm.weekdays track by $index\"> <strong class=bc-calendar__day-title> {{ day }} </strong> </span> </header> <div data-ng-include=vm.getTemplateUrl()></div> </section>";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 6 */
/***/ function(module, exports) {

	var path = '/Users/bc/Code/open-source/angular-json-calendar/src/templates/year.html';
	var html = "<div class=bc-calendar__year data-ng-repeat=\"year in vm.bcCollection track by $index\"> <bc-month bc-collection=year></bc-month> </div>";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 7 */
/***/ function(module, exports) {

	var path = '/Users/bc/Code/open-source/angular-json-calendar/src/templates/month.html';
	var html = "<div class=bc-calendar__month data-ng-repeat=\"month in vm.bcCollection track by $index\"> <bc-week bc-collection=month></bc-week> </div>";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 8 */
/***/ function(module, exports) {

	var path = '/Users/bc/Code/open-source/angular-json-calendar/src/templates/week.html';
	var html = "<div class=bc-calendar__week data-ng-repeat=\"week in vm.bcCollection track by $index\"> <bc-day bc-collection=week></bc-day> </div>";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 9 */
/***/ function(module, exports) {

	var path = '/Users/bc/Code/open-source/angular-json-calendar/src/templates/day.html';
	var html = "<span class=bc-calendar__day data-ng-class=\"{ 'bc-calendar__day--disabled': vm.isBeforeToday(day.date),\n                   'bc-calendar__day--today': vm.isDayToday(day.date),\n                   'bc-calendar__day--even': $even,\n                   'bc-calendar__day--pad': !day.date }\" data-ng-click=vm.selectDate(day.date) data-ng-repeat=\"day in vm.bcCollection track by $index\"> <time class=bc-calendar__day-time data-ng-class=\"{ 'bc-calendar__time--selected': vm.isDaySelected(day.date) }\" datetime=\"{{ day.date | date:'MMMM Do, YYYY' }}\" title=\"{{ day.date }}\" data-ng-if=\"day.date && day.date.length > 3\"> {{ day.date | date:'MM/dd/yy' }} <small> {{ day.date | date:'EEE' }} </small> </time> <span class=bc-calendar__day-time data-ng-if=!day.date></span> </span>";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 10 */
/***/ function(module, exports) {

	var path = '/Users/bc/Code/open-source/angular-json-calendar/src/templates/test.html';
	var html = "<div> <h1>TEST</h1> <pre>\n{{ vm  | json }}\n</pre> </div>";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.bcMonthDirective = bcMonthDirective;
	
	var _month = __webpack_require__(7);
	
	var _month2 = _interopRequireDefault(_month);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function bcMonthDirective() {
	    'ngInject';
	
	    var directive = {
	        restrict: 'E',
	        replace: true,
	        scope: {},
	        bindToController: {
	            bcCollection: '='
	        },
	        templateUrl: _month2.default,
	        controller: function controller() {
	
	            /*
	             *console.log(this);
	             */
	
	        },
	        controllerAs: 'vm',
	        link: linkFunction
	    };
	
	    /**
	     * Link
	     */
	    function linkFunction($scope, $element, $attrs, vm) {
	        console.log('In link: ', $scope.bcCollection);
	    }
	
	    return directive;
	}

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.bcWeekDirective = bcWeekDirective;
	
	var _week = __webpack_require__(8);
	
	var _week2 = _interopRequireDefault(_week);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function bcWeekDirective() {
	    'ngInject';
	
	    var directive = {
	        restrict: 'E',
	        replace: true,
	        scope: {},
	        bindToController: {
	            bcCollection: '='
	        },
	        templateUrl: _week2.default,
	        controller: function controller() {
	
	            /*
	             *console.log(this.bcCollection);
	             */
	
	        },
	        controllerAs: 'vm',
	        link: linkFunction
	    };
	
	    /**
	     * Link
	     */
	    function linkFunction($scope, $element, $attrs, vm) {
	        console.log('In link: ', $scope.bcCollection);
	    }
	
	    return directive;
	}

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.bcDayDirective = bcDayDirective;
	
	var _day = __webpack_require__(9);
	
	var _day2 = _interopRequireDefault(_day);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function bcDayDirective() {
	    'ngInject';
	
	    var directive = {
	        restrict: 'E',
	        replace: true,
	        scope: {},
	        bindToController: {
	            bcCollection: '='
	        },
	        templateUrl: _day2.default,
	        controller: function controller() {
	
	            /*
	             *console.log(this.bcCollection);
	             */
	
	        },
	        controllerAs: 'vm'
	    };
	
	    return directive;
	}

/***/ }
/******/ ])
});
;
//# sourceMappingURL=angular-json-calendar.js.map