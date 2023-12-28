// IoniconsComponent.js
import React, { useEffect, useRef } from 'react';

const IoniconsComponent = () => {
  const ioniconsModuleScriptRef = useRef(null);
  const ioniconsNomoduleScriptRef = useRef(null);

  useEffect(() => {
    // Function to create and append script
    const loadScript = (src, isModule) => {
      const script = document.createElement('script');
      if (isModule) {
        script.type = 'module';
      }
      script.src = src;
      document.body.appendChild(script);
      return script;
    };

    // Check if scripts already exist
    if (!document.querySelector('[src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"]')) {
      ioniconsModuleScriptRef.current = loadScript('https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js', true);
    }

    if (!document.querySelector('[src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"]')) {
      ioniconsNomoduleScriptRef.current = loadScript('https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js', false);
    }

    // Clean up when the component is unmounted
    return () => {
      if (ioniconsModuleScriptRef.current) {
        document.body.removeChild(ioniconsModuleScriptRef.current);
      }
      if (ioniconsNomoduleScriptRef.current) {
        document.body.removeChild(ioniconsNomoduleScriptRef.current);
      }
    };
  }, []);

  return <div />;
};

export default IoniconsComponent;
