/* eslint no-magic-numbers: 0 */
import React, {Component} from 'react';

import { Mapscale } from '../lib';

class App extends Component {

    constructor() {
        super();
        this.state = {
            value: '100m'
        };
    }

    render() {
        return (
            <div>
                <Mapscale
                    {...this.state}
                />
            </div>
        )
    }
}

export default App;
