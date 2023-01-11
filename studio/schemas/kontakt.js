import { defineType, defineField } from "sanity"

export default defineType({
    name: 'kontakt',
    title: '[2]Kontakt',
    type: 'document',
    fields: [
        defineField({
            name: 'direktHeading',
            title: 'Erste Überschrift',
            type: 'string',
        }),
        defineField({
            name: "telefonnummern",
            title: "Telefonnummern",
            type: 'array',
            of: [{ type: 'telNummern'}]
        }),
        defineField({
            name: "direktText",
            title: "Text unter Direkt",
            type: "string"
        }),
        defineField({
            name: 'anfrageHeading',
            title: 'Zweite Überschrift',
            type: 'string',
        }),
        defineField({
            name: "formText",
            title: "Text unter Form",
            type: "string"
        }),
    ],

    preview: {
        prepare(){
            return {title: "Kontakt"}
        }
    },
})
