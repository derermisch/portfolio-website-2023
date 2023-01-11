import { defineType, defineField } from "sanity"

export default defineType({
    name: 'impressum',
    title: '[Impressum]',
    type: 'document',
    fields: [
        defineField({
            name: 'text',
            title: 'Impressum Text',
            type: 'blockContent',
        }),
    ],

    preview: {
        prepare(){
            return {title: "Impressum"}
        }
    },
})
