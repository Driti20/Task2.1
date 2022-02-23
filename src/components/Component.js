import { render } from '@testing-library/react';
import React from 'react';
import Cards from './Cards';
import Cards2 from './Cards2'
import Cards3 from './Cards3'
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import '../style/react-tabs.css'

const Component=(
    <Tabs>
        <TabList>
            <Tab>Domains</Tab>
            <Tab>Web Hosting</Tab>
            <Tab>Dedicated Services</Tab>
            <Tab>Virtual Cloud Services</Tab>
            <Tab>WordPress Hosting</Tab>
            <Tab>Email Hosting</Tab>
            <Tab>VPS Hosting Services</Tab>
            <Tab>Free Hosting</Tab>
        </TabList>
        <TabPanel>
            <Cards/>
        </TabPanel>
        <TabPanel >
            <Cards2/>
        </TabPanel>
        <TabPanel>
            <Cards3/>
        </TabPanel>
        <TabPanel>
            <Cards/>
        </TabPanel>
        <TabPanel >
            <Cards2/>
        </TabPanel>
        <TabPanel>
            <Cards3/>
        </TabPanel>
        <TabPanel>
            <Cards/>
        </TabPanel>
        <TabPanel >
            <Cards2/>
        </TabPanel>
    </Tabs>
);

render(Component);
export default Component;