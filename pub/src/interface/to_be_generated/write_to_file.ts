
import * as d_write_file from "pareto-resources/dist/interface/generated/liana/schemas/write_file/data"
import * as d_make_directory from "pareto-resources/dist/interface/generated/liana/schemas/make_directory/data"
import * as d_fp_block from "pareto-fountain-pen/dist/interface/generated/liana/schemas/prose/data"
import * as d_path from "pareto-resources/dist/interface/generated/liana/schemas/path/data"
import * as d_fp_prose_serialize from "pareto-fountain-pen/dist/interface/to_be_generated/block_serialize"

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