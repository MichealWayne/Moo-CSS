import React, {Component} from 'react';
import styled from 'styled-components';

// css in js
const FooterStyle = styled.footer`
    padding: 40px;
	color: #4e6e8e;
`

/**
 * 页面底部
 */
export default class Footer extends Component {

    render () {
        return (
		<FooterStyle className="f-tc g-fs12 f-b_1px bt_1px g-mt60">
            MIT Licensed | Copyright © 2019-present MichealWayne
		</FooterStyle>
        )
    }
}