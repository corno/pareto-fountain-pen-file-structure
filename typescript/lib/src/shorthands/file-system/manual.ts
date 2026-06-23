import * as p_ from 'pareto-core-shorthands/dist/unconstrained_manual'

import * as d_target from "../../interface/data/file-system"
import * as d_target_fp from "pareto-fountain-pen/dist/interface/generated/liana/schemas/prose/data"

export namespace n {

    export const file = (
        $: d_target_fp.Paragraph
    ): d_target.Directory__node => ['file', $]

    export const directory = (
        $: p_.Raw_Dictionary<d_target.Directory__node>
    ): d_target.Directory__node => ['directory', p_.dictionary($)]

}

export const directory = (
    $: p_.Raw_Dictionary<d_target.Directory__node>
): d_target.Directory => p_.dictionary($)
