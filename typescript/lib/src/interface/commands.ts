import * as p_ from 'pareto-core/interface/command_interface'

import type * as s_console_error from "./schemas/console_error.js"
import type * as s_console_log from "./schemas/console_log.js"
import type * as s_write_to_directory from "./schemas/write_to_directory.js"
import type * as s_write_to_file from "./schemas/write_to_file.js"

export type console_error = p_.Command_Interface<
    s_console_error.Error,
    s_console_error.Parameters
>
export type console_log = p_.Command_Interface<
    s_console_log.Error,
    s_console_log.Parameters
>
export type write_to_directory = p_.Command_Interface<
    s_write_to_directory.Error,
    s_write_to_directory.Parameters
>
export type write_to_file = p_.Command_Interface<
    s_write_to_file.Error,
    s_write_to_file.Parameters
>
