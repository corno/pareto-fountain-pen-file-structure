
import type * as p_ from 'pareto-core/interface/transformer'

//data types
import type * as d_path from "pareto-resources/interface/generated/liana/schemas/fs_unrestricted_path/data"


export type Context_path = p_.Transformer<
    d_path.Context_Path,
    d_path.Context_Path
>
export type Node_path = p_.Transformer<
    d_path.Node_Path,
    d_path.Node_Path
>

