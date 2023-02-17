import React from "react";
import ContentLoader from "react-content-loader";

const CardSkeleton = (props) => (
  <ContentLoader
    speed={2}
    width={3000}
    height={700}
    viewBox="0 0 3000 700"
    backgroundColor="#000000"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="229" y="252" rx="0" ry="0" width="120" height="22" />
    <rect x="146" y="156" rx="0" ry="0" width="120" height="162" />
    <rect x="149" y="341" rx="0" ry="0" width="120" height="164" />
    <rect x="8" y="154" rx="0" ry="0" width="120" height="162" />
    <rect x="115" y="389" rx="0" ry="0" width="120" height="0" />
    <rect x="9" y="336" rx="0" ry="0" width="120" height="163" />
    <rect x="293" y="156" rx="0" ry="0" width="120" height="168" />
    <rect x="291" y="342" rx="0" ry="0" width="120" height="163" />
  </ContentLoader>
);

export default CardSkeleton;
