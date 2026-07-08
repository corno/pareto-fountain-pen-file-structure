
import type * as d_write_file from "pareto-filesystem-unrestricted-api/interface/generated/liana/schemas/fs_unrestricted_write_file/data"
import type * as d_make_directory from "pareto-filesystem-unrestricted-api/interface/generated/liana/schemas/fs_unrestricted_make_directory/data"
import type * as d_fp_block from "pareto-fountain-pen/interface/generated/liana/schemas/prose/data"
import type * as d_path from "pareto-resources/interface/generated/liana/schemas/fs_unrestricted_path/data"
import type * as d_fp_prose_serialize from "pareto-fountain-pen/interface/data/prose_serialize"

export type Error =
    | ['make directory', d_make_directory.Error]
    | ['write file', d_write_file.Error]

export type Parameters = {
    'paragraph': d_fp_block.Paragraph,
    'generic': Generic_Parameters,
    'directory path': d_path.Node_Path
    'filename': string
}

export type Generic_Parameters = {
    'escape spaces in path': boolean
    'prose serialize': d_fp_prose_serialize.Parameters
}