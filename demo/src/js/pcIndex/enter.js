/**
 * /src/js/index/enter.js -> index.html
 */

import '~/sass/pc/base.scss'
//import '~/less/pc/base.less';
import 'sass/pcIndex.scss';

$(() => {
    let $app = $('body');

    // change theme
    $('.j-change_theme').click(() => {
        let _type = $app.attr('s-theme');

        $app.attr('s-theme', _type === 'dark' ? 'default' : 'dark');
    });
})