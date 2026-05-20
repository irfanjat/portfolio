# Fix Contact Form (2 minutes)

FormSubmit often fails until you **activate by email**. **Web3Forms** is recommended — works immediately on GitHub Pages.

---

## Option A: Web3Forms (recommended)

1. Go to **https://web3forms.com**
2. Enter **irfanali.cloud@gmail.com**
3. Click **Create Access Key** — check your inbox
4. Copy the **Access Key**

5. Open `src/data/site.ts` and paste your key:

```ts
export const contactForm = {
  web3formsAccessKey: 'paste-your-key-here',
  successRedirect: 'https://irfanjat.github.io/portfolio/?sent=1#contact',
}
```

6. Redeploy:

```bash
git add .
git commit -m "Enable Web3Forms contact form"
git push origin main
```

7. Test the form on https://irfanjat.github.io/portfolio/

---

## Option B: FormSubmit (fallback — already in code)

If `web3formsAccessKey` is empty, the form uses **FormSubmit** (browser POST, no CORS).

1. Submit the form once on your live site
2. Check **irfanali.cloud@gmail.com** for **"FormSubmit activation"**
3. Click the activation link
4. Submit again — emails should arrive

---

## Always works: direct email

The **Email directly** button uses `mailto:irfanali.cloud@gmail.com` — no setup required.
