/** ****************************************************************************
 * Takes care of application execution logging.
 *
 * Depends on indicia.
 *
 * Uses 5 levels of logging:
 *  0: none
 *  1: errors
 *  2: warnings
 *  3: information
 *  4: debug
 *
 * Levels values defined in core app module.
 **************************************************************************** */
import CONFIG from 'config';

const ERROR = 'e';
const WARNING = 'w';
const INFO = 'i';
const DEBUG = 'd';

function log(message, type = DEBUG) {
  // always print errors
  if (type === ERROR) {
    console.error(message);
    return;
  }

  // do nothing if logging turned off
  if (CONFIG.log) {
    switch (type) {
      case WARNING:
        console.warn(message);
        break;
      case INFO:
        console.log(message);
        break;
      case DEBUG:
      /* falls through */
      default:
        // IE does not support console.debug
        if (!console.debug) {
          console.log(message);
          break;
        }
        console.debug(message);
    }
  }
}

export { log as default };
