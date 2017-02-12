define([
  'debug'
], function(debug) {

  var app = angular.module('act.log', []);
  
  /**
   * Act-Logger, based on bunyan logger, enables user to create child logs on the fly and manage
   * enabling & disabling in runtime
   */
  app.provider('logger', [
    function() {

      var LOGGING_ENABLED = false;
      var LOG_BASE_CHANNEL = 'app';
      var LOGGING_MIN_LEVEL = 1;   //corresponds to the number in the levels array
      var DEFAULT_COLOR = 'lightseagreen';
      var LOG_LEVELS = ['trace', 'info', 'warn', 'error', 'fatal'];

      var _levelColorMapping = {   //level -> colors mapping
        'trace': 'lightseagreen',
        'info': 'dodgerblue',
        'warn': 'goldenrod',
        'error': 'crimson',
        'fatal': 'crimson'
      };

      var _baseLog = {};   //Base Logger


      /**
       * Init the Logging library with a base channel name, defaults to app
       *
       * @param      {string=}  baseChannel  App-wide channel name (base)
       * @param      {!String}  minLevel     Minimum level to emit on console (one of the supported
       *                                     levels)
       * @param      {!bolean}  enable       Enable or disable logging flag
       * @return     {Boolean}  acknowledge
       */
      var _init = function(baseChannel, minLevel, enable) {

        if(minLevel && LOG_LEVELS.indexOf(minLevel) !== -1) {
          LOGGING_MIN_LEVEL = LOG_LEVELS.indexOf(minLevel);          
        }

        if(enable) {   // check if enabled
          LOGGING_ENABLED = true;
        }

        if(baseChannel) {  //update baseChannel
          LOG_BASE_CHANNEL = baseChannel;
        }

        _baseLog = _child(LOG_BASE_CHANNEL);
        _baseLog.enable();

        return true;
      };

      /**
       * Change the minimum level in runtime
       *
       * @param      {!String}  minLevel  Level to set as minimum (from supported levels)
       * @return     {Boolean}  acknowledge
       */
      var _level = function(minLevel) {
        if(minLevel && LOG_LEVELS.indexOf(minLevel) !== -1) {
          LOGGING_MIN_LEVEL = LOG_LEVELS.indexOf(minLevel);          
        }
        return true;
      }

      /**
       * Returns the base Log
       *
       * @return     {!Object}  The base logger object
       */
      var _log = function() {
        return _baseLog;
      };

      /**
       * Enable logging
       *
       * @return     {Boolean}  Acknowledge
       */
      var _enable = function() {
        LOGGING_ENABLED = true;
        return true;
      }

      /**
       * Disable all logging
       *
       * @return     {Boolean}  Acknowledge
       */
      var _disable = function() {
        LOGGING_ENABLED = false;
        return true;
      };


      /**
       * Create a child logger
       *
       * @param      {!String}  channel  The child logger name
       * @return     {!Object}  Child log object
       */
      var _child = function(channel) {
        
        var _channel = channel;

        /**
         * Evaluates the child logger string
         *
         * @param      {!String}  subChannel  Child log or Level name
         * @return     {!String}  Evalulated logger string
         */
        var _evaluate = function(subChannel) {
          return _channel + ':' + subChannel;
        }

        /**
         * Enable the current logger instance
         *
         * @return     {Boolean}  acknowledge
         */
        var _enable = function(){
          debug.enable(_channel + ':*');
          return true;
        };

        var _disable = function(){
          //TODO
        };
        

        /**
         * Generate a new child logger, extends from the parent logger (parent:child) and returns
         * the a new logger instance
         *
         * @param      {!String}  childChannel  Name of child channel
         * @return     {!Object}  Child logger instance
         */
        var _childLog = function(childChannel) {
          var evaluatedChildChannel = _evaluate(childChannel);

          var childLogger = _child(evaluatedChildChannel);
          childLogger.enable();
          
          return childLogger;
        };


        /**
         * Generates a log statement based on the level, message specified
         *
         * @param      {!String}                              level    Level to emit
         * @param      {!(object|string|boolean|int|number)}  message  The log message
         * @param      {!(object|string|boolean|int|number)}  tag      Attach tag to the log message
         * @return     {Boolean}                              acknowledge, returns false if disabled
         */
        var _generate = function(level, message, tag) {

          //Check if logging enabled
          if(!LOGGING_ENABLED) {
            return false;
          }

          //Check for minimum level
          var levelIndex = LOG_LEVELS.indexOf(level);
          if(levelIndex < LOGGING_MIN_LEVEL) {   //level is less than the minimum set
            return false;
          }


          var evaluatedLevelChannel = _evaluate(level);
          var channelDebug = debug(evaluatedLevelChannel);

          //set color
          channelDebug.color = _levelColorMapping[level] || DEFAULT_COLOR;
          
          if(!tag) {
            channelDebug(message);
          }
          else {
            channelDebug(tag, message);
          }

          return true;
        };

        var _trace = function(message, tag) {
          return _generate('trace', message, tag);
        };

        var _info = function(message, tag) {
          return _generate('info', message, tag);
        };

        var _warn = function(message, tag) {
          return _generate('warn', message, tag);
        };

        var _error = function(message, tag) {
          return _generate('error', message, tag);
        };

        var _fatal = function(message, tag) {
          return _generate('fatal', message, tag);
        };

        return { 
          enable: _enable,
          disable: _disable,
          child: _childLog,
          trace: _trace,
          info: _info,
          warn: _warn,
          error: _error,
          fatal: _fatal
        };

      };


      //Bootstrapping actions

      if(window) {   //attach to window  
                     //
        var windowLog = {
          enable: _enable,
          disable: _disable,
          level: _level
        };

        window.logging = windowLog;
      }

      _init(); //Initialize the default channel so that logging can be used before initialize as well

      return {
        $get: [

          function() {
            return {
              disable: _disable,
              enable: _enable,
              level: _level,
              log: _log
            };
          }
        ],
        level: _level,
        enable: _enable,
        disable: _disable,
        init: _init,
        log: _log
      };
    }
  ]);
});