import * as p_ from 'pareto-core/interface/data'

import * as d_remove from "pareto-resources/interface/generated/liana/schemas/fs_unrestricted_remove/data"
import * as d_fp_fs from "./file-system.js"
import * as d_path from "pareto-resources/interface/generated/liana/schemas/fs_unrestricted_path/data"
import * as d_write_to_file from "./write_to_file.js"

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