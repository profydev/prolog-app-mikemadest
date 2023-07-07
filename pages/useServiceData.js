import {useState, useEffect} from 'react';

async function fetchHomeData(slug) {
  const res = await fetch(`https://prolog-api.profy.dev/content-page/${slug || 'home'}`);
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}

const useServiceData = slug => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchHomeData(slug).then(data => {
      console.log(data);
      setData(data);
    });
  }, [slug]);

  return data;
};

export default useServiceData;
