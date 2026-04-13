import * as _pi from 'pareto-core/dist/interface'
import * as _p from 'pareto-core/dist/command'

import * as signatures from "../../../interface/signatures"

//dependencies

//shorthands
import * as sh from "pareto-fountain-pen/dist/shorthands/prose"

export const $$: signatures.commands.console_log = _p.command_procedure(
    ($p, $cr) => [
        $cr['log'].execute(
            {
                'message': $p.paragraph
            },
            ($) => $,
        )
    ]
)