# Oscar Music Group - Deployment Guide

Hướng dẫn triển khai dự án Oscar Music Group lên production.

## 🚀 Tùy chọn Deployment

### 1. Vercel (Recommended)

**Tại sao Vercel?**
- ✅ Tối ưu cho Nuxt
- ✅ Auto-scaling
- ✅ Edge caching
- ✅ Serverless functions
- ✅ Custom domains
- ✅ SSL tự động

**Các bước:**

1. Login to [vercel.com](https://vercel.com)
2. Click "Add New Project"
3. Import repository GitHub
4. Configure environment variables
5. Deploy

```bash
# Hoặc CLI
npm install -g vercel
vercel
```

### 2. Netlify

1. Connect GitHub repository
2. Build command: `npm run build`
3. Publish directory: `.output/public`
4. Configure environment variables
5. Deploy

### 3. Traditional Server (VPS)

**Yêu cầu:**
- Node.js 18+
- pm2 (process manager)
- Nginx (reverse proxy)
- SSL certificate

**Setup:**

```bash
# SSH vào server
ssh user@your-vps.com

# Cài Node.js
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs

# Clone repo
git clone <your-repo> /home/user/oscar-music-group
cd oscar-music-group

# Install dependencies
npm install

# Build
npm run build

# Start with PM2
npm install -g pm2
pm2 start "node .output/server/index.mjs"
pm2 save
```

**Nginx Config:**

```nginx
server {
    listen 80;
    listen [::]:80;
    server_name oscarmusicgroup.vn www.oscarmusicgroup.vn;

    # Redirect HTTP to HTTPS
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    listen [::]:443 ssl http2;
    server_name oscarmusicgroup.vn www.oscarmusicgroup.vn;

    # SSL configuration
    ssl_certificate /path/to/cert.pem;
    ssl_certificate_key /path/to/key.pem;
    ssl_session_timeout 1d;
    ssl_session_cache shared:SSL:50m;
    ssl_session_tickets off;
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers HIGH:!aNULL:!MD5;
    ssl_prefer_server_ciphers on;

    # Security headers
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-Frame-Options "DENY" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header Referrer-Policy "strict-origin-when-cross-origin" always;

    # Caching headers
    add_header Cache-Control "public, max-age=31536000, immutable" ~ "^/(_nuxt|dist)";

    # Reverse proxy to Nuxt app
    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_buffering off;
        proxy_request_buffering off;
    }
}
```

## 🔐 Pre-deployment Checklist

- [ ] Update environment variables
- [ ] Test build locally: `npm run build`
- [ ] Verify SEO meta tags
- [ ] Check mobile responsiveness
- [ ] Test forms and APIs
- [ ] Verify sitemap.xml
- [ ] Check robots.txt
- [ ] Test 404 page
- [ ] Update Analytics ID
- [ ] Set up error tracking (Sentry)
- [ ] Configure CDN cache rules

## 📊 Performance Monitoring

### Google PageSpeed Insights
```
https://pagespeed.web.dev/?url=oscarmusicgroup.vn
```

### Goals
- Performance: > 95
- Accessibility: > 90
- Best Practices: > 90
- SEO: 100

### Monitoring Tools
1. **Sentry** - Error tracking
```bash
npm install @sentry/nuxt
```

2. **PostHog** - Analytics
```bash
npm install posthog-js
```

3. **New Relic** - APM Monitoring

## 🔄 CI/CD Pipeline

### GitHub Actions Example

```yaml
# .github/workflows/deploy.yml
name: Deploy to Vercel

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Install dependencies
        run: npm ci
      
      - name: Run tests
        run: npm run test
      
      - name: Build
        run: npm run build
      
      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v25
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          github-token: ${{ secrets.GITHUB_TOKEN }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
```

## 🛡️ Security Configuration

### Environment Variables
```bash
# Production values in .env.production
NUXT_PUBLIC_BASE_URL=https://oscarmusicgroup.vn
DATABASE_URL=***
API_KEY=***
JWT_SECRET=***
```

### SSL/TLS
Use Let's Encrypt for free SSL:
```bash
certbot certonly --webroot -w /var/www/html -d oscarmusicgroup.vn
```

### Security Headers
```
X-Content-Type-Options: nosniff
X-Frame-Options: DENY
X-XSS-Protection: 1; mode=block
Strict-Transport-Security: max-age=31536000
Content-Security-Policy: default-src 'self'
```

## 📈 Scaling Strategies

### Static Generation
```ts
// nuxt.config.ts
routeRules: {
  '/': { prerender: true },
  '/about': { prerender: true },
  '/pricing': { prerender: true },
  '/api/**': { cache: { maxAge: 60 * 10 } }
}
```

### Caching
- Browser cache: 1 year for _nuxt
- CDN cache: 1 hour for assets
- Server cache: 10 minutes for API

### Database Optimization
- Add indexes on frequently queried columns
- Use connection pooling
- Implement query caching

## 🔍 Monitoring & Maintenance

### Regular Tasks
- [ ] Check error logs daily
- [ ] Monitor uptime (services like UptimeRobot)
- [ ] Review performance metrics weekly
- [ ] Update dependencies monthly
- [ ] Backup database weekly

### Health Checks
```bash
# Check if app is running
curl https://oscarmusicgroup.vn/api/health

# Check build artifacts
curl https://oscarmusicgroup.vn/_nuxt/
```

## 🚨 Rollback Procedure

```bash
# Vercel
vercel rollback

# Manual rollback
git revert <commit-hash>
git push origin main
```

## 📞 Support

For deployment issues:
- Check build logs
- Review error messages
- Contact hosting provider support
- Open GitHub issue

---

**Happy deploying!** 🚀
