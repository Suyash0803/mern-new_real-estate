'use strict';

var Joi = require('joi');

module.exports = (function() {
  return {
    defaultRegex: Joi.string().replace('\\', '\\\\').replace('"', '\\"'),
    passwordRegex: Joi.string().replace('\\', '\\\\').replace('"', '\\"'),
    slugRegex: Joi.string().regex(/^[a-z0-9-]+$/i),
    promoCodeRegex: Joi.string().regex(/^[a-z0-9]{1,16}$/),
    searchRegex: Joi.string().replace('\\', '\\\\').replace('"', '\\"'),
    skuRegex: Joi.string().regex(/^[\w|-]+$/),
    mediaUrlRegex: Joi.string().uri({ scheme: ['http', 'https'] }),
    statesRegex: Joi.string().valid(['AL','AK','AZ','AR','CA','CO','CT','DE','FL','GA','HI','ID','IL','IN','IA','KS','KY','LA','ME','MD','MA','MI','MN','MS','MO','MT','NE','NV','NH','NJ','NM','NY','NC','ND','OH','OK','OR','PA','RI','SC','SD','TN','TX','UT','VT','VA','WA','WV','WI','WY']),
    hexColorRegex: Joi.string().regex(/^[a-f0-9]{6}$/),
    email: Joi.string().email(),
    zipcode: Joi.string().regex(/^\d{5}([\-]?\d{4})?$/)
  };
})();
