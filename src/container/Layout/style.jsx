import styled from "styled-components";

const LayoutBanner = styled.div`
  width: 100%;
  font-family: source sans pro,sans-serif;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
`;

const LayoutBannerContainer = styled.div`
  width: 1000px;
  display: flex;
  flex-direction: column;
`;

const LayoutBannerContainerHeader = styled.div`
  width: 100%;
`;

const LayoutContainer = styled.div`
  width: 100%;
`;

export {
    LayoutBanner,
    LayoutBannerContainer,
    LayoutBannerContainerHeader,
    LayoutContainer
}