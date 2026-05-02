import * as _p from 'pareto-core-shorthands/dist/unconstrained'
import * as _pi from 'pareto-core/dist/interface'

import * as d_target from "../interface/to_be_generated/file-system"
import * as d_target_fp from "pareto-fountain-pen/dist/interface/generated/liana/schemas/prose/data"

export namespace n {

    export const file = (
        $: d_target_fp.Paragraph
    ): d_target.Directory__node => ['file', $]

    export const directory = (
        $: _p.Raw_Or_Normal_Dictionary<d_target.Directory__node>
    ): d_target.Directory__node => ['directory', _p.dictionary.literal($)]

}

export const directory = (
    $: _p.Raw_Or_Normal_Dictionary<d_target.Directory__node>
): d_target.Directory => _p.dictionary.literal($)
