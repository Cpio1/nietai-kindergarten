МАСКОТЫ «НИЕТ-АЙ»
===================

Файлы: 4 PNG, прозрачный фон, 1254 x 1254 px.

mascot-welcome.png    — приветствует гостей
mascot-open-arms.png  — с распростертыми руками
mascot-learning.png   — с карандашом и рюкзаком
mascot-dancing.png    — танцующий

КУДА СОХРАНИТЬ
---------------
Распакуйте архив и перенесите 4 PNG в public/images/mascots/
в КОРНЕ Next.js-приложения (рядом с его package.json).

Например, если сайт находится в папке website:
  website/public/images/mascots/mascot-welcome.png

Если десктопная и мобильная версии — это два отдельных Next.js
приложения со своими package.json и public, скопируйте
изображения в public/images/mascots/ каждого приложения.

Использование в Next.js:
  <Image src="/images/mascots/mascot-welcome.png" alt="Ниет-ай маскоты" width={420} height={420} />

После добавления файлов в GitHub:
  git add .
  git commit -m "Add Niet-ai mascots"
  git push
