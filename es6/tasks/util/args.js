import yargs from 'yargs';

const args = yargs

  .option('prodution',{
    boolean:true,
    default:false,
    description:'min all scripts'
  })

  .option('watch',{
    boolean:true,
    default:false,
    description:'watch all files'
  })

  .option('verbose',{
    boolean:true,
    default:false,
    description:'log'
  })

  .option('soucemaps',{
    description:'foce the creation of sroucemaps'
  })

  .option('port',{
    string:true,
    default:8080,
    describe:'server port'
  })

  .argv
