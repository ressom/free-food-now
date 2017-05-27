const express = require('express');
const router = express.Router();

const tesseract = require('node-tesseract');

/* GET users listing. */
router.get('/', function(req, res, next) {
  // Recognize text of any language in any format
  const options = {
    binary: 'tesseract'
  };
  tesseract.process(__dirname + '/test_data/test.jpg', options, (err, text) => {
    if(err) {
      res.json({
        error: err
      })
    } else {
      res.json({
        text,
      });
    }
  });

  // // Recognize German text in a single uniform block of text and set the binary path
  // const options = {
  //   l: 'deu',
  //   psm: 6,
  //   binary: 'tesseract'
  // };
  //
  // tesseract.process(__dirname + '/path/to/image.jpg', options, function(err, text) {
  //   if(err) {
  //     console.error(err);
  //   } else {
  //     console.log(text);
  //   }
  // });

});

module.exports = router;
