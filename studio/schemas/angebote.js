import { defineType, defineField } from "sanity"

export default defineType({
    name: 'angebote',
    title: '[1]Angebote',
    type: 'document',
    fields: [
        defineField({
            name: 'heading',
            title: 'Überschrift',
            type: 'string',
            initialValue: "Angebote"
        }),
        defineField({
            name: "beschreibung",
            title: "Beschreibung",
            type: "string"
        }),
        defineField({
            name: 'angeboteArray',
            title: 'Alle Angebote',
            type: 'array',
            of: [{ type: 'angeboteDaten' }],
        }),
        defineField({
            name: "ausgeklappt",
            title: "Erstes Feld ausgeklappt",
            type: "boolean",
            initialValue: true
        })
    ],

    preview: {
        select: {
            title: 'heading',
        },
    },
})
