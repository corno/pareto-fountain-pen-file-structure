
import type * as p_i from 'pareto-core/interface/transformer'
import p_list_from_text from 'pareto-core/implementation/refiner/specials/list_from_text'
import p_list_build_deprecated from 'pareto-core/implementation/refiner/specials/list_build_deprecated'
import p_text_from_list from 'pareto-core/implementation/transformer/specials/text_from_list'

//data types
import type * as d_path from "pareto-resources/interface/generated/liana/schemas/fs_unrestricted_path/data"
import type * as d_out from "pareto-fountain-pen/interface/generated/liana/schemas/list_of_characters/data"


    export type Context_path = p_i.Transformer<
        d_path.Context_Path,
        d_path.Context_Path
    >
    export type Node_path = p_i.Transformer<
        d_path.Node_Path,
        d_path.Node_Path
    >

