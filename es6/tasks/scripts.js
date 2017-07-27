import gulp from 'gulp';
import gulpif from 'gulp-if';
import concat from 'gulp-concat';
import webpack from 'webpack';
import gulpWebpack from 'webpack-stream';
import named from 'vinyl-named';
import livereload from 'gulp-livereload';
import plumber from 'gulp-plumber';
import rename from 'gulp-rename';
import gulify from 'gulp-uglify';
import {log,colors} from 'gulp-util';
import args from './util/args';

gulp.task('scripts',()=>{
  return gulp.src(['app/js/index.js'])
  .pipe(plumber({
    errorHandle:function(){

    }
  }))
  .pipe(named())
  .pipe(gulpWebpack({
    model:{
      loaders:[{
        test:/\.js$/,
        loader:'babel'
      }]
    }
  }),null,(err,stats)=>{
    log(`Finished ${colors.cyan('scripts')}'`,st.toString({
      chunks:false
    }))
  })
  //路径确定
  .pipe(gulp.dest('server/public/js'))
  //重命名
  .pipe(rename({
    basename:'cp',
    extname:'.min.js'
  }))
  //文件压缩
  .pipe(uglify({compress:{properties:false},output:{'quote_keys':true}}))
  .pipe(gulp.dest('server/public/js'))
  .pipe(gulpif(args.watch,livereload()));
})
