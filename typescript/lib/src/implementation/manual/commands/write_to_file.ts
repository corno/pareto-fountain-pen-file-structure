
import * as _pt from 'pareto-core/dist/assign'
import * as pi from 'pareto-core/dist/interface'
import * as pt from 'pareto-core/dist/command'
import p_change_context from 'pareto-core/dist/_p_change_context'
import p_list_from_text from 'pareto-core/dist/_p_list_from_text'

import * as signatures from "../../../interface/signatures"

//data types
import * as d_write_to_file from "../../../interface/to_be_generated/write_to_file"

//dependencies
import * as t_prose_2_lines from "pareto-fountain-pen/dist/implementation/manual/transformers/prose/lines"
import * as t_path_to_path from "pareto-resources/dist/implementation/manual/transformers/unrestricted_path/unrestricted_path"
import * as t_path_to_escaped_path from "../transformers/path/escaped_path"

export const $$: signatures.commands.write_to_file = pt.command_procedure(
    ($d, $s, $q, $c) => [
        $c['write file'].execute(
            {
                'path': p_change_context(
                    t_path_to_path.deprecated_extend_node_path($d['directory path'], { 'addition': $d.filename }),
                    ($) => $d.generic['escape spaces in path']
                        ? t_path_to_escaped_path.Node_path($)
                        : $,
                ),
                'data': _pt.list.from.list(
                    t_prose_2_lines.Paragraph($d.paragraph, { 'indentation': $d.generic['prose serialize'].indentation }).__l_map(($) => $ + $d.generic['prose serialize'].newline),
                ).flatten(
                    ($) => p_list_from_text($, ($) => $),
                )
            },
            ($) => ['write file', $],
        )
    ]
)