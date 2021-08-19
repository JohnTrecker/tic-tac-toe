const gulp = require('gulp');
const gulpZip = require('gulp-zip');
const excludeGitignore = require('gulp-exclude-gitignore');

const zip = () => (
    gulp.src(['./**', '!node_modules/**'])
        .pipe(excludeGitignore())
        .pipe(gulpZip('ws-fe-challenge.zip'))
        .pipe(gulp.dest('.'))
)

exports.zip = zip;
exports.default = zip;
