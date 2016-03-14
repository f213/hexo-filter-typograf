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
    'use stirct';
    if(data.path.match(/\.(css|js)$/)){
        return data;
    }
    data.content = data.content.replace(/\n\ +/g, ' ');
    data.content = richtypo.richtypo(data.content, richtypoRules, hexo.config.language);

    data.content = data.content.replace(/<\/?nobr\/?>/g, '');
    data.content = data.content.replace(/\ +/g, ' ');

    return data;
});