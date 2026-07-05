import * as p_ from 'pareto-core/interface/data'

import * as d_prose from "pareto-fountain-pen/interface/generated/liana/schemas/prose/data"


export type Directory = p_.Dictionary<Directory__node>

export type Directory__node =
    | ['directory', Directory]
    | ['file', d_prose.Paragraph]