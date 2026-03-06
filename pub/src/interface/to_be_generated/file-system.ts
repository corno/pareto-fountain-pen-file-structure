import * as _pi from 'pareto-core/dist/interface'

import * as d_fp from "pareto-fountain-pen/dist/interface/generated/liana/schemas/prose/data"


export type Directory = _pi.Dictionary<Directory__node>

export type Directory__node =
    | ['directory', Directory]
    | ['file', d_fp.Paragraph]