import * as p_ from 'pareto-core/interface/command_action'


import * as d_console_error from "./data/console_error.js"
import * as d_console_log from "./data/console_log.js"
import * as d_write_to_directory from "./data/write_to_dictionary.js"
import * as d_write_to_file from "./data/write_to_file.js"

export type console_error = p_.Command_Action<d_console_error.Error, d_console_error.Parameters>
export type console_log = p_.Command_Action<d_console_log.Error, d_console_log.Parameters>
export type write_to_directory = p_.Command_Action<d_write_to_directory.Error, d_write_to_directory.Parameters>
export type write_to_file = p_.Command_Action<d_write_to_file.Error, d_write_to_file.Parameters>
