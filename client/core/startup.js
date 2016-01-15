Meteor.startup(function () {
    SEO.config({
        title: 'Brew - Full-Service Digital Agency in Hong Kong',
        meta: {
            'description': 'Brew is a full-service creative digital agency in Hong Kong, helping SMEs and startups launch their business since 2015.'
        },
        og: {
        	'site_name': 'Brew',
            'image': 'http://www.brew.com.hk/images/pictures/og-home.png',
            'image:type': 'image/png',
            'image:width': 1200,
            'image:height': 630
		},
		auto: {
			twitter: true,
			og: true,
			set: ['description']
		}
    });
	// Loads segment analytics
	var analytics = window.analytics = window.analytics || [];
	if (!analytics.initialize) {
		if (analytics.invoked) {
		  window.console && console.error && console.error("Segment snippet included twice.");
		} else {
		    analytics.invoked = !0;
		    analytics.methods = ["trackSubmit", "trackClick", "trackLink",
		        "trackForm", "pageview", "identify", "reset", "group",
		        "track", "ready", "alias", "page", "once", "off", "on"
		    ];
		    analytics.factory = function(t) {
		        return function() {
		            var e = Array.prototype.slice.call(arguments);
		            e.unshift(t);
		            analytics.push(e);
		            return analytics
		        }
		    };
		    for (var t = 0; t < analytics.methods.length; t++) {
		        var e = analytics.methods[t];
		        analytics[e] = analytics.factory(e)
		    }
		    analytics.load = function(t) {
		        var e = document.createElement("script");
		        e.type = "text/javascript";
		        e.async = !0;
		        e.src = ("https:" === document.location.protocol ?
		                "https://" : "http://") +
		            "cdn.segment.com/analytics.js/v1/" + t +
		            "/analytics.min.js";
		        var n = document.getElementsByTagName("script")[0];
		        n.parentNode.insertBefore(e, n)
		    };
		    analytics.SNIPPET_VERSION = "3.1.0";
		    analytics.load("PBmof0WnR67uNoiM39f6E0kPvXszeS63");
		}
	}
});