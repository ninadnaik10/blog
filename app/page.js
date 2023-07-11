import fs from 'fs';

const getPostMetaData = () => {
  const folder = 'posts/';
  const files = fs.readdirSync(folder);
  const markdownFiles = files.filter((fn) => fn.endsWith('.md'));
  const slugs = markdownFiles.map((fn) => fn.replace('.md', ''));
}

export default function Home() {
  return (
    <h1>Hello</h1>
  );
}
