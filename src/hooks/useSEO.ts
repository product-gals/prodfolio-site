import { useEffect } from 'react';

interface SEOData {
  title: string;
  description: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: 'website' | 'article' | 'profile';
  canonical?: string;
  noindex?: boolean;
  structuredData?: object;
}

export const useSEO = (seoData: SEOData) => {
  useEffect(() => {
    // Set document title
    document.title = seoData.title;

    // Helper function to set meta tag
    const setMeta = (name: string, content: string, property?: boolean) => {
      const attribute = property ? 'property' : 'name';
      let tag = document.querySelector(`meta[${attribute}="${name}"]`) as HTMLMetaElement;
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute(attribute, name);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };

    // Set basic meta tags
    setMeta('description', seoData.description);
    
    // Set Open Graph tags
    setMeta('og:title', seoData.ogTitle || seoData.title, true);
    setMeta('og:description', seoData.ogDescription || seoData.description, true);
    setMeta('og:type', seoData.ogType || 'website', true);
    setMeta('og:url', window.location.href, true);
    
    if (seoData.ogImage) {
      setMeta('og:image', seoData.ogImage, true);
    }

    // Set Twitter Card tags
    setMeta('twitter:card', 'summary_large_image');
    setMeta('twitter:title', seoData.ogTitle || seoData.title);
    setMeta('twitter:description', seoData.ogDescription || seoData.description);
    setMeta('twitter:site', '@prodfolio');
    
    if (seoData.ogImage) {
      setMeta('twitter:image', seoData.ogImage);
    }

    // Set canonical URL
    const canonicalUrl = seoData.canonical || window.location.href.split('?')[0];
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', canonicalUrl);

    // Set robots meta tag
    if (seoData.noindex) {
      setMeta('robots', 'noindex, nofollow');
    } else {
      // Remove noindex if it exists
      const robotsTag = document.querySelector('meta[name="robots"]');
      if (robotsTag) {
        robotsTag.remove();
      }
    }

    // Add structured data
    if (seoData.structuredData) {
      let structuredDataScript = document.querySelector('#structured-data') as HTMLScriptElement;
      if (!structuredDataScript) {
        structuredDataScript = document.createElement('script');
        structuredDataScript.id = 'structured-data';
        structuredDataScript.type = 'application/ld+json';
        document.head.appendChild(structuredDataScript);
      }
      structuredDataScript.textContent = JSON.stringify(seoData.structuredData);
    }

    // Cleanup function to remove structured data when component unmounts
    return () => {
      if (seoData.structuredData) {
        const structuredDataScript = document.querySelector('#structured-data');
        if (structuredDataScript) {
          structuredDataScript.remove();
        }
      }
    };
  }, [seoData]);
};