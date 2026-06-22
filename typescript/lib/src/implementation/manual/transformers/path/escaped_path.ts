import * as p_ from 'pareto-core/dist/implementation/transformer'
import p_list_from_text from 'pareto-core/dist/implementation/refiner/specials/list_from_text'
import p_list_build_deprecated from 'pareto-core/dist/implementation/refiner/specials/list_build_deprecated'
import p_text_from_list from 'pareto-core/dist/implementation/transformer/specials/text_from_list'

//data types
import * as d_path from "pareto-resources/dist/interface/generated/liana/schemas/fs_unrestricted_path/data"
import * as d_out from "pareto-fountain-pen/dist/interface/generated/liana/schemas/list_of_characters/data"



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

export const Context_path = ($: d_path.Context_Path): d_path.Context_Path => {
    return {
        'start': $.start,
        'subpath': p_.from.list($.subpath).map(
            ($) => replace_space($)),
    }
}

export const Node_path = ($: d_path.Node_Path): d_path.Node_Path => {
    return {
        'context': Context_path($.context),
        'node': replace_space($.node)
    }
}