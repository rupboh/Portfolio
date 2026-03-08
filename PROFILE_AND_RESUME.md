# 📦 How to Add Your Profile Image and Resume

## Adding Your Profile Image

Your profile image appears on the home page in a circular frame. Follow these steps:

### Step 1: Prepare Your Image
- Use a square image (recommended: 400x400px or larger)
- Supported formats: JPG, PNG, WebP
- File size: Keep under 1MB for best performance

### Step 2: Add to Project
1. Place your image file in the `/public` folder
2. Name it: **`profile.jpg`** (or `profile.png`)
3. The image will automatically appear on the home page

**Example file path:**
```
d:\Porfolio\public\profile.jpg
```

## Adding Your Resume

Your resume PDF is available for download from:
- **Home page**: "Download Resume" button in hero section
- **Navbar**: "Resume" button (all pages)
- **Mobile**: "Download Resume" link in mobile menu

### Step 1: Prepare Your Resume
- Format: PDF file
- Name it: **`resume.pdf`**

### Step 2: Add to Project
1. Place your PDF file in the `/public` folder
2. Ensure the filename is exactly: **`resume.pdf`**
3. The download button will work automatically

**Example file path:**
```
d:\Porfolio\public\resume.pdf
```

## Project Structure After Adding Files

```
d:\Porfolio\
├── public/
│   ├── profile.jpg      ← Your profile image
│   ├── resume.pdf       ← Your resume PDF
│   └── ... (other files)
├── app/
├── components/
└── ... (other folders)
```

## Testing

After adding your files:
1. **For image issues**: Clear browser cache (Ctrl+Shift+Del) and refresh (F5)
2. **For PDF download**: Try right-clicking "Download Resume" and selecting "Save as..."

## Optional: Customize Image

If you want to change:
- Image position
- Image size
- Border radius
- Shadow effect

Edit the profile section in `app/page.tsx` (lines 8-17):
```typescript
<div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-primary shadow-lg">
  <img src="/profile.jpg" alt="Rupal Bohra" className="w-full h-full object-cover" />
</div>
```

Tailwind CSS classes you can modify:
- `w-32 h-32` → width and height (32 = 128px, 40 = 160px)
- `rounded-full` → border radius
- `border-4` → border width
- `shadow-lg` → shadow effect

---

**Need help?** Check the README.md file for more information!
