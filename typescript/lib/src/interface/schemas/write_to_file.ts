import * as p_prose from 'pareto-core/temp/fountain_pen/prose'

import type * as s_write_file from "./fs_unrestricted_write_file.js"
import type * as s_make_directory from "./fs_unrestricted_make_directory.js"
import type * as s_path from "./fs_unrestricted_path.js"
import type * as s_fp_prose_serialize from "./prose_serialize.js"

export type Error =
    | ['make directory', s_make_directory.Error]
    | ['write file', s_write_file.Error]

export type Parameters = {
    'paragraph': p_prose.Paragraph,
    'generic': Generic_Parameters,
    'directory path': s_path.Node_Path
    'filename': string
}

export type Generic_Parameters = {
    'escape spaces in path': boolean
    'prose serialize': s_fp_prose_serialize.Parameters
}