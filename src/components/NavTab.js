import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import ProductReview from './ProductReview';

export default function NavTab({data}) {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Description" value="1" />
            <Tab label="Variations" value="2" />
            <Tab label="Reviews" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1">
            {data.description}
        </TabPanel>
        <TabPanel value="2">Item Two</TabPanel>
        <TabPanel value="3">
            <ProductReview />
        </TabPanel>
      </TabContext>
    </Box>
  );
}
