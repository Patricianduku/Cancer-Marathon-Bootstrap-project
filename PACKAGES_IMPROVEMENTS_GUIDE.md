# PACKAGES SECTION IMPROVEMENT GUIDE

## Step 1: Add CSS Link to index.html Head
Find this line (around line 30):
```html
        <!-- Template Stylesheet -->
        <link href="css/style.css" rel="stylesheet">
```

Add this NEW line right after it:
```html
        <!-- Packages Improvements Stylesheet -->
        <link href="css/packages-improvements.css" rel="stylesheet">
```

## Step 2: Update Packages Wrapper (line ~301)
Find this:
```html
    <div class="bg-white rounded-6 shadow-lg p-4"
         style="background-color: #f5f6fa00; min-height: 900px; width: 100%; max-width: 1800px; margin: 0 auto; border: 2px solid #f3e9ff00; box-shadow: 0 8px 32px rgba(80,0,120,0.08); border-radius: 2.5rem; padding: 3rem 2rem;">
```

Replace with:
```html
    <div class="packages-wrapper bg-white rounded-6 shadow-lg p-4"
         style="background-color: #f5f6fa00; width: 100%; max-width: 1800px; margin: 0 auto; border: 2px solid #f3e9ff00; box-shadow: 0 8px 32px rgba(80,0,120,0.08);">
```
(Remove inline `min-height: 900px;` and `padding: 3rem 2rem;` as they're now in the `.packages-wrapper` CSS class)

## Step 3: Update Button Classes in ALL 4 Package Cards

### For PLATINUM Card (around line 324):
Find:
```html
<button class="btn btn-primary ribbon-palette-3 w-100" type="button" data-bs-toggle="collapse" data-bs-target="#platinumDesc" aria-expanded="false" aria-controls="platinumDesc">View Details</button>
```
Replace with:
```html
<button class="btn view-details-btn w-100" type="button" data-bs-toggle="collapse" data-bs-target="#platinumDesc" aria-expanded="false" aria-controls="platinumDesc" aria-label="Toggle Platinum package details">View Details</button>
```

And update the Register link (around line 333):
Find:
```html
<a href="registration.html" class="btn btn-primary w-100 mt-3" style="background-color: #0011ff; border-color: #0011ff;">Register</a>
```
Replace with:
```html
<a href="registration.html" class="btn register-btn w-100 mt-3">Register</a>
```

### For GOLD Card (around line 352):
Find:
```html
<button class="btn btn-primary ribbon-palette-8 w-100" type="button" data-bs-toggle="collapse" data-bs-target="#goldDesc" aria-expanded="false" aria-controls="goldDesc">View Details</button>
```
Replace with:
```html
<button class="btn view-details-btn w-100" type="button" data-bs-toggle="collapse" data-bs-target="#goldDesc" aria-expanded="false" aria-controls="goldDesc" aria-label="Toggle Gold package details">View Details</button>
```

And update the Register link (around line 361):
Find:
```html
<a href="registration.html" class="btn btn-primary w-100 mt-3" style="background-color: #0011ff; border-color: #0011ff;">Register</a>
```
Replace with:
```html
<a href="registration.html" class="btn register-btn w-100 mt-3">Register</a>
```

### For SILVER Card (around line 379):
Find:
```html
<button class="btn btn-primary ribbon-palette-11 w-100" type="button" data-bs-toggle="collapse" data-bs-target="#silverDesc" aria-expanded="false" aria-controls="silverDesc">View Details</button>
```
Replace with:
```html
<button class="btn view-details-btn w-100" type="button" data-bs-toggle="collapse" data-bs-target="#silverDesc" aria-expanded="false" aria-controls="silverDesc" aria-label="Toggle Silver package details">View Details</button>
```

And update the Register link (around line 395):
Find:
```html
<a href="registration.html" class="btn btn-primary w-100 mt-3" style="background-color: #0011ff; border-color: #0011ff;">Register</a>
```
Replace with:
```html
<a href="registration.html" class="btn register-btn w-100 mt-3">Register</a>
```

### For BRONZE Card (around line 407):
Find:
```html
<button class="btn btn-primary ribbon-palette-12 w-100" type="button" data-bs-toggle="collapse" data-bs-target="#bronzeDesc" aria-expanded="false" aria-controls="bronzeDesc">View Details</button>
```
Replace with:
```html
<button class="btn view-details-btn w-100" type="button" data-bs-toggle="collapse" data-bs-target="#bronzeDesc" aria-expanded="false" aria-controls="bronzeDesc" aria-label="Toggle Bronze package details">View Details</button>
```

And update the Register link (around line 423):
Find:
```html
<a href="registration.html" class="btn btn-primary w-100 mt-3" style="background-color: #0011ff; border-color: #0011ff;">Register</a>
```
Replace with:
```html
<a href="registration.html" class="btn register-btn w-100 mt-3">Register</a>
```

## Summary of Changes
✅ Uniform card height (480px min on desktop, responsive on mobile)
✅ Flex layout keeps buttons anchored to bottom
✅ Hover lift effect (+8px up with shadow)
✅ Both "View Details" and "Register" buttons always visible
✅ Improved badge styling and positioning
✅ Better responsive behavior on small screens
✅ Consistent button colors and hover states

## Expected Result
- All 4 package cards now have equal height
- Buttons always stay visible at bottom of each card
- Smooth hover animations when you hover over a card
- Better spacing and improved typography
- Fully responsive on mobile/tablet
