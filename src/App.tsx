import React from 'react';
import 'components/styleMap.scss';

import Input from 'components/input/Input';

const App = () => {
    return (
        <div style={{ padding: 20 }}>
            <Input
                allowClear
                addonAfter="after"
                // addonBefore="before"
                // onChange={(e) => console.log(e.target.value)}
                fullWidth
            />
        </div>
    );
};

export default App;
