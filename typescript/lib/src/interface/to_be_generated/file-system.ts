import * as p_di from 'pareto-core/dist/data/interface'

import * as d_fp from "pareto-fountain-pen/dist/interface/generated/liana/schemas/prose/data"


export type Directory = p_di.Dictionary<Directory__node>

export type Directory__node =
    | ['directory', Directory]
    | ['file', d_fp.Paragraph]