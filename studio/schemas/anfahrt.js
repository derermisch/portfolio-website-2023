import { defineType, defineField } from "sanity"

export default defineType({
    name: 'anfahrt',
    title: '[3]Anfahrt',
    type: 'document',
    fields: [
        defineField({
            name: 'location',
            title: 'Location für GoogleMaps',
            type: 'geopoint',
        }),
        defineField({
            name: "headingAdresse",
            title: "Überschrift 1",
            type: "string",
            initialValue: "Adresse"
        }),
        defineField({
            name: "strasse",
            title: "Straße",
            type: "string",
        }),
        defineField({
            name: "ort",
            title: "Ort",
            type: "string",
        }),
        defineField({
            name: "headingWeg",
            title: "Überschrift 2",
            type: "string",
            initialValue: "Wegbeschreibung"
        }),
        defineField({
            name: "wegbeschreibung",
            title: "Wegbeschreibung",
            type: "string",
        })
    ],

    preview: {
        prepare(){
            return {title: "Anfahrt"}
        }
    },
})
