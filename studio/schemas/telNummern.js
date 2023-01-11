import { defineType, defineField } from 'sanity'

export default defineType({
    title: 'Telefon Nummern',
    name: 'telNummern',
    type: 'object',
    fields: [
        defineField({
            name: "beschreibung",
            title: 'Beschreibung',
            type: 'string',
        }),
        defineField({
            name: "telNummer",
            title: "Telefonnummer",
            type: "string"
        }),
    ],
})