'use strict';

let excerpt = require('./hexo-excerpt');

hexo.extend.generator.register('excerpt', excerpt);
