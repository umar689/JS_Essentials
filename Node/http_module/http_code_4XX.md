# HTTP Status Codes – 400, 401, 403, 404

# 400 Bad Request

## Meaning

Server ko request samajh nahi aayi because request galat format me thi.

## Example

```http id="w2f7lp"
HTTP/1.1 400 Bad Request
```

## Common Causes

* Invalid JSON
* Missing fields
* Wrong syntax
* Invalid parameters

## Simple Explanation

Client:

> “Ye request lo.”

Server:

> “Request hi galat hai.”

---

# 401 Unauthorized

## Meaning

Authentication required hai ya credentials invalid hain.

User properly login/authenticated nahi hai.

## Example

```http id="v7k9ra"
HTTP/1.1 401 Unauthorized
```

## Common Causes

* Invalid token
* Missing token
* Wrong username/password

## Simple Explanation

Client:

> “Mujhe access do.”

Server:

> “Pehle login karo.”

---

# 403 Forbidden

## Meaning

Server request samajh gaya, user authenticated bhi ho sakta hai, but access allowed nahi hai.

## Example

```http id="r4n8ze"
HTTP/1.1 403 Forbidden
```

## Common Causes

* No permission
* Admin-only route
* Blocked access

## Simple Explanation

Client:

> “Mujhe ye page chahiye.”

Server:

> “Tumhe permission nahi hai.”

---

# 404 Not Found

## Meaning

Requested resource/server route exist hi nahi karta.

## Example

```http id="m3q1yt"
HTTP/1.1 404 Not Found
```

## Common Causes

* Wrong URL
* Deleted page
* Incorrect route

## Simple Explanation

Client:

> “Ye page kholo.”

Server:

> “Aisa page exist hi nahi karta.”

---

# Quick Summary Table

| Code | Name         | Meaning                       |
| ---- | ------------ | ----------------------------- |
| 400  | Bad Request  | Request galat hai             |
| 401  | Unauthorized | Login/authentication required |
| 403  | Forbidden    | Permission denied             |
| 404  | Not Found    | Resource nahi mili            |

---

# Easy Trick to Remember

* **400** → Request hi kharab ❌
* **401** → Login karo 🔐
* **403** → Login ho but permission nahi 🚫
* **404** → Page mila hi nahi 🔍

---

# 401 vs 403 Difference

| Code | Problem                                 |
| ---- | --------------------------------------- |
| 401  | User authenticated nahi hai             |
| 403  | User authenticated hai but allowed nahi |

## Example

### 401

Tumne login hi nahi kiya.

### 403

Tum login ho, but admin panel access allowed nahi.
