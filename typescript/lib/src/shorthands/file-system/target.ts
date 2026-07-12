import * as p_ from 'pareto-core-shorthands/unconstrained_target'

import type * as s_target from "../../interface/schemas/file-system.js"
import type * as s_target_fp from "../../interface/schemas/prose.js"

export namespace n {

    export const file = (
        $: s_target_fp.Paragraph
    ): s_target.Directory__node => ['file', $]

    export const directory = (
        $: p_.Normal_Dictionary<s_target.Directory__node>
    ): s_target.Directory__node => ['directory', p_.dictionary($)]

}

export const directory = (
    $: p_.Normal_Dictionary<s_target.Directory__node>
): s_target.Directory => p_.dictionary($)
