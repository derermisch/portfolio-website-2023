import { defineType, defineField } from "sanity"

export default defineType({
    title: "Angebots-Daten",
    name: 'angeboteDaten',
    type: 'object',
    fieldsets: [
        {name: "angebotsDaten", title: "Angebot erstellen / überarbeiten"}
    ],
    fields: [
        defineField({
            name: "angebotsTitel",
            title: "Titel des Angebotes",
            type: "string",
            fieldset: "angebotsDaten"
        }),
        defineField({
            name: "angebotsText",
            title: "Dazugehöriger Text",
            type: "blockContent",
            fieldset: "angebotsDaten"
        })
    ],
})
