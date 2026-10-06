// STEP 2 이후 교안을 비밀번호로 암호화해 js/lecture-locked.data.js 로 만드는 스크립트
// 사용법: LECTURE_PASSWORD='비밀번호' node scripts/build-locked.mjs
// 비밀번호는 어떤 파일에도 저장하지 않음
import { readFileSync, writeFileSync } from 'node:fs';
import { pbkdf2Sync, randomBytes, createCipheriv } from 'node:crypto';

// 실행 순서가 중요함 (뒤 파일이 앞 파일이 만든 화면에 이어 붙음)
const ORDER = [
  'lecture-step2-partial.js',
  'lecture-step2-star.js',
  'lecture-step3-partial.js',
  'lecture-step3-portfolio.js',
  'lecture-step3-final.js',
  'lecture-portfolio-webview-option.js',
  'step3-floating-nav.js',
];

const password = process.env.LECTURE_PASSWORD;
if (!password) {
  console.error('LECTURE_PASSWORD 환경변수로 비밀번호를 전달해야 함');
  process.exit(1);
}

const src = (name) => new URL(`../_private-src/${name}`, import.meta.url);
const files = ORDER.map((name) => ({ name, code: readFileSync(src(name), 'utf8') }));

// PBKDF2(SHA-256)로 키를 만들고 AES-256-GCM으로 암호화함 (브라우저 Web Crypto와 같은 방식)
const iter = 310000;
const salt = randomBytes(16);
const iv = randomBytes(12);
const key = pbkdf2Sync(password, salt, iter, 32, 'sha256');
const cipher = createCipheriv('aes-256-gcm', key, iv);
const encrypted = Buffer.concat([
  cipher.update(JSON.stringify({ files }), 'utf8'),
  cipher.final(),
  cipher.getAuthTag(), // Web Crypto는 암호문 뒤에 인증 태그가 붙은 형태를 기대함
]);

const payload = {
  v: 1,
  iter,
  salt: salt.toString('base64'),
  iv: iv.toString('base64'),
  data: encrypted.toString('base64'),
};
writeFileSync(
  new URL('../js/lecture-locked.data.js', import.meta.url),
  `// 자동 생성 파일: STEP 2 이후 교안 암호문 (직접 수정하지 말고 scripts/build-locked.mjs로 다시 만들 것)\nwindow.LECTURE_LOCKED=${JSON.stringify(payload)};\n`,
);
console.log(`암호화 완료: ${files.length}개 파일 → js/lecture-locked.data.js`);
