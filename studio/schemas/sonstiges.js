import { defineType, defineField } from "sanity"

export default defineType({
    name: 'sonstiges',
    title: '[Sonstiges]',
    type: 'document',
    fields: [
        defineField({
            name: 'backgroundImg',
            title: 'Hintergrundbild',
            type: 'image',
            options: {
                hotspot: true
            }
        }),
    ],

    preview: {
        prepare(){
            return {title: "Sonstiges"}
        }
    },
})
