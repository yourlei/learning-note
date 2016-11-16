> gulp

``` js
'use strict'
var gulp = require('gulp'),
		sass = require('gulp-jade');

/*gulp.task('sass', function () {
	return gulp.src('./publics/sass/*.scss')
						 .pipe(sass().on('error', sass.logError))
						 .pipe(gulp.dest('./publics/css/'));
});
*/

gulp.task('jade', function () {
	gulp.src('./app/view/**/*.jade')
    .pipe(jade({
      client: true
    }))
    .pipe(gulp.dest('./dist/'));
});
```