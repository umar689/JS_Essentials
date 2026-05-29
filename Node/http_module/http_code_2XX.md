# HTTP Status Codes – 200, 201, 202, 203

# 200 OK

## Meaning

Request successful ho gayi aur server ne proper response bhej diya.

## Example

```http id="k7sn2m"
HTTP/1.1 200 OK
```

## Common Use Cases

* Website successfully load hui
* API data successfully mila
* Login successful

## Simple Explanation

Client:

> “Mujhe data do.”

Server:

> “Ye lo data, sab successful hai.”

---

# 201 Created

## Meaning

Request successful hui aur server ne **new resource create** kar diya.

## Example

```http id="79m3ke"
HTTP/1.1 201 Created
```

## Common Use Cases

* New user registration
* Database me new item add hona
* File upload hona

## Simple Explanation

Client:

> “Naya user banao.”

Server:

> “User create ho gaya.”

---

# 202 Accepted

## Meaning

Server ne request accept kar li, but processing abhi complete nahi hui.

## Example

```http id="z8r4fp"
HTTP/1.1 202 Accepted
```

## Common Use Cases

* Background processing
* Large file conversion
* Email sending queue
* Long-running tasks

## Simple Explanation

Client:

> “Ye kaam kar do.”

Server:

> “Request mil gayi, kaam chal raha hai.”

---

# 203 Non-Authoritative Information

## Meaning

Response successful hai, but information original server se directly nahi aayi.

Ye usually proxy/cache server modify karke bhejte hain.

## Example

```http id="a9v1tw"
HTTP/1.1 203 Non-Authoritative Information
```

## Common Use Cases

* Proxy servers
* Cached responses
* Modified metadata

## Simple Explanation

Client:

> “Data do.”

Proxy Server:

> “Data ye raha, but thoda modified/cached version hai.”

---

# Quick Summary Table

| Code | Name                          | Meaning                                |
| ---- | ----------------------------- | -------------------------------------- |
| 200  | OK                            | Request successful                     |
| 201  | Created                       | New resource create ho gaya            |
| 202  | Accepted                      | Request accept hui, processing pending |
| 203  | Non-Authoritative Information | Modified/cached response               |

---

# Easy Trick to Remember

* **200** → Sab done ✅
* **201** → Kuch naya create hua 🆕
* **202** → Kaam queue me hai ⏳
* **203** → Data original source se exact nahi 📦
