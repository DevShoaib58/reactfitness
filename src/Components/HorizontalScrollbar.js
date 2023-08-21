import React from 'react';
import { Box } from '@mui/material';
const HorizontalScrollbar = ({ data }) => {
    return (
        <Box>

            {/* {console.log('data: ', data)} */}
            {data.map((item) => {
                return (
                    <Box
                        key={item.id || item}
                        itemId={item.id || item}
                        title={item.id || item}
                        m="0 40px"
                    >
                        {item}
                    </Box>
                )
            })}
        </Box>
    );
};

export default HorizontalScrollbar;