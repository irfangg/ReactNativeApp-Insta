const POSTDATA = {
    "posts": [{
            id: '01',
            user: {
                id: '01',
                username: 'irfan',
                name: 'Irfan G G',
                profile_picture: 'https://img.freepik.com/free-photo/view-3d-man-holding-laptop_23-2150709818.jpg?size=626&ext=jpg&ga=GA1.1.1252276129.1703776781&semt=sph'
            },
            image: 'https://img.freepik.com/free-photo/ai-nuclear-energy-background-future-innovation-disruptive-technology_53876-129783.jpg?size=626&ext=jpg&ga=GA1.1.1252276129.1703776781&semt=sph',
            caption: 'Future of technology',
            likes: 10000,
            comments: [{
                "id": "1",
                "user": {
                    "id": "2",
                    "username": "mountainlover",
                    "name": "Mountain Lover",
                    "profile_picture": "https://www.seekpng.com/png/detail/1-16105_man-cartoon-avatar-cartoon-man-face-icon.png"
                },
                "text": "Wow, amazing!"
            }]
        },
        {
            "id": "1",
            "user": {
                "id": "1",
                "username": "naturelover",
                "name": "Nature Lover",
                "profile_picture": "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?size=626&ext=jpg&ga=GA1.1.1252276129.1703776781&semt=sph"
            },
            "image": "https://img.freepik.com/free-photo/beautiful-scenery-rock-formations-by-sea-queens-bath-kauai-hawaii-sunset_181624-36857.jpg?size=626&ext=jpg&ga=GA1.1.1252276129.1703776781&semt=ais",
            "caption": "Beautiful sunset at the beach.",
            "likes": 100,
            "comments": [{
                "id": "1",
                "user": {
                    "id": "2",
                    "username": "mountainlover",
                    "name": "Mountain Lover",
                    "profile_picture": "https://www.seekpng.com/png/detail/1-16105_man-cartoon-avatar-cartoon-man-face-icon.png"
                },
                "text": "Wow, amazing shot!"
            }]
        },
        {
            "id": "2",
            "user": {
                "id": "2",
                "username": "cityexplorer",
                "name": "City Explorer",
                "profile_picture": "https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?size=626&ext=jpg&ga=GA1.1.1252276129.1703776781&semt=sph"
            },
            "image": "https://img.freepik.com/free-photo/young-man-walking-park-zone_259150-58560.jpg?size=626&ext=jpg&ga=GA1.1.1252276129.1703776781&semt=ais",
            "caption": "Morning walk in the park.",
            "likes": 150,
            "comments": [{
                "id": "1",
                "user": {
                    "id": "1",
                    "username": "naturelover",
                    "name": "Nature Lover",
                    "profile_picture": "https://www.seekpng.com/png/detail/10-106192_cartoon-girl-with-green-hat-image-cartoon-avatar.png"
                },
                "text": "Looks like a great place to relax."
            }]
        },
        {
            "id": "3",
            "user": {
                "id": "3",
                "username": "traveladdict",
                "name": "Travel Addict",
                "profile_picture": "https://img.freepik.com/free-psd/3d-illustration-person-with-long-hair_23-2149436197.jpg?size=626&ext=jpg&ga=GA1.1.1252276129.1703776781&semt=sph"
            },
            "image": "https://img.freepik.com/free-photo/machu-picchu-citadel_181624-1391.jpg?size=626&ext=jpg&ga=GA1.1.1252276129.1703776781&semt=ais",
            "caption": "Exploring the ancient ruins of Machu Picchu.",
            "likes": 200,
            "comments": [{
                    "id": "1",
                    "user": {
                        "id": "1",
                        "username": "naturelover",
                        "name": "Nature Lover",
                        "profile_picture": "https://www.seekpng.com/png/detail/10-106192_cartoon-girl-with-green-hat-image-cartoon-avatar.png"
                    },
                    "text": "Wow, what an amazing place!"
                },
                {
                    "id": "2",
                    "user": {
                        "id": "2",
                        "username": "cityexplorer",
                        "name": "City Explorer",
                        "profile_picture": "https://www.seekpng.com/png/detail/11-115406_free-avatar-vector-girl-cartoon-cartoon-avatar.png"
                    },
                    "text": "I've always wanted to visit Machu Picchu."
                }
            ]
        }
    ]
};

export default POSTDATA;