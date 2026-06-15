
import * as p_ from 'pareto-core/dist/implementation/command'


import p_change_context from 'pareto-core/dist/implementation/specials/change_context'

import * as signatures from "../../../interface/commands"

//data types
import * as d_write_to_directory from "../../../interface/data/write_to_dictionary"

//dependencies
import * as t_path_to_path from "pareto-resources/dist/implementation/manual/transformers/unrestricted_path/unrestricted_path"
import * as t_path_to_escaped_path from "../transformers/path/escaped_path"


export const $$: signatures.procedures.write_to_directory = p_.command_procedure(
    ($d, $s, $q, $c) => [
        p_.if_.direct(
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
        p_.dictionaryx.parallel(
            $d.directory,
            ($, id) => [
                p_change_context($, ($): p_.Command_Promise<d_write_to_directory.Error__nodes> => {
                    const node_path = t_path_to_path.deprecated_extend_node_path($d.path, { 'addition': id })
                    switch ($[0]) {
                        case 'file': return p_.ss($, ($) => $c['write to file'].execute(
                            {
                                'paragraph': $,
                                'directory path': $d.path,
                                'filename': id,
                                'generic': $d.generic,
                            },
                            ($): d_write_to_directory.Error__nodes => ['file', $],
                        ))
                        case 'directory': return p_.ss($, ($) => $$(null, $q, $c).execute(
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
                        default: return p_.au($[0])
                    }
                }),
            ],
            ($): d_write_to_directory.Error => ['nodes', $]
        )
    ]
)