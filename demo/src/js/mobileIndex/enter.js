/**
 * /src/js/index/enter.js -> index.html
 */

import '~/less/mobile/base.less'
import 'less/mobile.less';


$(() => {
    let $app = $('#app');
    let $mask = $('.j-mask');
    let $search = $('#search');

    // change theme
    $('.j-change_theme').on('click', () => {
        let _type = $app.attr('s-type');

        $app.attr('s-type', _type === 'black' ? 'default' : 'black');
    });

    // trigger menu
    let $menus = $('.m-menu__ctn');
    $('.j-open_menu').on('click', () => {
        $menus.addClass('g-menu_in');
        $mask.removeClass('z-hide');
    });
    $('.j-close_menu').add($mask).on('click', () => {
        $menus.removeClass('g-menu_in');
        $mask.addClass('z-hide');
    });

    // to nav
    $('.j-to_nav').click(() => {
        location.href = 'mobileNavs.html?' + $app.attr('s-type');
    });

    // search jump
    $('.j-jump').click(() => {
        location.href = 'https://www.baidu.com/s?wd=' + $search.val();
    })
})