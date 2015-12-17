'use strict';

var richtypo = require('richtypo');

var richtypoRules = [
    'save_tags',
    'cleanup_before',
    'spaces_lite',
    'spaces',
    'cleanup_after',
    'restore_tags'
];

hexo.extend.filter.register('after_post_render', function(data) {
    if(data.path.match(/\.(css|js)$/)){
        return data;
    }
    data.content = richtypo.richtypo(data.content, richtypoRules, hexo.config.language);

    return data;
});