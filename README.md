# SK Health Clinic Website

Professional medical clinic website for Dr. Sanjeev Agarwal, General Physician in Nehru Nagar, Ghaziabad.

## 🏥 About

SK Health Clinic provides comprehensive family healthcare services with over 26 years of medical experience. This website serves as the digital presence for the clinic, offering:

- Clinic information and timings
- Doctor credentials and expertise
- Contact methods (Phone, Email, WhatsApp)
- Interactive location map
- Patient reviews and testimonials

## 🎨 Features

- **Clean & Simple**: No external dependencies, fast loading times
- **SEO Optimized**: Complete meta tags, structured data, sitemap
- **Accessible**: WCAG 2.1 AA compliant with keyboard navigation
- **Responsive**: Works seamlessly on desktop, tablet, and mobile
- **Performance**: Optimized images, external CSS, aggressive caching

## 🚀 Technology Stack

- **Frontend**: Vanilla HTML5, CSS3, JavaScript (ES6+)
- **Hosting**: Cloudflare Pages (auto-deployed from GitHub)
- **Fonts**: Google Fonts (Inter)
- **Security**: CSP headers, secure configuration

## 📁 Project Structure

```
skhealth.github.io/
├── index.html              # Main website file
├── styles.css              # External stylesheet
├── _headers                # Security & caching headers
├── robots.txt              # Search engine directives
├── sitemap.xml             # SEO sitemap
├── skhealth-logo.png       # Clinic logo
├── sanjeev-hero.png        # Doctor portrait
└── exterior.png            # Clinic exterior photo
```

## 🛠️ Development

### Prerequisites

- Modern web browser (Chrome, Firefox, Safari, Edge)
- Text editor or IDE
- Git for version control

### Local Development

1. **Clone the repository**:
   ```bash
   git clone git@github.com:nitishagar/skhealth.github.io.git
   cd skhealth.github.io
   ```

2. **Open locally**:
   ```bash
   # Option 1: Direct file open
   open index.html

   # Option 2: Simple HTTP server (if Python installed)
   python3 -m http.server 8000
   # Then visit http://localhost:8000
   ```

3. **Edit files**:
   - `index.html` - Website content and structure
   - `styles.css` - Styling and colors

## 🌐 Deployment

### Automatic Deployment (Current)

Changes pushed to the `main` branch are automatically deployed to Cloudflare Pages:

1. Push changes to GitHub:
   ```bash
   git add .
   git commit -m "Your change description"
   git push origin main
   ```

2. Cloudflare Pages automatically:
   - Detects the push
   - Deploys the site
   - Publishes to production URL

**Production URL**: `https://skhealth.pages.dev`

### Manual Deployment (Cloudflare CLI)

```bash
# Install Wrangler (if not installed)
npm install -g wrangler

# Deploy manually
wrangler pages publish . --project-name=skhealth
```

## 📊 SEO & Analytics

### Search Engine Optimization

- ✅ Meta descriptions and Open Graph tags
- ✅ Schema.org structured data (MedicalClinic)
- ✅ Sitemap.xml submitted to Google Search Console
- ✅ Mobile-friendly and fast loading
- ✅ Semantic HTML structure

### Submitting to Search Engines

1. **Google Search Console**: [search.google.com/search-console](https://search.google.com/search-console)
2. Submit sitemap: `https://skhealth.github.io/sitemap.xml`

## 🔒 Security

- **Security Headers**: CSP, X-Frame-Options, X-Content-Type-Options configured
- **Link Security**: All external links use `rel="noopener noreferrer"`
- **No Sensitive Data**: No API keys or secrets required

## 📱 Contact Information

**SK Health Clinic**
- **Address**: 2-A 19, Pocket B, Nehru Nagar II, Ghaziabad, UP 201001
- **Phone**: +91 87004 91681
- **Email**: support@skhealth.co.in
- **WhatsApp**: [Message Us](https://wa.me/918700491681)

**Timings**: Monday - Saturday
- Morning: 11:00 AM - 1:00 PM
- Evening: 6:00 PM - 8:00 PM
- Sunday: Closed (By Appointment Only)

## 🤝 Contributing

This is a private clinic website. For updates or issues, contact the repository maintainer.

## 📄 License

© 2024 SK Health Clinic. All rights reserved.

---

**Built with care for patients in Nehru Nagar, Ghaziabad** 🏥
