<template>
  <div>
    <div class="datepicker" :disabled="disabled">
      <input type="text" class="datepicker__range is-datepick valid" name="datepicker-range" :placeholder="emptyText" @click="show" @blur="hide" :value="dateVal" >
      <div class="col">
        <input type="text" class="datepicker__start" name="startDate" placeholder="Fra dato" data-valmsg-for="" data-selector="startDate">
      </div>
      <div class="col">
        <input type="text" class="datepicker__end" name="endDate" placeholder="Til dato" data-valmsg-for="" data-selector="endDate">
      </div>
      <button class="icon-clear" v-bind:class="{'js-hidden': !dateVal}" @click="clearDates" type="button" data-selector="clearDates" title="{{clearStatus}}"></button>
    </div>

    <div class="datepick-popup" v-el:popup v-if="visible" @mousedown="$event.preventDefault()" style="position: absolute; left1: 436px; top1: 1126px;">
      <div class="datepick datepick-multi">
        <div class="datepick-nav">
          <a href="javascript:void(0)" title="{{closeStatus}}" class="datepick-cmd datepick-cmd-close" @click="hide">Close</a>
          <a href="javascript:void(0)" title="{{todayStatus}}" class="datepick-cmd datepick-cmd-today" @click="showTodayMonth">{{todayText}}</a>
        </div>

        <template v-for="row in monthsToShow[0]">
          <div class="datepick-month-row">
            <div class="datepick-month" v-bind:class="col==0 ? 'first' : ''" v-for="col in monthsToShow[1]">
              <div class="datepick-month-header">
                <a v-if="row==0 && col==0" :class="{'datepick-disabled': cmdPrevDisabled}" href="javascript:void(0)" title="{{prevStatus}}" class="datepick-cmd datepick-cmd-prev " @click="preMonth">&lt;Prev</a>
                {{_generateMonthHead(monthArr[row*monthsToShow[1] + col].year, monthArr[row*monthsToShow[1] + col].month)}}
                <a v-if="row==monthsToShow[0]-1 && col==monthsToShow[1]-1" :class="{'datepick-disabled': cmdNextDisabled}" href="javascript:void(0)" title="{{nextStatus}}" class="datepick-cmd datepick-cmd-next " @click="nextMonth">Next&gt;</a>
              </div>
              <table>
                <thead>
                  <tr>
                    <th v-for="day in 7">
                      <span class="datepick-dow-{{day}}" title="{{dayNames[day]}}">{{dayNamesMin[day]}}</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="week in 6">
                    <td v-for="day in 7" a={{week}}>
                      <span v-if="monthArr[row*monthsToShow[1] + col].dates[week*7 + day].otherMonth" class="datepick-weekend datepick-other-month">&nbsp;</span>
                      <a v-else href="javascript:void(0)" :class="_getClass(row, col, week, day)" @click="selectDate(row, col, week, day)" >{{monthArr[row*monthsToShow[1] + col].dates[week*7 + day].text}}</a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </template>

        <div v-if="rangeSelect" class="datepick-ctrl">
          <button class="button button--action button--small button--stretch" data-selector="applyButton" @click="confirm">{{applyText}}</button>
          <a href="javascript:void(0)" class="datepick-cmd datepick-cmd-clear ">Clear</a>
        </div>
        <div class="datepick-clear-fix"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    bmValue: {
      twoWay: true,
      type: String,
      default: ''
    },
    dateVal: {
      type: String,
      default: ''
    },
    rangeSelect: {
      type: Boolean,
      default: false
    },
    rangeSeparator: {
      type: String,
      default: ' - '
    },
    defaultStartDate: null,
    defaultEndDate: null,
    dateFormat: {
      type: String,
      default: 'yyyy-mm-dd'
    },
    disabled: Boolean,
    minDate: {
      default: ''
    },
    maxDate: {
      default: ''
    },
    monthsToShow: {
      type: [Number, Array],
      default: 1
    },
    monthHeaderFormat: {
      type: String,
      default: 'MM yyyy'
    },
    monthNames: {
      type: Array,
      default: function () {
        return ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
      }
    },
    monthNamesShort: {
      type: Array,
      default: function () {
        return ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      }
    },
    dayNames: {
      type: Array,
      default: function () {
        return ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      }
    },
    dayNamesShort: {
      type: Array,
      default: function () {
        return ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
      }
    },
    dayNamesMin: {
      type: Array,
      default: function () {
        return ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
      }
    },
    emptyText: {
      type: String,
      default: 'Select date'
    },
    applyText: {
      type: String,
      default: 'Confirm'
    },
    todayText: {
      type: String,
      default: 'Today'
    },
    todayStatus: {
      type: String,
      default: 'Show today\'s month'
    },
    prevStatus: {
      type: String,
      default: 'Show previous month'
    },
    nextStatus: {
      type: String,
      default: 'Show next month'
    },
    closeStatus: {
      type: String,
      default: 'Close and do not save changes'
    },
    clearStatus: {
      type: String,
      default: 'Clear date'
    }
  },
  data: function () {
    return {
      selectedDates: [],
      monthArr: [],
      today: null,
      drawDate: null,
      visible: false,
      cmdPrevDisabled: false,
      cmdNextDisabled: false
    };
  },
  created: function () {
    if (!this._isArray(this.monthsToShow)) {
      this.monthsToShow = [1, this.monthsToShow];
    }

    this.drawDate = this._determineDate(this.dateVal, this.dateFormat) || this._today();
    if (this.dateVal) {
      if (this.rangeSelect) {
        var startEndDate = this.dateVal.split(this.rangeSeparator);
        this.selectedDates[0] = this._parseDate(this.dateFormat, startEndDate[0]);
        this.selectedDates[1] = this._parseDate(this.dateFormat, startEndDate[1] || startEndDate[0]);
      } else {
        this.selectedDates[0] = this._parseDate(this.dateFormat, this.dateVal);
      }
    }

    this.today = this._today();
    this.minDate = this._determineDate(this.minDate, this.dateFormat);
    this.maxDate = this._determineDate(this.maxDate, this.dateFormat);
  },
  methods: {
    getDates: function () {
      return this.selectedDates;
    },

    clearDates: function () {
      var oldDateVal = this.dateVal;
      this.selectedDates = [];
      this.dateVal = '';
      this._generateDates();
      if (oldDateVal !== this.dateVal) {
        this._triggerChange();
      }
    },

    show: function () {
      if (!this.visible) {
        this.drawDate = this._checkMinMax(this._newDate((this.selectedDates[0] ? this.selectedDates[0] : null) || this.defaultStartDate || this._today()));
        this._generateDates();
        this.visible = true;
      }
    },

    hide: function () {
      this.visible = false;
    },

    showTodayMonth: function () {
      var date = this._checkMinMax(this._today());
      this.drawDate = this._newDate(date.getFullYear(), date.getMonth() + 1, 1);
      this._generateDates();
    },

    _isArray: function (obj) {
      return Object.prototype.toString.call(obj) === '[object Array]';
    },

    _generateMonthHead: function (fullYear, month) {
      return this._formatDate(this.monthHeaderFormat, this._newDate(fullYear, month, 1));
    },

    _generateDates: function () {
      var fullYear;
      var month;
      var date;
      var dateArr;
      var leadDays;
      var weekNum = 6;
      var firstDay = 0;
      this.monthArr = [];
      this.drawDate = this._checkMinMax(this.drawDate || this.defaultStartDate || this._today());
      fullYear = this.drawDate.getFullYear();
      month = this.drawDate.getMonth() + 1;

      for (let i = 0, showMonths = this.monthsToShow[0] * this.monthsToShow[1]; i < showMonths; i++) {
        date = this._newDate(fullYear, month, 1);
        fullYear = date.getFullYear();
        month = date.getMonth() + 1;
        leadDays = (date.getDay() - firstDay + 7) % 7 || 7;
        this._add(date, -leadDays - (date.getDay() === firstDay ? 7 : 0), 'd');
        dateArr = [];

        for (let week = 0; week < weekNum; week++) {
          for (let day = 0; day < 7; day++) {
            dateArr.push({
              date: this._newDate(date.getFullYear(), date.getMonth() + 1, date.getDate()),
              text: date.getDate(),
              otherMonth: date.getMonth() !== month - 1,
              disabled: false
            });
            this._add(date, 1, 'd');
          }
        }

        this.monthArr.push({
          year: fullYear,
          month: month,
          dates: dateArr
        });

        month += 1;
      }

      this._updateStatus();
    },

    _updateStatus: function () {
      var self = this;
      this.monthArr.forEach(function (monthItem) {
        monthItem.dates.forEach(function (dateItem) {
          if (dateItem.date) {
            dateItem.disabled = self._dateDisabled(dateItem.date);
            dateItem.selected = self._dateSelected(dateItem.date);
          }
        });
      });
    },

    _dateDisabled: function (date) {
      var minDate = this._determineDate(this.minDate, null, this.selectedDates[0], this.dateFormat);
      var maxDate = this._determineDate(this.maxDate, null, this.selectedDates[this.selectedDates.length - 1], this.dateFormat);

      return (minDate && date.getTime() < minDate.getTime()) || (maxDate && date.getTime() > maxDate.getTime());
    },

    _dateSelected: function (date) {
      if (this.rangeSelect) {
        return (this.selectedDates.length === 1 && this.selectedDates[0].getTime() === date.getTime()) ||
            (this.selectedDates.length === 2 && this.selectedDates[0].getTime() <= date.getTime() &&
            this.selectedDates[1].getTime() >= date.getTime());
      } else {
        return this.selectedDates[0] && this.selectedDates[0].getTime() === date.getTime();
      }
    },

    _update: function (drawDate) { // 计算要显示的日期

    },

    _triggerChange: function () {
      this.$nextTick(function () {
        this.bmValue = this.dateVal;
        this.$dispatch('date-change', this.dateVal);
      });
    },

    _getClass: function (row, col, week, day) {
      var classes = [];
      var date = this.monthArr[row * this.monthsToShow[1] + col].dates[week * 7 + day];

      if (date) {
        // 判断是否为当天
        if (date.date.getTime() === this.today.getTime()) {
          classes.push('datepick-today');
        }

        // 是否被选中
        if (date.selected) {
          classes.push('datepick-selected');
        }

        if (date.disabled) {
          classes.push('datepick-disabled');
        }
      }

      return classes;
    },

    _updateInput: function () {
      if (this.rangeSelect) {
        var startDate = this.selectedDates.length > 0 ? this._formatDate(this.selectedDates[0]) : '';
        var endDate = this.selectedDates.length > 1 ? this._formatDate(this.selectedDates[1]) : '';
        this.dateVal = startDate ? (startDate + this.rangeSeparator + (endDate || startDate)) : this.dateVal;
      } else {
        this.dateVal = this.selectedDates.length > 0 ? this._formatDate(this.selectedDates[0]) : this.dateVal;
      }
    },

    selectDate: function (row, col, week, day) {
      var date = this.monthArr[row * this.monthsToShow[1] + col].dates[week * 7 + day];
      if (!date.disabled) {
        if (this.rangeSelect) {
          if (this.selectedDates.length === 1) {
            if (this.selectedDates[0].getTime() > date.date.getTime()) {
              this.selectedDates = [date.date, this.selectedDates[0]];
            } else {
              this.selectedDates = [this.selectedDates[0], date.date];
            }
          } else {
            this.selectedDates = [date.date];
          }
          this._generateDates();
        } else {
          // var oldSelected = this.selectedDates[0];
          var oldDateVal = this.dateVal;

          // if (oldSelected) {
          //   oldSelected.selected = false;
          // }

          // date.selected = true;
          this.selectedDates = [date.date];
          this._updateInput();
          this.hide();

          if (oldDateVal !== this.dateVal) {
            this._triggerChange();
          }
        }
      }
    },

    preMonth: function () {
      if (!this.cmdPrevDisabled) {
        var offset = -1;
        this.drawDate.setMonth(this.drawDate.getMonth() + offset);
        this._generateDates();
      }
    },

    nextMonth: function () {
      if (!this.cmdNextDisabled) {
        var offset = 1;
        this.drawDate.setMonth(this.drawDate.getMonth() + offset);
        this._generateDates();
      }
    },

    confirm: function () {
      var oldDateVal = this.dateVal;
      this._updateInput();
      this.hide();
      if (oldDateVal !== this.dateVal) {
        this._triggerChange();
      }
    },

    /* 计算该月的天数 */
    _daysInMonth: function (year, month) {
      month = (year.getFullYear ? year.getMonth() + 1 : month);
      year = (year.getFullYear ? year.getFullYear() : year);
      return this._newDate(year, month + 1, 0).getDate();
    },

    _today: function () {
      return this._normaliseDate(new Date());
    },

    _newDate: function (year, month, day) {
      return (!year ? null : (year.getFullYear ? this._normaliseDate(new Date(year.getTime())) : new Date(year, month - 1, day, 12)));
    },

    _normaliseDate: function (date) {
      if (date) {
        date.setHours(12, 0, 0, 0);
      }
      return date;
    },

    /** Restrict a date to the minimum/maximum specified.
      @private
      @param date {Date} The date to check. */
    _checkMinMax: function (date) {
      var minDate = this.minDate;
      var maxDate = this.maxDate;
      date = (minDate && date.getTime() < minDate.getTime() ? this._newDate(minDate) : date);
      date = (maxDate && date.getTime() > maxDate.getTime() ? this._newDate(maxDate) : date);
      return date;
    },

    _formatDate: function (format, date, settings) {
      if (typeof format !== 'string') {
        settings = date;
        date = format;
        format = '';
      }
      if (!date) {
        return '';
      }
      format = format || this.dateFormat;
      settings = settings || {};
      var dayNamesShort = settings.dayNamesShort || this.dayNamesShort;
      var dayNames = settings.dayNames || this.dayNames;
      var monthNamesShort = settings.monthNamesShort || this.monthNamesShort;
      var monthNames = settings.monthNames || this.monthNames;
      var calculateWeek = settings.calculateWeek || this.calculateWeek;
      // Check whether a format character is doubled
      var doubled = function (match, step) {
        var matches = 1;
        while (iFormat + matches < format.length && format.charAt(iFormat + matches) === match) {
          matches++;
        }
        iFormat += matches - 1;
        return Math.floor(matches / (step || 1)) > 1;
      };
      // Format a number, with leading zeroes if necessary
      var formatNumber = function (match, value, len, step) {
        var num = '' + value;
        if (doubled(match, step)) {
          while (num.length < len) {
            num = '0' + num;
          }
        }
        return num;
      };
      // Format a name, short or long as requested
      var formatName = function (match, value, shortNames, longNames) {
        return (doubled(match) ? longNames[value] : shortNames[value]);
      };
      var output = '';
      var literal = false;
      for (var iFormat = 0; iFormat < format.length; iFormat++) {
        if (literal) {
          if (format.charAt(iFormat) === "'" && !doubled("'")) {
            literal = false;
          } else {
            output += format.charAt(iFormat);
          }
        } else {
          switch (format.charAt(iFormat)) {
            case 'd': output += formatNumber('d', date.getDate(), 2); break;
            case 'D': output += formatName('D', date.getDay(),
              dayNamesShort, dayNames); break;
            case 'o': output += formatNumber('o', this.dayOfYear(date), 3); break;
            case 'w': output += formatNumber('w', calculateWeek(date), 2); break;
            case 'm': output += formatNumber('m', date.getMonth() + 1, 2); break;
            case 'M': output += formatName('M', date.getMonth(),
              monthNamesShort, monthNames); break;
            case 'y':
              output += (doubled('y', 2) ? date.getFullYear() : (date.getFullYear() % 100 < 10 ? '0' : '') + date.getFullYear() % 100);
              break;
            case '@': output += Math.floor(date.getTime() / 1000); break;
            case '!': output += date.getTime() * 10000 + this._ticksTo1970; break;
            case "'":
              if (doubled("'")) {
                output += "'";
              } else {
                literal = true;
              }
              break;
            default:
              output += format.charAt(iFormat);
          }
        }
      }
      return output;
    },

    /** Parse a string value into a date object.
      See <code><a href="#formatDate">formatDate</a></code> for the possible formats, plus:
      <ul>
      <li>* - ignore rest of string</li>
      </ul>
      @param format {string} The expected format of the date ('' for default datepicker format).
      @param value {string} The date in the above format.
      @param [settings] {object} With the properties shown above.
      @property [shortYearCutoff] {number} the cutoff year for determining the century.
      @property [dayNamesShort] {string[]} abbreviated names of the days from Sunday.
      @property [dayNames] {string[]} names of the days from Sunday.
      @property [monthNamesShort] {string[]} abbreviated names of the months.
      @property [monthNames] {string[]} names of the months.
      @return {Date} The extracted date value or <code>null</code> if value is blank.
      @throws Errors if the format and/or value are missing, if the value doesn't match the format,
          or if the date is invalid.
      @example var date = $.datepick.parseDate('dd/mm/yyyy', '25/12/2014') */
    _parseDate: function (format, value) {
      if (value == null) {
        // throw 'Invalid arguments';
      }
      value = (typeof value === 'object' ? value.toString() : value + '');
      if (value === '') {
        return null;
      }
      format = format || this.dateFormat;
      var shortYearCutoff = this.shortYearCutoff;
      shortYearCutoff = (typeof shortYearCutoff !== 'string' ? shortYearCutoff : this._today().getFullYear() % 100 + parseInt(shortYearCutoff, 10));
      var dayNamesShort = this.dayNamesShort;
      var dayNames = this.dayNames;
      var monthNamesShort = this.monthNamesShort;
      var monthNames = this.monthNames;
      var year = -1;
      var month = -1;
      var day = -1;
      var doy = -1;
      var shortYear = false;
      var literal = false;
      // Check whether a format character is doubled
      var doubled = function (match, step) {
        var matches = 1;
        while (iFormat + matches < format.length && format.charAt(iFormat + matches) === match) {
          matches++;
        }
        iFormat += matches - 1;
        return Math.floor(matches / (step || 1)) > 1;
      };
      // Extract a number from the string value
      var getNumber = function (match, step) {
        var isDoubled = doubled(match, step);
        var size = [2, 3, isDoubled ? 4 : 2, 11, 20]['oy@!'.indexOf(match) + 1];
        var digits = new RegExp('^-?\\d{1,' + size + '}');
        var num = value.substring(iValue).match(digits);
        if (!num) {
          throw 'Missing number at position {0}'.replace(/\{0\}/, iValue);
        }
        iValue += num[0].length;
        return parseInt(num[0], 10);
      };
      // Extract a name from the string value and convert to an index
      var getName = function (match, shortNames, longNames, step) {
        var names = (doubled(match, step) ? longNames : shortNames);
        for (var i = 0; i < names.length; i++) {
          if (value.substr(iValue, names[i].length).toLowerCase() === names[i].toLowerCase()) {
            iValue += names[i].length;
            return i + 1;
          }
        }
        throw 'Unknown name at position {0}'.replace(/\{0\}/, iValue);
      };
      // Confirm that a literal character matches the string value
      var checkLiteral = function () {
        if (value.charAt(iValue) !== format.charAt(iFormat)) {
          throw 'Unexpected literal at position {0}'.replace(/\{0\}/, iValue);
        }
        iValue++;
      };
      var iValue = 0;
      for (var iFormat = 0; iFormat < format.length; iFormat++) {
        if (literal) {
          if (format.charAt(iFormat) === "'" && !doubled("'")) {
            literal = false;
          } else {
            checkLiteral();
          }
        } else {
          switch (format.charAt(iFormat)) {
            case 'd': day = getNumber('d'); break;
            case 'D': getName('D', dayNamesShort, dayNames); break;
            case 'o': doy = getNumber('o'); break;
            case 'w': getNumber('w'); break;
            case 'm': month = getNumber('m'); break;
            case 'M': month = getName('M', monthNamesShort, monthNames); break;
            case 'y':
              var iSave = iFormat;
              shortYear = !doubled('y', 2);
              iFormat = iSave;
              year = getNumber('y', 2);
              break;
            case '@':
              var date = this._normaliseDate(new Date(getNumber('@') * 1000));
              year = date.getFullYear();
              month = date.getMonth() + 1;
              day = date.getDate();
              break;
            case '!':
              var date2 = this._normaliseDate(
                new Date((getNumber('!') - this._ticksTo1970) / 10000));
              year = date2.getFullYear();
              month = date2.getMonth() + 1;
              day = date2.getDate();
              break;
            case '*': iValue = value.length; break;
            case "'":
              if (doubled("'")) {
                checkLiteral();
              } else {
                literal = true;
              }
              break;
            default: checkLiteral();
          }
        }
      }
      if (iValue < value.length) {
        // throw 'Additional text found at end';
      }
      if (year === -1) {
        year = this._today().getFullYear();
      } else if (year < 100 && shortYear) {
        year += (shortYearCutoff === -1 ? 1900 : this._today().getFullYear() -
          this._today().getFullYear() % 100 - (year <= shortYearCutoff ? 0 : 100));
      }
      if (doy > -1) {
        month = 1;
        day = doy;
        for (var dim = this._daysInMonth(year, month); day > dim;
            dim = this._daysInMonth(year, month)) {
          month++;
          day -= dim;
        }
      }
      var date3 = this._newDate(year, month, day);
      if (date3.getFullYear() !== year || date3.getMonth() + 1 !== month || date3.getDate() !== day) {
        // throw 'Invalid date';
      }
      return date3;
    },

    /** A date may be specified as an exact value or a relative one.
      @param dateSpec {Date|number|string} The date as an object or string
          in the given format or an offset - numeric days from today,
          or string amounts and periods, e.g. '+1m +2w'.
      @param defaultDate {Date} The date to use if no other supplied, may be <code>null</code>.
      @param [currentDate] {Date} The current date as a possible basis for relative dates,
          if <code>null</code> today is used.
      @param dateFormat {string} The expected date format - see <code><a href="#formatDate">formatDate</a></code>.
      @param settings {object} With the properties shown above.
      @property [shortYearCutoff] {number} The cutoff year for determining the century.
      @property [dayNamesShort] {string[]} Abbreviated names of the days from Sunday.
      @property [dayNames] {string[]} Names of the days from Sunday.
      @property [monthNamesShort] {string[]} Abbreviated names of the months.
      @property [monthNames] {string[]} Names of the months.
      @return {Date} The decoded date.
      @example $.datepick.determineDate('+1m +2w', new Date()) */
    _determineDate: function (dateSpec, defaultDate, currentDate, dateFormat, settings) {
      var self = this;
      if (currentDate && typeof currentDate !== 'object') {
        settings = dateFormat;
        dateFormat = currentDate;
        currentDate = null;
      }
      if (typeof dateFormat !== 'string') {
        settings = dateFormat;
        dateFormat = '';
      }
      var offsetString = function (offset) {
        try {
          return self._parseDate(dateFormat, offset, settings);
        } catch (e) {
          // Ignore
        }
        offset = offset.toLowerCase();
        var date = (offset.match(/^c/) && currentDate ? self._newDate(currentDate) : null) ||
          self._today();
        var pattern = /([+-]?[0-9]+)\s*(d|w|m|y)?/g;
        var matches = pattern.exec(offset);
        while (matches) {
          date = self._add(date, parseInt(matches[1], 10), matches[2] || 'd');
          matches = pattern.exec(offset);
        }
        return date;
      };
      defaultDate = (defaultDate ? this._newDate(defaultDate) : null);
      dateSpec = (dateSpec == null ? defaultDate
        : (typeof dateSpec === 'string' ? offsetString(dateSpec) : (typeof dateSpec === 'number'
        ? (isNaN(dateSpec) || dateSpec === Infinity || dateSpec === -Infinity ? defaultDate
        : this._add(this._today(), dateSpec, 'd')) : this._newDate(dateSpec))));
      return dateSpec;
    },

    /** Add a number of periods to a date.
      @param date {Date} The original date.
      @param amount {number} The number of periods.
      @param period {string} The type of period d/w/m/y.
      @return {Date} The updated date.
      @example $.datepick.add(date, 10, 'd') */
    _add: function (date, amount, period) {
      if (period === 'd' || period === 'w') {
        this._normaliseDate(date);
        date.setDate(date.getDate() + amount * (period === 'w' ? 7 : 1));
      } else {
        var year = date.getFullYear() + (period === 'y' ? amount : 0);
        var month = date.getMonth() + (period === 'm' ? amount : 0);
        date.setTime(this._newDate(year, month + 1,
          Math.min(date.getDate(), this._daysInMonth(year, month + 1))).getTime());
      }
      return date;
    }
  },
  watch: {
    bmValue: function (newValue, oldValue) {
      var oldDateVal = this.dateVal;
      this.dateVal = newValue;
      if (!this._isArray(this.monthsToShow)) {
        this.monthsToShow = [1, this.monthsToShow];
      }
      this.drawDate = this._determineDate(this.dateVal, this.dateFormat) || this._today();
      if (this.dateVal) {
        if (this.rangeSelect) {
          var startEndDate = this.dateVal.split(this.rangeSeparator);
//          debugger;
          this.selectedDates[0] = this._parseDate(this.dateFormat, startEndDate[0]);
          this.selectedDates[1] = this._parseDate(this.dateFormat, startEndDate[1] || startEndDate[0]);
          this._updateInput();
        } else {
          this.selectedDates[0] = this._parseDate(this.dateFormat, this.dateVal);
        }
      }
      this._generateDates();
      if (oldDateVal !== this.dateVal) {
        this._triggerChange();
      }
    }
  }
};

</script>
