
interface SunriseSunsetData {
  sunrise: Date;
  sunset: Date;
}

export const getSunriseSunsetTimes = async (): Promise<SunriseSunsetData> => {
  try {
    // Default fallback values
    const defaultSunrise = new Date();
    defaultSunrise.setHours(6, 0, 0);
    const defaultSunset = new Date();
    defaultSunset.setHours(18, 0, 0);

    // Try to get the user's location, if not available, use defaults
    if (!navigator.geolocation) {
      return { sunrise: defaultSunrise, sunset: defaultSunset };
    }

    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          const date = new Date().toISOString().split('T')[0]; // YYYY-MM-DD format
          
          try {
            const response = await fetch(
              `https://api.sunrise-sunset.org/json?lat=${latitude}&lng=${longitude}&date=${date}&formatted=0`
            );
            
            if (!response.ok) {
              throw new Error('Failed to fetch sunrise/sunset data');
            }
            
            const data = await response.json();
            
            if (data.status === 'OK') {
              return resolve({
                sunrise: new Date(data.results.sunrise),
                sunset: new Date(data.results.sunset)
              });
            } else {
              throw new Error('Invalid response from sunrise-sunset API');
            }
          } catch (error) {
            console.error('Error fetching sunrise/sunset data:', error);
            return resolve({ sunrise: defaultSunrise, sunset: defaultSunset });
          }
        },
        (error) => {
          console.error('Geolocation error:', error);
          resolve({ sunrise: defaultSunrise, sunset: defaultSunset });
        }
      );
    });
  } catch (error) {
    console.error('Error in getSunriseSunsetTimes:', error);
    const defaultSunrise = new Date();
    defaultSunrise.setHours(6, 0, 0);
    const defaultSunset = new Date();
    defaultSunset.setHours(18, 0, 0);
    return { sunrise: defaultSunrise, sunset: defaultSunset };
  }
};

export const updateMetaTags = (
  title: string = 'Gibran Myageri | Full Stack Software Engineer',
  description: string = 'Full Stack Software Engineer with 6+ years of experience in React, Angular, Spring Boot, Python, Azure, and AWS. MS in Computer Science from Northeastern University.',
  keywords: string = 'Gibran Myageri, software engineer, full stack developer, React, Angular, Spring Boot, Python, Azure, AWS, Boston',
  author: string = 'Gibran Myageri'
) => {
  // Update title
  document.title = title;
  
  // Update meta tags
  const metaTags: Record<string, string> = {
    'description': description,
    'keywords': keywords,
    'author': author,
    'og:title': title,
    'og:description': description,
    'og:type': 'website',
    'twitter:card': 'summary_large_image',
    'twitter:title': title,
    'twitter:description': description,
  };
  
  // Update or create meta tags
  Object.entries(metaTags).forEach(([name, content]) => {
    let metaTag = document.querySelector(`meta[name="${name}"], meta[property="${name}"]`);
    
    if (!metaTag) {
      metaTag = document.createElement('meta');
      if (name.startsWith('og:') || name.startsWith('twitter:')) {
        metaTag.setAttribute('property', name);
      } else {
        metaTag.setAttribute('name', name);
      }
      document.head.appendChild(metaTag);
    }
    
    metaTag.setAttribute('content', content);
  });
};
