import * as p_ from 'pareto-core/implementation/transformer'
import type * as p_i from 'pareto-core/interface/transformer'
import p_list_from_text from 'pareto-core/implementation/refiner/specials/list_from_text'
import p_list_build_deprecated from 'pareto-core/implementation/refiner/specials/list_build_deprecated'
import p_text_from_list from 'pareto-core/implementation/transformer/specials/text_from_list'

//data types
import type * as d_path from "pareto-resources/interface/generated/liana/schemas/fs_unrestricted_path/data"
import type * as d_out from "pareto-fountain-pen/interface/generated/liana/schemas/list_of_characters/data"

export namespace interface_ {
    export type Context_path = p_i.Transformer<
        d_path.Context_Path,
        d_path.Context_Path
    >
    export type Node_path = p_i.Transformer<
        d_path.Node_Path,
        d_path.Node_Path
    >
}
import * as temp_interface_ from "../../../../interface/declarations/transformers/path/escaped_path.js"



const replace_space = ($: string): string => {
    const replace = ($: string, search: number, replace: number): d_out.List_of_Characters => p_list_build_deprecated(
        ($i) => {
            p_.from.list(p_list_from_text(
                $,
                ($) => $
            )).map(
                ($) => {
                    if ($ === search) {
                        $i['add item'](replace)
                    } else {
                        $i['add item']($)
                    }
                    return null
                })
        })
    return p_text_from_list(
        replace($, 32, 95 /* space -> underscore */),
        ($) => $,
    )
}

export const Context_path: interface_.Context_path = ($) => ({
        'start': $.start,
        'subpath': p_.from.list($.subpath).map(
            ($) => replace_space($)),
    })

export const Node_path: interface_.Node_path = ($) => ({
        'context': Context_path($.context),
        'node': replace_space($.node)
    })