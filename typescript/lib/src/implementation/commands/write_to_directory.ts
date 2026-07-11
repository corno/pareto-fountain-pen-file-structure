
import * as p_ from 'pareto-core/implementation/command'
import p_variables from 'pareto-core/implementation/command/specials/variables'

import type * as interface_ from "../../declarations/commands.js"

//data types
import type * as s_write_to_directory from "../../interface/schemas/write_to_directory.js"

//dependencies
import * as t_path_to_path from "pareto-resources/implementation/transformers/unrestricted_path/unrestricted_path"
import * as t_path_to_escaped_path from "../transformers/path/escaped_path.js"


export const $$: interface_.write_to_directory = p_.command(
    ($d, $s, $q, $c) => [
        p_.s.if_(
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
        p_.s.dictionary(
            $d.directory,
            ($, id) => p_variables(
                (): p_.Command_Block<s_write_to_directory.Error__nodes> => {
                    const node_path = t_path_to_path.deprecated_extend_node_path($d.path, { 'addition': id })
                    switch ($[0]) {
                        case 'file': return p_.option($, ($) => [
                            $c['write to file'].execute(
                                {
                                    'paragraph': $,
                                    'directory path': $d.path,
                                    'filename': id,
                                    'generic': $d.generic,
                                },
                                ($): s_write_to_directory.Error__nodes => ['file', $],
                            )
                        ])
                        case 'directory': return p_.option($, ($) => [
                            $$(null, $q, $c).execute(
                                {
                                    'directory': $,
                                    'path': $d.generic['escape spaces in path']
                                        ? t_path_to_escaped_path.Node_path(node_path)
                                        : node_path,
                                    'remove before creating': false,
                                    'generic': $d.generic
                                },
                                ($): s_write_to_directory.Error__nodes => ['directory', $],
                            )
                        ])
                        default: return p_.exhaustive($[0])
                    }
                }),
            ($): s_write_to_directory.Error => ['nodes', $]
        )
    ]
)