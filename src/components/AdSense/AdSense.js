import React from 'react';

const publisherId = process.env.REACT_APP_ADSENSE_PUBLISHER_ID;
const clientId = process.env.REACT_APP_ADSENSE_CLIENT_ID;

function AdSense() {
  return (
    <>
      <script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8542623725990737"
        crossorigin="anonymous"
      ></script>

      <ins
        class="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client={publisherId}
        data-ad-slot={clientId}
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
      <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
    </>
  );
}

export default AdSense;
