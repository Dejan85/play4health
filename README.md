# SMART HEALTH - Presentation Website

Professional presentation website for SMART HEALTH DOO - innovative 3D medical solutions company.

## About

SMART HEALTH specializes in cutting-edge 3D printing technology for medical applications, including personalized medical devices, waste management solutions, and advanced healthcare services.

## Features

- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Interactive product showcase with detailed modal
- ✅ Smooth navigation and scroll animations
- ✅ Contact form
- ✅ Service and technology sections
- ✅ Professional branding with custom SVG logo

## Technology Stack

- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Hosting**: GitHub Pages
- **Icons**: Font Awesome 6.4.0

## File Structure

```
├── index.html           # Main website
├── css/
│   └── styles.css      # Styling and animations
├── js/
│   └── script.js       # Interactivity and functionality
├── assets/
│   └── logo.svg        # Company logo
├── .nojekyll           # Disable Jekyll processing
├── .gitignore          # Git ignore rules
└── README.md           # This file
```

## Deployment Instructions

### GitHub Pages Setup

1. **Create a GitHub repository** named `username.github.io` (replace `username` with your GitHub username)
   - OR push to any repository and enable Pages in settings

2. **Push your code** to the repository:
   ```bash
   git remote add origin https://github.com/username/repository-name.git
   git branch -M main
   git push -u origin main
   ```

3. **Enable GitHub Pages**:
   - Go to repository Settings → Pages
   - Source: Select "Deploy from a branch"
   - Branch: Select `main` (or `master`)
   - Folder: Select `/ (root)`
   - Click Save

4. **Access your site**:
   - If using `username.github.io` repo: `https://username.github.io`
   - If using other repo: `https://username.github.io/repository-name`

### Custom Domain (Optional)

1. Go to Settings → Pages → Custom domain
2. Enter your domain (e.g., smarthealth.com)
3. Add CNAME record in your DNS provider:
   - Name: `@` or `www`
   - Value: `username.github.io`
4. Wait for DNS propagation (5-15 minutes)

## Local Testing

To test locally before pushing:

```bash
# If you have Python installed:
python -m http.server 8000

# Then visit: http://localhost:8000
```

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Contact

For inquiries about SMART HEALTH services and products, visit the contact section on the website.
