export default{
    name:"blog",
    type:"document",
    title:"Blog",
    fields:[
        {
            title:"Blog Title",
            type:"string",
            name:"name",
        },
        {
            title: "Blog Thumbnail",
            type: "image",
            name: "thumbnail", // Correct spelling
            options: {
              hotspot: true,
            },
            fields: [
              {
                name: "alt",
                title: "Image Alt",
                type: "string",
              },
            ],
          },
        {
            name:"content",
            title:"Blog Description",
            type:"array",
            of:[
                { type: "block" }, 
                {
                    type:"image",
                    options: {
                        hotspot:true
                    }
                }
              
            ],
           
            
        },
        {
            name:"author",
            title:"Author",
            type:"reference",
            to:[
                {type:"author"}
            ]
        },
        {
            name:"category",
            title:"Category",
            type:"reference",
            to:[
                {type:"category"}
            ]

        },
        {
            name:"publishdate",
            title: "Published date",
            type:"datetime"

        },
        {
            title: "Excerpt",
            name: "excerpt",
            type: "text",
        },
        {
            title:"Tag",
            name:"tag",
            type:"reference",
            to:[
                {type:"tag"}
            ]
        }

    ]
}