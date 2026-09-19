const fs = require('fs');
const file = 'src/app/services/page.tsx';
let content = fs.readFileSync(file, 'utf8');

content = content.replace(/imagePlaceholder: "(<Image src=\\"(.*?)\\" alt=\\"(.*?)\\" fill className=\\"object-cover\\" \/>)"/g, 
  "imageSrc: \"$2\",\n    imageAlt: \"$3\"");

// update the JSX down below
content = content.replace(/\{service\.imagePlaceholder\}/g, 
  "<Image src={service.imageSrc} alt={service.imageAlt} fill className=\"object-cover\" />");

fs.writeFileSync(file, content, 'utf8');
