import { defineType, defineField } from "sanity"

export default defineType({
    name: 'home',
    title: '[0]Startseite',
    type: 'document',
    fields: [
        defineField({
            name: 'heading',
            title: 'Überschrift',
            type: 'array',
            of: [{ type: "string" }],
        }),
        defineField({
            name: 'img',
            title: 'img',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: 'contact',
            title: 'Kontakt Button',
            type: 'array',
            of: [{ type: 'string' }],
        }),
        defineField({
            name: 'github',
            title: 'Github Button',
            type: 'array',
            of: [{ type: 'string' }],
        }),
        defineField({
            name: 'githubLink',
            title: 'Github Link',
            type: 'url'
        }),
    ],

    preview: {
        prepare(){
            return {title: "Startseite"}
        }
    },
})
