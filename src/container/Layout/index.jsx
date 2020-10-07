import React from "react";

import {
    LayoutBanner,
    LayoutBannerContainer,
    LayoutBannerContainerHeader,
    LayoutContainer
} from './style';
import Sidebar from '../../components/Sidebar';

const Layout = ({children}) => {
    return (
        <LayoutBanner>
            <LayoutBannerContainer>
                <LayoutBannerContainerHeader>
                    <Sidebar />
                </LayoutBannerContainerHeader>
                <LayoutContainer>
                    {children}
                </LayoutContainer>
            </LayoutBannerContainer>
        </LayoutBanner>
    )
}

export default Layout;