# HTTP Status Code 101 – Switching Protocols

## Definition

HTTP status code **101** means:

> **Switching Protocols**

It indicates that the server is agreeing to switch from one protocol to another as requested by the client.

---

# How It Works

The client sends a request asking the server to upgrade the connection protocol.

Example request:

```http
Upgrade: websocket
Connection: Upgrade
```

If the server accepts the upgrade, it responds with:

```http
HTTP/1.1 101 Switching Protocols
Upgrade: websocket
Connection: Upgrade
```

After this response, communication no longer uses normal HTTP.

---

# Common Use Cases

* WebSockets
* HTTP/2 upgrades
* Protocol switching

---

# Simple Explanation

Client says:

> “Let’s switch from HTTP to WebSocket.”

Server replies:

> “Okay.”

That successful switch is represented by:

```http
101 Switching Protocols
```

---

# Important Points

* 101 is **not an error**
* It belongs to the **1xx Informational** category
* Mostly used in real-time applications like:

  * Chat apps
  * Live notifications
  * Multiplayer games

---

# Example in Real Life

When using a chat application:

1. Browser connects using HTTP
2. Requests upgrade to WebSocket
3. Server responds with **101 Switching Protocols**
4. Real-time communication starts
