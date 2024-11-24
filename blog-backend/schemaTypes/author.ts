export default{
    name:"author",
    type:"document",
    title:"Author",
    fields:[
        {
            title:"Author name",
            type:"string",
            name:"author"
        },
        {
            title: "Profile Picture",
            name: "profilePicture",
            type: "image",
            options: {
              hotspot: true,
            },
          },
    ]
}