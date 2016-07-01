module.exports = function(grunt) {
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: 'client/scripts/app.js',
                dest: 'public/javascripts/app.min.js'
            },
            pos: {
                src: 'client/scripts/controllers/pos.js',
                dest: 'public/javascripts/controllers/pos.min.js'
            },
            newVendor: {
                src: 'client/scripts/controllers/newVendor.js',
                dest: 'public/javascripts/controllers/newVendor.min.js'
            },
            newItem: {
                src: 'client/scripts/controllers/newItem.js',
                dest: 'public/javascripts/controllers/newItem.min.js'
            },
            vendorList: {
                src: 'client/scripts/controllers/vendorList.js',
                dest: 'public/javascripts/controllers/vendorList.min.js'
            },
            itemlist: {
                src: 'client/scripts/controllers/itemList.js',
                dest: 'public/javascripts/controllers/itemList.min.js'
            },
            monthlySales: {
                src: 'client/scripts/controllers/monthlySales.js',
                dest: 'public/javascripts/controllers/monthlySales.min.js'
            },
            vendorSales: {
                src: 'client/scripts/controllers/vendorSales.js',
                dest: 'public/javascripts/controllers/vendorSales.min.js'
            }
        },
        copy: {
            angular: {
                expand: true,
                cwd: "node_modules/",
                src: [
                    "angular/angular.min.js",
                    "angular/angular.min.js.map",
                    "angular/angular-csp.css"
                ],
                "dest": "public/vendor/"
            },
            angularRoute:{
                expand: true,
                cwd: "node_modules/",
                src: [
                    "angular-route/angular-route.min.js",
                    "angular-route/angular-route.min.js.map"
                ],
                "dest": "public/vendor/"
            },
            bootstrap: {
                expand: true,
                cwd: "node_modules/",
                src: [
                    "bootstrap/dist/css/bootstrap.css",
                    "bootstrap/dist/css/bootstrap.css.map",
                    "bootstrap/dist/fonts/glyphicons-halflings-regular.eot",
                    "bootstrap/dist/fonts/glyphicons-halflings-regular.svg",
                    "bootstrap/dist/fonts/glyphicons-halflings-regular.ttf",
                    "bootstrap/dist/fonts/glyphicons-halflings-regular.woff",
                    "bootstrap/dist/fonts/glyphicons-halflings-regular.woff2",
                    "bootstrap/dist/js/bootstrap.min.js"
                ],
                "dest": "public/vendor/"
            },
            styles: {
                expand: true,
                cwd: "client",
                src: [
                    "stylesheets/style.css"
                ],
                "dest": "public/"
            },
            views: {
                expand: true,
                cwd: "client",
                src: [
                    "views/routes/pos.html",
                    "views/routes/new_vendor.html",
                    "views/routes/new_item.html",
                    "views/routes/current_vendor_list.html",
                    "views/routes/current_item_list.html",
                    "views/routes/monthly_sales.html",
                    "views/routes/vendor_sales.html"
                ],
                "dest": "public/"
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // Default task(s).
    grunt.registerTask('default', ['copy', 'uglify']);

};