import * as p_ from 'pareto-core/dist/interface/data'

import * as d_prose from "pareto-fountain-pen/dist/interface/generated/liana/schemas/prose/data"


export type Directory = p_.Dictionary<Directory__node>

export type Directory__node =
    | ['directory', Directory]
    | ['file', d_prose.Paragraph]