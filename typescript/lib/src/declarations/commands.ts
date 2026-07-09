import * as p_ from 'pareto-core/interface/command_implementation'

import type * as command_interfaces from "../interface/commands.js"
import type * as command_interfaces_pareto_filesystem_unrestricted_api from "pareto-filesystem-unrestricted-api/interface/commands"

export type write_to_directory = p_.Command_Implementation<
    command_interfaces.write_to_directory,
    null,
    null,
    {
        'remove': command_interfaces_pareto_filesystem_unrestricted_api.remove,
        'write to file': command_interfaces.write_to_file
    }
>

export type write_to_file = p_.Command_Implementation<
    command_interfaces.write_to_file,
    null,
    null,
    {
        'write file': command_interfaces_pareto_filesystem_unrestricted_api.write_file
    }
>