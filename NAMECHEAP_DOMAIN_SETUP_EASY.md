# Namecheap DNS Setup for cosmictoilet.xyz

## Current Problem:
You have conflicting DNS records. Need to clean up and point to Vercel properly.

## EASY FIX - Keep Namecheap DNS (Recommended):

### Step 1: DELETE These Records in Namecheap:
1. **URL Redirect Record** (@) → DELETE
2. **A Record** (@ → 76.76.21.21) → DELETE

### Step 2: ADD These Records in Namecheap:

**For Root Domain (cosmictoilet.xyz):**
- Type: **A Record**
- Host: **@**
- Value: **76.76.21.21**
- TTL: **Automatic**

**For WWW (www.cosmictoilet.xyz):**
- Type: **CNAME Record**
- Host: **www**
- Value: **cname.vercel-dns.com**
- TTL: **Automatic**

### Step 3: Keep Your TXT Record:
Don't touch the TXT SPF record - leave it as is.

## Final Namecheap DNS Should Look Like:
```
A Record       @      76.76.21.21                      Automatic
CNAME Record   www    cname.vercel-dns.com             Automatic
TXT Record     @      v=spf1 include:...               Automatic
```

## Wait Time:
DNS changes take 5-30 minutes to propagate.

## Verify:
After 10 minutes, visit:
- https://cosmictoilet.xyz
- https://www.cosmictoilet.xyz

Both should show your Vercel site!

---

## Alternative: Use Vercel Nameservers (More Complex):
If the above doesn't work, you can switch to Vercel nameservers:
1. In Namecheap → Domain List → Manage → Nameservers
2. Select "Custom DNS"
3. Enter:
   - ns1.vercel-dns.com
   - ns2.vercel-dns.com
4. Save

But the first option is easier!
