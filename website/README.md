# 🌐 Licentia Website

Located at https://licentia.quest

## Features
- Built with [Docusaurus](https://docusaurus.io/docs) using `Typescript` and `React`
- Huge/bg images are optimized via:
    ```bash
    magick mogrify -path /$target \
        -format webp -quality 85 -resize 1920x \
        /$source/*.png`
    ```
- On Github side built with [actions pipeline](../.github/workflows/deploy.yml)