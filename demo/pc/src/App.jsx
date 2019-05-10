import React, {Component} from 'react';

import Header from './views/Header'
import Footer from './views/Footer'
import Home from './views/Home'



class App extends Component {
    state = {
        theme: 'default'
    };

    triggerTheme = () => {
        this.setState({
            theme: this.state.theme === 'default' ? 'dark' : 'default'
        })
    }

    render() {
        let {
            theme
        } = this.state;

        return (
            <div className="m-app a-trans_color" s-theme={theme}>
				<Header
                    triggerTheme={this.triggerTheme}
                />
                <Home/>
                <Footer/>
			</div>
        );
    }
}

export default App;
