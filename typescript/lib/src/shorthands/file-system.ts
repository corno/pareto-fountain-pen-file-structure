import * as pt from 'pareto-core-shorthands/dist/unconstrained'

import * as d_target from "../interface/data/file-system"
import * as d_target_fp from "pareto-fountain-pen/dist/interface/generated/liana/schemas/prose/data"

export namespace n {

    export const file = (
        $: d_target_fp.Paragraph
    ): d_target.Directory__node => ['file', $]

    export const directory = (
        $: pt.Raw_Or_Normal_Dictionary<d_target.Directory__node>
    ): d_target.Directory__node => ['directory', pt.dictionary($)]

}

export const directory = (
    $: pt.Raw_Or_Normal_Dictionary<d_target.Directory__node>
): d_target.Directory => pt.dictionary($)
