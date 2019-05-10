import React, {Component} from 'react';
import style from './index.scss'
import classnames from 'classnames'


/**
 * 导航栏
 */
export default class Header extends Component {

    render () {
        return (
            <header className={classnames(style['m-navbar'], 'u-j-middle')} s-theme__navbar="1">
                <a href="/" className="u-home-link">
                    <span className="g-fs20">Moo-CSS</span>
                </a>
                <nav className={classnames(style['m-nav'], 'u-j-middle')}>
                    <div className="nav__item j-change_theme" onClick={this.props.triggerTheme}>
                        <a>切换主题</a>
                    </div>
                    <div className={style['m-nav__item']}>
                        <a href="/moocss/">Moo-css</a>
                    </div>
                    <div className="m-nav__item">
                        <a href="https://github.com/MichealWayne/Moo-css" target="_blank">
                            Github
                        </a>
                    </div>
                </nav>
            </header>
        )
    }
}