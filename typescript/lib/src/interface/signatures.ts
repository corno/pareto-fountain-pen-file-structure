import * as _pi from 'pareto-core/dist/interface'

import * as resources from "./resources"
import * as resources_pareto from "pareto-resources/dist/interface/resources"

export namespace commands {

    export type console_error = _pi.Command_Procedure<
        resources.commands.console_error,
        {
            'log error': resources_pareto.stream.commands.log_error
        },
        null
    >

    export type console_log = _pi.Command_Procedure<
        resources.commands.console_log,
        {
            'log': resources_pareto.stream.commands.log
        },
        null
    >

    export type write_to_directory = _pi.Command_Procedure<
        resources.commands.write_to_directory,
        {
            'remove': resources_pareto.filesystem_sandboxed.commands.remove,
            'write to_file': resources.commands.write_to_file
        },
        null
    >

    export type write_to_file = _pi.Command_Procedure<
        resources.commands.write_to_file,
        {
            'write file': resources_pareto.filesystem_sandboxed.commands.write_file
        },
        null
    >

}