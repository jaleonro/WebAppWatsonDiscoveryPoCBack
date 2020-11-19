var express = require('express');
var router = express.Router();
const DiscoveryV1 = require('ibm-watson/discovery/v1');

const discovery = new DiscoveryV1({ version: '2018-12-03' });


router.get('/:query', function(req, res, next) {
  const queryParams = {
  environmentId: '517f1838-cf58-4394-9f53-795b2d2ab1ad',
  collectionId: 'c5b0069b-9b61-49f7-9b80-5d5c070a44dd',
  naturalLanguageQuery: req.params.query,
  count: 5,
  passages: true,
  passagesCount: 5,
  passagesCharacters: 600,
  };
  discovery.query(queryParams)
  .then(queryResponse => {
      res.json(queryResponse);
  })
  .catch(err => {
    console.log('error:', err);
  });  
});

module.exports = router;
