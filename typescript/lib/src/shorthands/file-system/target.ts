import * as p_ from 'pareto-core-shorthands/unconstrained_target'

import type * as d_target from "../../interface/data/file-system.js"
import type * as d_target_fp from "pareto-fountain-pen/interface/data/prose"

export namespace n {

    export const file = (
        $: d_target_fp.Paragraph
    ): d_target.Directory__node => ['file', $]

    export const directory = (
        $: p_.Normal_Dictionary<d_target.Directory__node>
    ): d_target.Directory__node => ['directory', p_.dictionary($)]

}

export const directory = (
    $: p_.Normal_Dictionary<d_target.Directory__node>
): d_target.Directory => p_.dictionary($)
