var courseData = [
    {
        id: 1,
        name: "javascript",
        instractor: "the mental creator",
        image: "data:image/png;base64,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",
        price: 1000,

    },
    {
        id: 2,
        name: "React",
        instractor: "the mental creator",
        image: "https://www.freecodecamp.org/news/content/images/2021/06/Ekran-Resmi-2019-11-18-18.08.13.png",
        price: 1200,

    },
    {
        id: 1,
        name: "Django",
        instractor: "the mental creator",
        image: "https://assets.website-files.com/5b6901669b93d7837e36dc4c/615e1104ffbf5ae592265cc7_python-django.png",
        price: 1000,

    },
];

export default courseData;