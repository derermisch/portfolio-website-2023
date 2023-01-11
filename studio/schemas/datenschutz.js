import { defineType, defineField } from "sanity"

export default defineType({
    name: 'datenschutz',
    title: '[Datenschutz]',
    type: 'document',
    fields: [
        defineField({
            name: 'text',
            title: 'Datenschutz Text',
            type: 'blockContent',
        }),
    ],

    preview: {
        prepare(){
            return {title: "Datenschutz"}
        }
    },
})
