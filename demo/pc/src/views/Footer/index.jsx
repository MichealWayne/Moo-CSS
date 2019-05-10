import React, {Component} from 'react';
import style from './index.scss'
import classnames from 'classnames'


/**
 * 页面底部
 */
export default class Footer extends Component {

    render () {
        return (
            <footer className={classnames(style['m-foot'], 'f-tc g-fs12 f-b_1px bt_1px g-mt60')} s-theme__foot="1">
                MIT Licensed | Copyright © 2019-present MichealWayne
            </footer>
        )
    }
}