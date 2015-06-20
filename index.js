'use strict';

var Typograf = require('typograf'),
    tp = new Typograf({lang: hexo.config.language, mode: 'name'});

if(hexo.config.language == 'ru'){
    tp.enable('ru/money/ruble');
    tp.disable('ru/optalign');
}

hexo.extend.filter.register('after_post_render', function(data) {
    if(data.path.match(/\.(css|js)$/)){
        return data;
    }
    data.content = tp.execute(data.content);
    return data;
});