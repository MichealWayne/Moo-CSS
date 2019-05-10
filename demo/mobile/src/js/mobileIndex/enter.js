/**
 * /src/js/index/enter.js -> index.html
 */

 
import 'moo-css-base/mobile.less'
import 'less/mobileIndex.less';


$(() => {
    let $app = $('#app');
    let $mask = $('.j-mask');
    let $tip = $('.j-tip');
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
        $tip.add($mask).addClass('z-hide');
    });

    // to nav
    $('.j-to_nav').click(() => {
        location.href = 'mobileNavs.html?' + $app.attr('s-type');
    });

    // search jump
    $('.j-jump').click(() => {
        location.href = 'https://www.baidu.com/s?wd=' + $search.val();
    });

    // to home page
    $('.j-to_home').click(() => {
        location.href = 'https://github.com/MichealWayne/Moo-CSS'
    });

    // show tip
    $('.j-show_tip').click(() => {
        $tip.add($mask).removeClass('z-hide');
    });
})