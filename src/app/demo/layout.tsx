import React from 'react'
import { siteMetadata } from '../_utils/utils';
import { Metadata } from 'next';

export const metadata:Metadata = {
    title: `Book a demo with ${siteMetadata.title}`,
    description: siteMetadata.description,
    keywords: siteMetadata.keywords + " live demo",
    authors: {
      name: siteMetadata.author,
      url: siteMetadata.url,
    },
    robots: siteMetadata.robots,
    openGraph: {
      title: `Book a demo with ${siteMetadata.title}`,
      description: siteMetadata.description,
      images: siteMetadata.ogImage,
      siteName: siteMetadata.siteName,
      locale: siteMetadata.locale,
      type: "website",
      url: siteMetadata.url,
    },
    twitter: {
      card: siteMetadata.twitter.card,
      title: `Book a demo with ${siteMetadata.title}`,
      description: siteMetadata.twitter.description,
      images: siteMetadata.twitter.image,
    },
    facebook: {
      appId: siteMetadata.facebook.appId,
    },
    themeColor: siteMetadata.themeColor,
  };
  


const DemoLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <>
    {children}
    </>
  )
}

export default DemoLayout