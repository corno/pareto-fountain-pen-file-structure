
import * as p_ from 'pareto-core/implementation/command'
import * as p_temp from 'pareto-core/implementation/transformer'
import p_change_context from 'pareto-core/implementation/refiner/specials/change_context'
import p_list_from_text from 'pareto-core/implementation/refiner/specials/list_from_text'

import type * as command_interfaces from "../../interface/commands.js"
import type * as command_interfaces_pareto_filesystem_unrestricted_api from "pareto-filesystem-unrestricted-api/interface/commands"

//dependencies
import * as t_prose_2_lines from "pareto-fountain-pen/implementation/transformers/prose/lines"
import * as t_path_to_path from "pareto-resources/implementation/transformers/unrestricted_path/unrestricted_path"
import * as t_path_to_escaped_path from "../transformers/path/escaped_path.js"

export const $$: p_.Command_Implementation<
    command_interfaces.write_to_file,
    null,
    null,
    {
        'write file': command_interfaces_pareto_filesystem_unrestricted_api.write_file
    }
> = p_.command(
    ($d, $s, $q, $c) => [
        $c['write file'].execute(
            {
                'path': p_change_context(
                    t_path_to_path.deprecated_extend_node_path($d['directory path'], { 'addition': $d.filename }),
                    ($) => $d.generic['escape spaces in path']
                        ? t_path_to_escaped_path.Node_path($)
                        : $,
                ),
                'data': p_temp.from.list(
                    p_temp.from.list(
                        t_prose_2_lines.Paragraph(
                            $d.paragraph,
                            {
                                'indentation': $d.generic['prose serialize'].indentation
                            }
                        )
                    ).map(
                        ($) => $ + $d.generic['prose serialize'].newline),
                ).flatten(
                    ($) => p_list_from_text(
                        $,
                        ($) => $
                    ),
                )
            },
            ($) => ['write file', $],
        )
    ]
)