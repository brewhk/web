SeoCollection.update(
    {
        route_name: 'home'
    },
    {
        $set: {
            route_name: 'home',
            title: 'Brew - Full-Service Creative Digital Agency in Hong Kong',
            meta: {
                'description': 'Brew is a full-service creative digital agency in Hong Kong, specializing in the Meteor JavaScript Framework.'
            },
            link: [{
                rel: "canonical",
                href: "http://www.brew.com.hk/"
            }],
            og: {
                'title': "Brew - Full-Service Creative Digital Agency in Hong Kong",
                'description': "Brew is a full-service creative digital agency in Hong Kong, specializing in the Meteor JavaScript Framework.",
                'image': 'http://www.brew.com.hk/images/pictures/og-home.png',
                'image:type': 'image/png',
                'image:width': 1200,
                'image:height': 630
            }
        }
    },
    {
        upsert: true
    }
);

SeoCollection.update(
    {
        route_name: 'contact-us'
    },
    {
        $set: {
            route_name: 'contact-us',
            title: "Contact Us - Brew - Hong Kong's Creative Digital Agency",
            meta: {
                'description': 'Brew is a full-service creative digital agency in Hong Kong, specializing in Meteor. Contact us today and turn your ideas into reality!'
            },
            link: [{
                rel: "canonical",
                href: "http://www.brew.com.hk/contact-us"
            }],
            og: {
                'title': "Contact Us - Brew",
                'description': "Brew is a full-service creative digital agency in Hong Kong, specializing in Meteor. Contact us today and turn your ideas into reality!"
            }
        }
    },
    {
        upsert: true
    }
);

SeoCollection.update(
    {
        route_name: 'process'
    },
    {
        $set: {
            route_name: 'process',
            title: "The Brewing Process by Brew - Hong Kong's Digital Agency",
            meta: {
                'description': "The Brew team have successfully delivered many websites and applications. What's our development process? We'd love to share it with you!"
            },
            link: [{
                rel: "canonical",
                href: "http://www.brew.com.hk/process"
            }],
            og: {
                'title': "The Brewing Process",
                'description': "The Brew team have successfully delivered many websites and applications. What's our development process? We'd love to share it with you!",
                'image': [
                    'http://www.brew.com.hk/images/pictures/process-hero-proposal.png',
                    'http://www.brew.com.hk/images/pictures/process-hero-planning.png',
                    'http://www.brew.com.hk/images/pictures/process-hero-design.png',
                    'http://www.brew.com.hk/images/pictures/process-hero-development.png',
                    'http://www.brew.com.hk/images/pictures/process-hero-post-launch.png'
                ],
                'image:type': 'image/png',
                'image:width': 1366,
                'image:height': 768
            }
        }
    },
    {
        upsert: true
    }
);

SeoCollection.update(
    {
        route_name: 'services'
    },
    {
        $set: {
            route_name: 'services',
            title: "Services - Brew - Hong Kong's Creative Digital Agency",
            meta: {
                'description': 'Brew is a full-service creative digital agency in Hong Kong. We offer a wide range of services, including Branding, Design, Development, Marketing and more.'
            },
            link: [{
                rel: "canonical",
                href: "http://www.brew.com.hk/services"
            }],
            og: {
                'title': "Services - Brew",
                'description': "Brew is a full-service creative digital agency in Hong Kong. We offer a wide range of services, including Branding, Design, Development, Marketing and more."
            }
        }
    },
    {
        upsert: true
    }
);

SeoCollection.update(
    {
        route_name: 'solutions'
    },
    {
        $set: {
            route_name: 'solutions',
            title: "Solutions - Brew - Hong Kong's Creative Digital Agency",
            meta: {
                'description': 'Brew is a full-service creative digital agency in Hong Kong. Need help founding a startup? Launching an app? We offer packages that takes care of everything.'
            },
            link: [{
                rel: "canonical",
                href: "http://www.brew.com.hk/solutions"
            }],
            og: {
                'title': "Solutions - Brew",
                'description': "Brew is a full-service creative digital agency in Hong Kong. Need help founding a startup? Launching an app? We offer packages that takes care of everything."
            }
        }
    },
    {
        upsert: true
    }
);

SeoCollection.update(
    {
        route_name: 'projects'
    },
    {
        $set: {
            route_name: 'projects',
            title: "Projects - Brew - Hong Kong's Creative Digital Agency",
            meta: {
                'description': 'Brew is a full-service creative digital agency in Hong Kong. Please check out our past projects! If you like what you see, feel free to give us a call!'
            },
            link: [{
                rel: "canonical",
                href: "http://www.brew.com.hk/projects"
            }],
            og: {
                'title': "Projects - Brew",
                'description': "Brew is a full-service creative digital agency in Hong Kong. Please check out our past projects! If you like what you see, feel free to give us a call!"
            }
        }
    },
    {
        upsert: true
    }
);

SeoCollection.update(
    {
        route_name: 'projects-skeduo'
    },
    {
        $set: {
            route_name: 'projects-skeduo',
            title: "Skeduo by Brew - Hong Kong's Full-Service Digital Agency",
            meta: {
                'description': "Skeduo is an upcoming mobile application that encourages regular 1-to-1, face-to-face professional networking. This is our progress so far."
            },
            link: [{
                rel: "canonical",
                href: "http://www.brew.com.hk/projects/skeduo"
            }],
            og: {
                'title': "Skeduo by Brew",
                'description': "Skeduo is an upcoming mobile application that encourages regular 1-to-1, face-to-face professional networking. This is our progress so far.",
                'image': [
                    'http://www.brew.com.hk/images/pictures/projects/skeduo/skeduo-1.png',
                    'http://www.brew.com.hk/images/pictures/projects/skeduo/skeduo-2.png',
                    'http://www.brew.com.hk/images/pictures/projects/skeduo/skeduo-3.png',
                    'http://www.brew.com.hk/images/pictures/projects/skeduo/skeduo-4.png',
                    'http://www.brew.com.hk/images/pictures/projects/skeduo/skeduo-5.png'
                ],
                'image:type': 'image/png',
                'image:width': 1920,
                'image:height': 1080
            }
        }
    },
    {
        upsert: true
    }
);

SeoCollection.update(
    {
        route_name: 'projects-takeoff'
    },
    {
        $set: {
            route_name: 'projects-takeoff',
            title: "Takeoff by Brew - Hong Kong's Full-Service Digital Agency",
            meta: {
                'description': "Takeoff is a landing page template that encourages visitors to sign up or download your app. Completely open-sourced, it's our gift back to the community."
            },
            link: [{
                rel: "canonical",
                href: "http://www.brew.com.hk/projects/takeoff"
            }],
            og: {
                'title': "Takeoff by Brew",
                'description': "Takeoff is a landing page template that encourages visitors to sign up or download your app. Completely open-sourced, it's our gift back to the community.",
                'image': [
                    'http://www.brew.com.hk/images/pictures/projects/bebello/screenshots/product.png',
                    'http://www.brew.com.hk/images/pictures/projects/bebello/screenshots/order.png',
                    'http://www.brew.com.hk/images/pictures/projects/bebello/screenshots/home.png',
                    'http://www.brew.com.hk/images/pictures/projects/bebello/screenshots/browse.png',
                    'http://www.brew.com.hk/images/pictures/projects/bebello/screenshots/vendor-page.png'
                ],
                'image:type': 'image/png',
                'image:width': 1024,
                'image:height': 768
            }
        }
    },
    {
        upsert: true
    }
);

SeoCollection.update(
    {
        route_name: 'projects-bebello'
    },
    {
        $set: {
            route_name: 'projects-bebello',
            title: "Bebello by Brew - Hong Kong's Full-Service Digital Agency",
            meta: {
                'description': "Bebello is an online marketplace for handmade products in Hong Kong. Launched in December 2015, it offers a great platform for local artists and designers."
            },
            link: [{
                rel: "canonical",
                href: "http://www.brew.com.hk/projects/bebello"
            }],
            og: {
                'title': "Bebebllo by Brew",
                'description': "Bebello is an online marketplace for handmade products in Hong Kong. Launched in December 2015, it offers a great platform for local artists and designers.",
                'image': [
                    'http://www.brew.com.hk/images/pictures/projects/bebello/screenshots/product.png',
                    'http://www.brew.com.hk/images/pictures/projects/bebello/screenshots/order.png',
                    'http://www.brew.com.hk/images/pictures/projects/bebello/screenshots/home.png',
                    'http://www.brew.com.hk/images/pictures/projects/bebello/screenshots/browse.png',
                    'http://www.brew.com.hk/images/pictures/projects/bebello/screenshots/vendor-page.png'
                ],
                'image:type': 'image/png',
                'image:width': 1024,
                'image:height': 768
            }
        }
    },
    {
        upsert: true
    }
);

SeoCollection.update(
    {
        route_name: 'projects-techni'
    },
    {
        $set: {
            route_name: 'projects-techni',
            title: "Techni Photo by Brew - Hong Kong's Creative Digital Agency",
            meta: {
                'description': "In 2015, we built an online ordering platform for our partner photography firm - Techni Photo. It's serving hundreds of thousands of users every year."
            },
            link: [{
                rel: "canonical",
                href: "http://www.brew.com.hk/projects/techni-photo"
            }],
            og: {
                'title': "Techni Photo by Brew",
                'description': "In 2015, we built an online ordering platform for our partner photography firm - Techni Photo. It's serving hundreds of thousands of users every year.",
                'image': [
                    'http://www.brew.com.hk/images/pictures/projects/techni/1.png',
                    'http://www.brew.com.hk/images/pictures/projects/techni/2.png',
                    'http://www.brew.com.hk/images/pictures/projects/techni/3.png',
                    'http://www.brew.com.hk/images/pictures/projects/techni/4.png',
                    'http://www.brew.com.hk/images/pictures/projects/techni/5.png',
                    'http://www.brew.com.hk/images/pictures/projects/techni/6.png'
                ],
                'image:type': 'image/png',
                'image:width': 1352,
                'image:height': 767
            }
        }
    },
    {
        upsert: true
    }
);