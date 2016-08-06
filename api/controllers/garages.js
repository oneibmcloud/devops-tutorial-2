/*jslint node: true */
'use strict';

var garageModel = require ('../models/garage');

module.exports = {
  garages: garages,
};

/* return a list of garages (garage objects) */
function garages(req, res) {
  // variables defined in the Swagger document can be referenced using req.swagger.params.{parameter_name}
  if (req.swagger.params && req.swagger.params.garageId) {
    var garageId = req.swagger.params.garageId.value;
    var garageData = garageModel.getGarageById(garageId);

    res.json(garageData);
  } else {
    var garages = garageModel.getAllGarages();
    res.json(garages);
  }
}
