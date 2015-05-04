'use strict';

var Typograf = require('typograf'),
    tp = new Typograf({lang: hexo.config.language, mode: 'name'});

hexo.extend.filter.register('after_post_render', function(data) {
    data.content = tp.execute(data.content);
    return data;
});