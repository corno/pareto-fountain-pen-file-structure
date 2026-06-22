
import * as p_ from 'pareto-core/dist/implementation/command'
import * as p_temp from 'pareto-core/dist/implementation/transformer'
import p_change_context from 'pareto-core/dist/implementation/refiner/specials/change_context'
import p_list_from_text from 'pareto-core/dist/implementation/refiner/specials/list_from_text'

import * as interface_ from "../../../interface/commands"

//dependencies
import * as t_prose_2_lines from "pareto-fountain-pen/dist/implementation/manual/transformers/prose/lines"
import * as t_path_to_path from "pareto-resources/dist/implementation/manual/transformers/unrestricted_path/unrestricted_path"
import * as t_path_to_escaped_path from "../transformers/path/escaped_path"

export const $$: interface_.procedures.write_to_file = p_.command_procedure(
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
                    ).map(($) => $ + $d.generic['prose serialize'].newline),
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