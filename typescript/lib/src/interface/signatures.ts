import * as _pi from 'pareto-core/dist/interface'

import * as resources from "./resources"
import * as resources_pareto from "pareto-resources/dist/interface/resources"

export namespace commands {

    export type write_to_directory = _pi.Command_Procedure<
        resources.commands.write_to_directory,
        {
            'remove': resources_pareto.filesystem_unrestricted.commands.remove,
            'write to file': resources.commands.write_to_file
        },
        null,
        null
    >

    export type write_to_file = _pi.Command_Procedure<
        resources.commands.write_to_file,
        {
            'write file': resources_pareto.filesystem_unrestricted.commands.write_file
        },
        null,
        null
    >

}