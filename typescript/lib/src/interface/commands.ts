import * as p_ from 'pareto-core/interface/command'

import * as command_actions from "./command_actions.js"
import * as command_actions_pareto_filesystem_unrestricted_api from "pareto-filesystem-unrestricted-api/interface/command_actions"

export type write_to_directory = p_.Command<
    command_actions.write_to_directory,
    null,
    null,
    {
        'remove': command_actions_pareto_filesystem_unrestricted_api.remove,
        'write to file': command_actions.write_to_file
    }
>

export type write_to_file = p_.Command<
    command_actions.write_to_file,
    null,
    null,
    {
        'write file': command_actions_pareto_filesystem_unrestricted_api.write_file
    }
>