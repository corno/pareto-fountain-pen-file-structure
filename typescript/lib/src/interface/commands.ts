import * as pci from 'pareto-core/dist/command_interface'


import * as d_console_error from "./to_be_generated/console_error"
import * as d_console_log from "./to_be_generated/console_log"
import * as d_write_to_directory from "./to_be_generated/write_to_dictionary"
import * as d_write_to_file from "./to_be_generated/write_to_file"

import * as resources_pareto from "pareto-resources/dist/interface/resources"

export namespace commands {

    export type console_error = pci.Command<d_console_error.Error, d_console_error.Parameters>
    export type console_log = pci.Command<d_console_log.Error, d_console_log.Parameters>
    export type write_to_directory = pci.Command<d_write_to_directory.Error, d_write_to_directory.Parameters>
    export type write_to_file = pci.Command<d_write_to_file.Error, d_write_to_file.Parameters>

}

export namespace procedures {

    export type write_to_directory = pci.Command_Procedure<
        commands.write_to_directory,
        null,
        null,
        {
            'remove': resources_pareto.filesystem_unrestricted.commands.remove,
            'write to file': commands.write_to_file
        }
    >

    export type write_to_file = pci.Command_Procedure<
        commands.write_to_file,
        null,
        null,
        {
            'write file': resources_pareto.filesystem_unrestricted.commands.write_file
        }
    >

}