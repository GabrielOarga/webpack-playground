/** A Set of constants used by the main webpack configurations **/
import {resolve} from 'path';

/** PATHS **/
const OUTPUT_PATH = resolve(__dirname, '../' , 'build');

/** VARIABLES **/
const ROOT = '/';

module.exports = {
  OUTPUT_PATH,
  ROOT
};
