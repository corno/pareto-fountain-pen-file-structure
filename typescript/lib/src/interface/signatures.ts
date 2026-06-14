import * as _pqi from 'pareto-core/dist/query_interface'
import * as _pci from 'pareto-core/dist/command_interface'


import * as resources from "./resources"
import * as resources_pareto from "pareto-resources/dist/interface/resources"

export namespace commands {

    export type write_to_directory = _pci.Command_Procedure<
        resources.commands.write_to_directory,
        null,
        null,
        {
            'remove': resources_pareto.filesystem_unrestricted.commands.remove,
            'write to file': resources.commands.write_to_file
        }
    >

    export type write_to_file = _pci.Command_Procedure<
        resources.commands.write_to_file,
        null,
        null,
        {
            'write file': resources_pareto.filesystem_unrestricted.commands.write_file
        }
    >

}