'use strict';

/**
 * tiempo service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::tiempo.tiempo');
