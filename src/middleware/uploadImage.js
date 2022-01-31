const multer = require('multer')
const { join } = require('path')


const fileStorageEngine = multer.diskStorage({
    destination: ( req, file, cb ) => {
        cb(null, join( process.cwd(), 'src', 'images' ))
    },
    filename: (req, file, cb) => {
        cb( null, Date.now() + '&&' + file.originalname )
    }
})

const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'image/jpeg'|| file.mimetype === 'image/svg' || file.mimetype === 'image/png' || file.mimetype === 'image/jpg' ) {
      cb(null, true);
    } else {
      cb(null, false);
    }
  };
  
  const upload = multer({
    storage: fileStorageEngine,
    limits: {
      fileSize: 1024 * 1024 * 20
    },
    fileFilter
  });


module.exports = upload