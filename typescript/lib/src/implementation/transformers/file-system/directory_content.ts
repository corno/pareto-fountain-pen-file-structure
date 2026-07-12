import * as p_ from 'pareto-core/implementation/transformer'

//schemas
import * as s_in from "../../../interface/schemas/file-system.js"
import * as s_out from "pareto-filesystem-unrestricted-api/interface/schemas/directory_content"

namespace declarations {

    export type Directory = p_.Transformer_With_Parameter<
        s_in.Directory,
        s_out.Directory,
        {
            'indentation': string
            'newline': string
        }
    >

}

//dependencies
import * as t_prose_to_text from "pareto-fountain-pen/implementation/transformers/prose/text"

export const Directory: declarations.Directory = ($, $p) => p_.from.dictionary($).map(
    ($) => p_.from.state($).decide(
        ($) => {
            switch ($[0]) {
                case 'directory': return p_.ss($, ($) => ['directory', Directory($, $p)])
                case 'file': return p_.ss($, ($) => ['file', t_prose_to_text.Paragraph(
                    $,
                    $p
                )])
                default: return p_.au($[0])
            }
        }
    )
)