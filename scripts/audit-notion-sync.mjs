import fs from 'node:fs';

const root=new URL('../',import.meta.url);
const source=fs.readFileSync(new URL('data/notion-synced-scope.md',root),'utf8');
const rendered=['js/lecture-step1-clean.js','js/lecture-step2-partial.js','js/lecture-step2-star.js','js/lecture-step3-partial.js']
  .map(file=>fs.readFileSync(new URL(file,root),'utf8')).join('\n');

const entities={amp:'&',lt:'<',gt:'>',quot:'"',apos:"'",nbsp:' '};
const normalize=value=>value
  .replace(/&([a-z]+);/gi,(_,key)=>entities[key.toLowerCase()]??' ')
  .replace(/<br\s*\/?\s*>/gi,' ')
  .replace(/<[^>]+>/g,' ')
  .replace(/\[[^\]]+\]\(https?:\/\/[^)]+\)/g,match=>match.replace(/^\[|\]\([\s\S]*$/g,''))
  .replace(/https?:\/\/\S+/g,' ')
  .replace(/[`*_>#|\\{}\[\]~·—–“”‘’'"():,+./?※☑️🧍🏽‍♀️🧠💡]/gu,' ')
  .replace(/[^\p{L}\p{N}]+/gu,'').trim();

const haystack=normalize(rendered);
const candidates=source.split('\n').map(line=>normalize(line.replace(/^\s*\d+[.)]\s*/,''))).filter(line=>{
  if(line.length<14)return false;
  if(line.includes('http')||line.includes('%ED'))return false;
  if(/^(col|tr|td|table|details|summary|callout|empty-block)/i.test(line))return false;
  return true;
});
const unique=[...new Set(candidates)];
const missing=unique.filter(line=>!haystack.includes(line));
console.log(JSON.stringify({checked:unique.length,missing:missing.length,coverage:Number(((unique.length-missing.length)/unique.length*100).toFixed(1))},null,2));
missing.forEach((line,index)=>console.log(`${index+1}\t${line}`));
