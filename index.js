'use strict';

var richtypo = require('richtypo');

hexo.extend.filter.register('after_post_render', function(data) {
    if(data.path.match(/\.(css|js)$/)){
        return data;
    }
    data.content = richtypo.rich(data.content, hexo.config.language);

    return data;
});