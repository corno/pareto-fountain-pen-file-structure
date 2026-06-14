
import * as pt from 'pareto-core/dist/command'
import * as _pt from 'pareto-core/dist/assign'
import * as pci from 'pareto-core/dist/command_interface'


import p_change_context from 'pareto-core/dist/_p_change_context'

import * as signatures from "../../../interface/signatures"

//data types
import * as d_write_to_directory from "../../../interface/to_be_generated/write_to_dictionary"

//dependencies
import * as t_path_to_path from "pareto-resources/dist/implementation/manual/transformers/unrestricted_path/unrestricted_path"
import * as t_path_to_escaped_path from "../transformers/path/escaped_path"


export const $$: signatures.commands.write_to_directory = pt.command_procedure(
    ($d, $s, $q, $c) => [
        pt.if_.direct(
            $d['remove before creating'],
            [
                $c.remove.execute(
                    {
                        'path': t_path_to_path.deprecated_node_path_to_context_path(
                            $d.generic['escape spaces in path']
                                ? t_path_to_escaped_path.Node_path($d.path)
                                : $d.path
                        ),
                        'error if not exists': false
                    },
                    ($) => ['remove', $],
                )
            ]
        ),
        pt.dictionaryx.parallel(
            $d.directory,
            ($, id) => [
                p_change_context($, ($): pci.Command_Promise<d_write_to_directory.Error__nodes> => {
                    const node_path = t_path_to_path.deprecated_extend_node_path($d.path, { 'addition': id })
                    switch ($[0]) {
                        case 'file': return pt.ss($, ($) => $c['write to file'].execute(
                            {
                                'paragraph': $,
                                'directory path': $d.path,
                                'filename': id,
                                'generic': $d.generic,
                            },
                            ($): d_write_to_directory.Error__nodes => ['file', $],
                        ))
                        case 'directory': return pt.ss($, ($) => $$(null, $q, $c).execute(
                            {
                                'directory': $,
                                'path': $d.generic['escape spaces in path']
                                    ? t_path_to_escaped_path.Node_path(node_path)
                                    : node_path,
                                'remove before creating': false,
                                'generic': $d.generic
                            },
                            ($): d_write_to_directory.Error__nodes => ['directory', $],
                        ))
                        default: return _pt.au($[0])
                    }
                }),
            ],
            ($): d_write_to_directory.Error => ['nodes', $]
        )
    ]
)