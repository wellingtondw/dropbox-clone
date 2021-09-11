export function getFileIconByType(type) {
  switch(type) {
    case 'folder': 
      return `
        <svg width="160" height="160" class="mc-icon-template-content tile__preview tile__preview--icon" viewBox="0 0 160 160">
          <g fill="none" fill-rule="evenodd">
            <path fill="#71B9F4" d="M77.955 53h50.04A3.002 3.002 0 0 1 131 56.007v58.988a4.008 4.008 0 0 1-4.003 4.005H39.003A4.002 4.002 0 0 1 35 114.995V45.99c0-2.206 1.79-3.99 3.997-3.99h26.002c1.666 0 3.667 1.166 4.49 2.605l3.341 5.848s1.281 2.544 5.12 2.544l.005.003z"/>
            <path fill="#92CEFF" d="M77.955 52h50.04A3.002 3.002 0 0 1 131 55.007v58.988a4.008 4.008 0 0 1-4.003 4.005H39.003A4.002 4.002 0 0 1 35 113.995V44.99c0-2.206 1.79-3.99 3.997-3.99h26.002c1.666 0 3.667 1.166 4.49 2.605l3.341 5.848s1.281 2.544 5.12 2.544l.005.003z"/>
          </g>
        </svg>
      `
    case 'image/jpeg':
    case 'image/jpg':
    case 'image/gif':
    case 'image/png':
    case 'image/svg+xml':
    case 'image/tiff':
    case 'image/webp':
      return `
        <svg width="160" height="160" xml:space="preserve">
          <filter id="a" width="101.4%" height="102%" x="-.7%" y="-.5%" filterUnits="objectBoundingBox">
            <feOffset dy="1" in="SourceAlpha" result="shadowOffsetOuter1"/>
            <feColorMatrix in="shadowOffsetOuter1" values="0 0 0 0 0.858823529 0 0 0 0 0.870588235 0 0 0 0 0.88627451 0 0 0 1 0"/>
          </filter>
          <g filter="url(#a)">
            <path d="M47 30h66c2.209 0 4 1.791 4 4v92c0 2.209-1.791 4-4 4H47c-2.209 0-4-1.791-4-4V34c0-2.209 1.791-4 4-4z"/>
          </g>
          <path fill="#F7F9FA" d="M47 30h66c2.209 0 4 1.791 4 4v92c0 2.209-1.791 4-4 4H47c-2.209 0-4-1.791-4-4V34c0-2.209 1.791-4 4-4z"/>
          <g fill="#848484" fill-rule="evenodd" clip-rule="evenodd">
            <path d="M81.148 62.638c8.086 0 16.173-.001 24.259.001 1.792 0 2.3.503 2.301 2.28.001 11.414.001 22.829 0 34.243 0 1.775-.53 2.32-2.289 2.32-16.209.003-32.417.003-48.626 0-1.775 0-2.317-.542-2.318-2.306-.002-11.414-.003-22.829 0-34.243 0-1.769.532-2.294 2.306-2.294 8.122-.002 16.245-.001 24.367-.001zm-.033 35.273c7.337 0 14.673-.016 22.009.021.856.005 1.045-.238 1.042-1.062-.028-9.877-.03-19.754.002-29.63.003-.9-.257-1.114-1.134-1.112-14.637.027-29.273.025-43.91.003-.801-.001-1.09.141-1.086 1.033.036 9.913.036 19.826 0 29.738-.003.878.268 1.03 1.069 1.027 7.336-.031 14.672-.018 22.008-.018z"/>
            <path d="M77.737 85.036c3.505-2.455 7.213-4.083 11.161-5.165 4.144-1.135 8.364-1.504 12.651-1.116.64.058.835.257.831.902-.024 5.191-.024 10.381.001 15.572.003.631-.206.76-.789.756-3.688-.024-7.375-.009-11.062-.018-.33-.001-.67.106-.918-.33-2.487-4.379-6.362-7.275-10.562-9.819-.394-.239-.793-.473-1.313-.782zM87.313 95.973h-1.094c-8.477 0-16.953-.012-25.43.021-.794.003-1.01-.176-.998-.988.051-3.396.026-6.795.017-10.193-.001-.497-.042-.847.693-.839 6.389.065 12.483 1.296 18.093 4.476 3.321 1.88 6.235 4.245 8.719 7.523zM74.188 76.557c.01 2.266-1.932 4.223-4.221 4.255-2.309.033-4.344-1.984-4.313-4.276.03-2.263 2.016-4.213 4.281-4.206 2.272.008 4.244 1.968 4.253 4.227z"/>
          </g>
        </svg>
      `
    case 'application/pdf':
      return `
        <svg width="160" height="160" xml:space="preserve">
          <filter id="a" width="101.4%" height="102%" x="-.7%" y="-.5%" filterUnits="objectBoundingBox">
            <feOffset dy="1" in="SourceAlpha" result="shadowOffsetOuter1"/>
            <feColorMatrix in="shadowOffsetOuter1" values="0 0 0 0 0.858823529 0 0 0 0 0.870588235 0 0 0 0 0.88627451 0 0 0 1 0"/>
          </filter>
          <g filter="url(#a)">
            <path d="M47 30h66c2.209 0 4 1.791 4 4v92c0 2.209-1.791 4-4 4H47c-2.209 0-4-1.791-4-4V34c0-2.209 1.791-4 4-4z"/>
          </g>
          <path fill="#F7F9FA" d="M47 30h66c2.209 0 4 1.791 4 4v92c0 2.209-1.791 4-4 4H47c-2.209 0-4-1.791-4-4V34c0-2.209 1.791-4 4-4z"/>
          <path fill="#F15124" fill-rule="evenodd" d="M102.482 91.479c-.733-3.055-3.12-4.025-5.954-4.437-2.08-.302-4.735 1.019-6.154-.883-2.167-2.905-4.015-6.144-5.428-9.482-1.017-2.402 1.516-4.188 2.394-6.263 1.943-4.595.738-7.984-3.519-9.021-2.597-.632-5.045-.13-6.849 1.918-2.266 2.574-1.215 5.258.095 7.878 3.563 7.127-1.046 15.324-8.885 15.826-3.794.243-6.93 1.297-7.183 5.84.494 3.255 1.988 5.797 5.14 6.825 3.062 1 4.941-.976 6.664-3.186 1.391-1.782 1.572-4.905 4.104-5.291 3.25-.497 6.677-.464 9.942-.025 2.361.318 2.556 3.209 3.774 4.9 2.97 4.122 6.014 5.029 9.126 2.415 2.146-1.799 3.43-4.113 2.733-7.014zm-34.815 3.406c-1.16-.312-1.621-.97-1.607-1.861.018-1.199 1.032-1.121 1.805-1.132.557-.008 1.486-.198 1.4.827-.092 1.085-.902 1.682-1.598 2.166zm14.479-28.936c1.331.02 1.774.715 1.234 1.944-.319.725-.457 1.663-1.577 1.651-1.03-.498-1.314-1.528-1.409-2.456-.118-1.165.947-1.15 1.752-1.139zm-.191 20.234c-.912.01-2.209.098-1.733-1.421.264-.841.955-2.04 1.622-2.162 1.411-.259 1.409 1.421 2.049 2.186.164 1.67-1.056 1.388-1.938 1.397zM96.229 94.8c-1.14-.082-1.692-1.111-1.785-2.033-.131-1.296 1.072-.867 1.753-.876.796-.011 1.668.118 1.588 1.293-.391.673-.559 1.687-1.556 1.616z" clip-rule="evenodd"/>
        </svg>
      `
    case 'audio/mpeg':
    case 'audio/aac':
    case 'audio/ogg':
      return `
        <svg width="160" height="160" class="mc-icon-template-content tile__preview tile__preview--icon">
          <defs>
            <filter id="a" width="101%" height="102.7%" x="-.5%" y="-.7%" filterUnits="objectBoundingBox">
              <feOffset dy="1" in="SourceAlpha" result="shadowOffsetOuter1"/>
              <feColorMatrix in="shadowOffsetOuter1" values="0 0 0 0 0.858823529 0 0 0 0 0.870588235 0 0 0 0 0.88627451 0 0 0 1 0"/>
            </filter>
            <rect id="b" width="100" height="74" x="30" y="43" rx="4"/>
          </defs>
          <g fill="none" fill-rule="evenodd">
            <use xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000" filter="url(#a)" xlink:href="#b"/>
            <use xmlns:xlink="http://www.w3.org/1999/xlink" fill="#F7F9FA" xlink:href="#b"/>
            <path fill="#637282" d="M67 60c0-1.657 1.347-3 3-3 1.657 0 3 1.352 3 3v40c0 1.657-1.347 3-3 3-1.657 0-3-1.352-3-3V60zM57 78c0-1.657 1.347-3 3-3 1.657 0 3 1.349 3 3v4c0 1.657-1.347 3-3 3-1.657 0-3-1.349-3-3v-4zm40 0c0-1.657 1.347-3 3-3 1.657 0 3 1.349 3 3v4c0 1.657-1.347 3-3 3-1.657 0-3-1.349-3-3v-4zm-20-5.006A3 3 0 0 1 80 70c1.657 0 3 1.343 3 2.994v14.012A3 3 0 0 1 80 90c-1.657 0-3-1.343-3-2.994V72.994zM87 68c0-1.657 1.347-3 3-3 1.657 0 3 1.347 3 3v24c0 1.657-1.347 3-3 3-1.657 0-3-1.347-3-3V68z"/>
          </g>
        </svg>
      `
    case 'video/webm':
    case 'video/3gpp':
    case 'video/ogg':
    case 'video/mpeg':
    case 'video/x-msvideo':
      return `
        <svg width="160" height="160" class="mc-icon-template-content tile__preview tile__preview--icon">
          <defs>
            <filter id="a" width="101%" height="102.7%" x="-.5%" y="-.7%" filterUnits="objectBoundingBox">
              <feOffset dy="1" in="SourceAlpha" result="shadowOffsetOuter1"/>
              <feColorMatrix in="shadowOffsetOuter1" values="0 0 0 0 0.858823529 0 0 0 0 0.870588235 0 0 0 0 0.88627451 0 0 0 1 0"/>
            </filter>
            <rect id="b" width="100" height="74" x="30" y="43" rx="4"/>
          </defs>
          <g fill="none" fill-rule="evenodd">
            <use xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000" filter="url(#a)" xlink:href="#b"/>
            <use xmlns:xlink="http://www.w3.org/1999/xlink" fill="#F7F9FA" xlink:href="#b"/>
            <path fill="#637282" d="M69 67.991c0-1.1.808-1.587 1.794-1.094l24.412 12.206c.99.495.986 1.3 0 1.794L70.794 93.103c-.99.495-1.794-.003-1.794-1.094V67.99z"/>
          </g>
        </svg>
      `      
    default: 
      return `
        <svg width="160" height="160" class="mc-icon-template-content tile__preview tile__preview--icon">
          <defs>
            <filter id="a" width="101.4%" height="102%" x="-.7%" y="-.5%" filterUnits="objectBoundingBox">
              <feOffset dy="1" in="SourceAlpha" result="shadowOffsetOuter1"/>
              <feColorMatrix in="shadowOffsetOuter1" values="0 0 0 0 0.858823529 0 0 0 0 0.870588235 0 0 0 0 0.88627451 0 0 0 1 0"/>
            </filter>
            <rect id="b" width="74" height="100" x="43" y="30" rx="4"/>
          </defs>
          <g fill="none" fill-rule="evenodd">
            <use xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000" filter="url(#a)" xlink:href="#b"/>
            <use xmlns:xlink="http://www.w3.org/1999/xlink" fill="#F7F9FA" xlink:href="#b"/>
          </g>
        </svg>
      `
  }
}