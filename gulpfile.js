'use strict'

var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var posthtml = require('gulp-posthtml');
var postcss = require('gulp-postcss');
var csso = require('gulp-csso');
var imagemin = require('gulp-imagemin');
var pug = require('gulp-pug');
var autoprefixer = require('gulp-autoprefixer');
var plumber = require('gulp-plumber');
var cssnano = require('gulp-cssnano');
var rename = require("gulp-rename");
var webp = require('gulp-webp');
var include = require("gulp-include");
var minify = require('gulp-minify');
var cache = require('gulp-cache');
var build = require('gulp-build');
var del = require('del');


gulp.task("sass", function () {
    return gulp.src("sass/**/*.scss")////
        .pipe(plumber())
        .pipe(sass())
        .pipe(postcss([
            autoprefixer()
        ]))
        .pipe(gulp.dest("css"))
        .pipe(minify())
        .pipe(rename("style.min.css"))
        .pipe(gulp.dest("css"))
        .pipe(server.stream());
});


gulp.task('sass', function () { // Создаем таск Sass
    return gulp.src('sass/**/*.scss') // Берем источник
        .pipe(sass()) // Преобразуем Sass в CSS посредством gulp-sass
        .pipe(gulp.dest('css')) // Выгружаем результата в папку app/css
        .pipe(browserSync.reload({ stream: true })) // Обновляем CSS на странице при изменении
});

gulp.task('watch', ['browser-sync', 'sass'], function () {
    gulp.watch('sass/**/*.scss', ['sass']); // Наблюдение за sass файлами
    // Наблюдение за другими типами файлов
});
//browser-sync//
gulp.task('browser-sync', function () {
    var files = [
        'html/**/*.html',  ////
        'css/**/*.css',
        'img/**/*.png',
        'js/**/*.js'
    ];
    browserSync.init(files, {
        server: {
            baseDir: './'
        }
    });
});
//end browser-sync//
//watch//
gulp.task('watch', ['browser-sync', 'sass', 'html', 'js', 'img'], function () {
    gulp.watch('sass/**/*scss', ['sass']);
    gulp.watch('src/*.html', browserSync.reload);
    gulp.watch('src/js/**/*js', browserSync.reload);
    gulp.watch('src/img/**/*', browserSync.reload);  ////
});
//end watch//


//html//
gulp.task("html", function () {
    return gulp.src("*.html")
        .pipe(posthtml([
            include()
        ]))
        .pipe(gulp.dest("dist"));
});
//end html//
//js//
gulp.task('js', function () {
    gulp.src('js/*.js')
        .pipe(minify())
        .pipe(gulp.dest("dist/js"))
    gulp.watch('js/*.js', ['uglify']);
});
gulp.task('uglify', function () {
    gulp.src('js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});
gulp.task('minify', function () {
    gulp.src('js/main.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
});
//end js//
//img//
gulp.task('img', function () {
    return gulp.src('src/img/**/*') // Берем все изображения из app
        .pipe(cache(imagemin({  // Сжимаем их с наилучшими настройками с учетом кеширования
            interlaced: true,
            progressive: true,
            svgoPlugins: [{ removeViewBox: false }],
        })))
        .pipe(gulp.dest('dist/img')); // Выгружаем на продакшен
});
//end img//
//css//
gulp.task('css', function () {
    var plugins = [
        autoprefixer({ browsers: ['last 2 version'] }),
        cssnano()
    ];
    return gulp.src('css/**/*.css')
        .pipe(postcss(plugins))
        .pipe(gulp.dest('dist'));
});
//end css//
//build//
gulp.task('clean', function () {
    return del.sync('dist'); // Удаляем папку dist перед сборкой
});

gulp.task('build', ['clean', 'sass'], function () {

    var buildCss = gulp.src([ // Переносим библиотеки в продакшен
        'css/main.css'
        
    ])
        .pipe(gulp.dest('dist/css'))

    var buildFonts = gulp.src('fonts/**/*') // Переносим шрифты в продакшен
        .pipe(gulp.dest('dist/fonts'))

    var buildJs = gulp.src('js/**/*') // Переносим скрипты в продакшен
        .pipe(gulp.dest('dist/js'))

    var buildHtml = gulp.src('/*.html') // Переносим HTML в продакшен
        .pipe(gulp.dest('dist'));

});


//end build//
gulp.task("webp", function () {
    return gulp.src("img/**/*.{png,jpg}")
        .pipe(webp({ quality: 90 }))
        .pipe(gulp.dest("img"));
});

//server//
gulp.task("server", function () {
    server.init({
        server: "dist",
        notify: false,
        open: true,
        cors: true,
        ui: false
    });

//end server//
    gulp.task('default', function () {
        return gulp.src('main.css')
            .pipe(cssnano())
            .pipe(gulp.dest('dist'));
    });
    //img//
    gulp.task('compress', function () {
        gulp.src('./img/*.png')
            .pipe(gulpPngquant({
                quality: '65-80'
            }))
            .pipe(gulp.dest('./compressed/'));
    });
    //end img//

    gulp.task('serve', ['sass'], function () {
        browserSync.init({
            server: "src"
        });


    });

    // Compile sass into CSS & auto-inject into browsers
    gulp.task('default', ['serve']);

    gulp.task('sass', function () {
        return gulp.src("src/*.scss")
            .pipe(sass())
            .pipe(gulp.dest("dist/css"))
            .pipe(browserSync.stream());
    });




gulp.task('default', function () {
    return gulp.src('src/img.jpg')
        .pipe(webp())
        .pipe(gulp.dest('dist'));
});
});





























