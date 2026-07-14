
import * as p_ from 'pareto-core-shorthands/unconstrained_target'
import * as p_prose from 'pareto-core/temp/fountain_pen/prose'

import type * as s_target from "../../interface/schemas/file-system.js"

export namespace n {

    export const file = (
        $: p_prose.Paragraph
    ): s_target.Directory__node => ['file', $]

    export const directory = (
        $: p_.Normal_Dictionary<s_target.Directory__node>
    ): s_target.Directory__node => ['directory', p_.dictionary($)]

}

export const directory = (
    $: p_.Normal_Dictionary<s_target.Directory__node>
): s_target.Directory => p_.dictionary($)
