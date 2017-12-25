'use strict'

var gulp = require('gulp');
var csso = require('gulp-csso');
var imagemin = require('gulp-imagemin');
var posthtml = require('gulp-posthtml');
var sass = require('gulp-sass');
var pug = require('gulp-pug');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();
var stream = browserSync.stream;
var reload = browserSync.reload;


gulp.task('default', function() {
    console.log("hello people!")
});

gulp.task('sass', function() {
    return gulp.src('./src/**/*.scss')  // источник файла
        .pipe(sass().on('error', sass.logError))  // плагин сасс обрабатывает на ошибку
        .pipe(gulp.dest("./dist/css"))  // сохраняет в папку дист в подпапку сыы готовый файл
        browserSync.reload({stream: true}) 
});

gulp.task('dafault', ['serve', 'browser-sync'], function(){
    gulp.watch('srs/*.scss', ['sass']);
});

gulp.task('html', function() {
    return gulp.src("./src/*.html")
        .pipe(html())
        .pipe(gulp.dest("./dist/html"))
        .pipe(browserSync.stream()); // перезагружает страницу взависимости от изменения
}); 

gulp.task('browserSync', function () {
    browserSync({
        server: {
            baseDir: "localhost:3000"  // директория(папка) сервера
        } 
     });
});

gulp.task('browser-sync', ['sass'], function() {  
    browserSync.init({
       server: "./src"
}); 
    gulp.watch("./src/*.scss", ['sass']);
    gulp.watch("./src/*.html").on('change', browserSync.reload);
});

gulp.task('serve', ['sass'], function() {
    browserSync.init({
                server: "./src/*.scss"
});

gulp.task('watch' ['browserSync', 'sass'], function(){
    watch('./src/**/*.scss', ['sass'])
    gulp.watch('./src/**/*.html', ['html'], browserSync.reload);
});

gulp.task('style', function() {
    return gulp.src('./src/scss/**/*.scss')  // берет все файлы .scss из папки src
        .pipe(sass())  // плагин sass обрабатывает и преобразует в css
        .pipe(postcss([ 
            autoprefixer()  //  добавляются префиксы с помощью плагина autoprefixer
        ]))
        .pipe(gulp.dest('./dist/css'))  // сохраняет полученные файлы в дист в подпапку css
        .pipe(minifyCss())  // затем минифицирует css
        .pipe(rename('style.min.css')) // переименовывает минифицированный файл
        .pipe(gulp.dest('./dist/css'))  // сохраняет его в дист css
        .pipe(browserSync.stream())  // перезагружает страницу
});

gulp.task('autoprefixer', function() {
    return gulp.src('./src/**/*.css')
    .pipe(autoprefixer('last 2 version'))
    .pipe(concat(css))  // склеивает файлы
    .pipe(gulp.dest('./dist'))
});

gulp.task('csso', function() {
    return gulp.src('./src/**/*.css')
        .pipe(csso())
        .pipe(gulp.dest('./dist/css'))
});

gulp.task('images', function () {
    return gulp.src('./src/img/**/*.+(jpeg|png|svg')
         .pipe(imagemin())
         .pipe(gulp.dest('./dist/imgmin'))
         .pipe(imagemin([
              imagemin.optipng({optimizationLevel: 3})
        ]));
})});
