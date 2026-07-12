import * as p_ from 'pareto-core/implementation/transformer'
import p_list_from_text from 'pareto-core/implementation/refiner/specials/list_from_text'
import p_list_build_deprecated from 'pareto-core/implementation/refiner/specials/list_build_deprecated'
import p_text_from_list from 'pareto-core/implementation/transformer/specials/text_from_list'

import type * as interface_ from "../../../declarations/transformers/path/escaped_path.js"

//schemas
import type * as s_out from "pareto-fountain-pen/interface/data/list_of_characters"



const replace_space = ($: string): string => {
    const replace = ($: string, search: number, replace: number): s_out.List_of_Characters => p_list_build_deprecated(
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