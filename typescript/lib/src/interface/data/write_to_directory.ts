import * as p_ from 'pareto-core/interface/data'

import type * as d_remove from "pareto-filesystem-unrestricted-api/interface/data/fs_unrestricted_remove"
import type * as d_fp_fs from "./file-system.js"
import type * as d_path from "pareto-resources/interface/data/fs_unrestricted_path"
import type * as d_write_to_file from "./write_to_file.js"

export type Error =
    | ['remove', d_remove.Error]
    | ['nodes', p_.Dictionary<Error__nodes>]

export type Error__nodes =
    | ['directory', Error]
    | ['file', d_write_to_file.Error]

export type Parameters = {
    'directory': d_fp_fs.Directory,
    'generic': d_write_to_file.Generic_Parameters,
    'path': d_path.Node_Path
    'remove before creating': boolean
}