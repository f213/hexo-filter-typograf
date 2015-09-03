'use strict';

var _ = require('lodash');

var Typograf = require('typograf'),
    tp = new Typograf({lang: hexo.config.language, mode: 'name'});

var config = {
    typograf: {
        enable: [],
        disable: [],
    }
};

hexo.config = _.merge(hexo.config, config);

hexo.config.typograf.enable.forEach(function(rule){
    tp.enable(rule);
});
hexo.config.typograf.disable.forEach(function(rule){
    tp.disable(rule);
});

hexo.extend.filter.register('after_post_render', function(data) {
    if(data.path.match(/\.(css|js)$/)){
        return data;
    }
    data.content = tp.execute(data.content);
    return data;
});