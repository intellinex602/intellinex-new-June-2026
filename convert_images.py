import os
from PIL import Image
import glob

def convert_to_webp(folder_path):
    png_files = glob.glob(os.path.join(folder_path, '*.png'))
    for png_path in png_files:
        webp_path = png_path.rsplit('.', 1)[0] + '.webp'
        try:
            with Image.open(png_path) as img:
                img.save(webp_path, 'webp', quality=85)
            print(f"Converted {png_path} to {webp_path}")
            os.remove(png_path)
        except Exception as e:
            print(f"Failed to convert {png_path}: {e}")

if __name__ == "__main__":
    convert_to_webp('public/assets')
