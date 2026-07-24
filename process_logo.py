from PIL import Image
import io

try:
    from rembg import remove
    has_rembg = True
except ImportError:
    has_rembg = False

# Open the image
input_path = "public/logo.jpg"
img = Image.open(input_path)

# Crop the image. Total dims: 1024x1024
# The logo starts somewhere around y=200 and ends around y=750.
# We want to crop out the "Font: Optima" at the bottom.
box = (100, 200, 924, 750)
cropped = img.crop(box)

if has_rembg:
    # Convert image to bytes
    img_byte_arr = io.BytesIO()
    cropped.save(img_byte_arr, format='PNG')
    img_byte_arr = img_byte_arr.getvalue()

    # Remove background
    out_byte_arr = remove(img_byte_arr)
    
    # Save output
    out_img = Image.open(io.BytesIO(out_byte_arr))
    out_img.save("public/logo.png")
    print("Cropped and removed background. Saved to public/logo.png")
else:
    cropped.save("public/logo.png")
    print("rembg not found. Just cropped and saved to public/logo.png")
