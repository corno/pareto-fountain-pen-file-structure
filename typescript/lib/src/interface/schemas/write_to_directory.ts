import * as p_ from 'pareto-core/interface/data'

import type * as s_remove from "./fs_unrestricted_remove.js"
import type * as s_fp_fs from "./file-system.js"
import type * as s_path from "./fs_unrestricted_path.js"
import type * as s_write_to_file from "./write_to_file.js"

export type Error =
    | ['remove', s_remove.Error]
    | ['nodes', p_.Dictionary<Error__nodes>]

export type Error__nodes =
    | ['directory', Error]
    | ['file', s_write_to_file.Error]

export type Parameters = {
    'directory': s_fp_fs.Directory,
    'generic': s_write_to_file.Generic_Parameters,
    'path': s_path.Node_Path
    'remove before creating': boolean
}