   import { config, fields, collection } from '@keystatic/core';

   export default config({
     storage: {
       kind: 'github',
       repo: { 
         owner: 'Fatah791', 
         name: 'fata' 
       },
     },
     collections: {
       posts: collection({
         label: 'Posts',
         slugField: 'title',
         schema: {
           title: fields.slug({ name: { label: 'Title' } }),
           content: fields.markdoc({ label: 'Content' }),
         },
       }),
     },
   });