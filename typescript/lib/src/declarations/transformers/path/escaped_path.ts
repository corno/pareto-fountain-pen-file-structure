
import type * as p_ from 'pareto-core/interface/transformer'

//schemas
import type * as s_path from "pareto-resources/interface/data/fs_unrestricted_path"


export type Context_path = p_.Transformer<
    s_path.Context_Path,
    s_path.Context_Path
>
export type Node_path = p_.Transformer<
    s_path.Node_Path,
    s_path.Node_Path
>

