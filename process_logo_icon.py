from PIL import Image

try:
    img = Image.open("public/logo.png") # This already has bg removed
    
    # logo.png is 824x550.
    # The globe is in the top half, centered horizontally.
    # Let's crop just the upper square portion containing the globe.
    # Width is 824. Center is 412. Globe diameter is around 300.
    # Let's try x=250 to 574 (width 324). y=0 to 324 (height 324).
    box = (200, 0, 624, 380)
    icon = img.crop(box)
    
    # crop it to its actual bounding box (non-transparent pixels)
    bbox = icon.getbbox()
    if bbox:
        icon = icon.crop(bbox)
        
    icon.save("public/logo-icon.png")
    print("Successfully created logo-icon.png")
except Exception as e:
    print("Error:", e)
