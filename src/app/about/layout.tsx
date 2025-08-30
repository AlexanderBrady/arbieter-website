import React from 'react'
import { siteMetadata } from '../_utils/utils';
import { Metadata } from 'next';

export const metadata:Metadata = {
    title: `About ${siteMetadata.title}`,
    description: siteMetadata.description,
    keywords: siteMetadata.keywords,
    authors: {
      name: siteMetadata.author,
      url: siteMetadata.url,
    },
    robots: siteMetadata.robots,
    openGraph: {
      title: `About ${siteMetadata.title}`,
      description: siteMetadata.description,
      images: siteMetadata.ogImage,
      siteName: siteMetadata.siteName,
      locale: siteMetadata.locale,
      type: "website",
      url: siteMetadata.url,
    },
    twitter: {
      card: siteMetadata.twitter.card,
      title: `About ${siteMetadata.title}`,
      description: siteMetadata.twitter.description,
      images: siteMetadata.twitter.image,
    },
    facebook: {
      appId: siteMetadata.facebook.appId,
    },
    themeColor: siteMetadata.themeColor,
  };
  


const AboutLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <>
    {children}
    </>
  )
}

export default AboutLayout