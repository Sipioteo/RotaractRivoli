# Rotaract Club Rivoli - Web Project

This project consists of a React frontend (Vite) and a Strapi backend (Node.js).

## Environment Variables

### Frontend (`./frontend`)

| Variable | Description | Example |
| :--- | :--- | :--- |
| `VITE_API_URL` | The URL of the backend API. | `http://localhost:1337` |

### Backend (`./backend`)

| Variable | Description | Default / Example |
| :--- | :--- | :--- |
| `DATABASE_CLIENT` | Database client to use. | `sqlite` |
| `DATABASE_FILENAME` | Path to the SQLite database file. | `.tmp/data.db` |
| `JWT_SECRET` | Secret used to sign JWT tokens for authentication. | `supersecretkey` |
| `API_TOKEN_SALT` | Salt used for API tokens. | `saltysalt` |
| `APP_KEYS` | Comma-separated keys for session/cookie signing. | `key1,key2,key3,key4` |
| `ADMIN_JWT_SECRET` | Secret used for Admin panel JWT tokens. | `adminsecret` |
| `TRANSFER_TOKEN_SALT` | Salt for transfer tokens. | `transfersalt` |
| `STRIPE_SK` | Stripe Secret Key (available in Stripe Dashboard). | `sk_test_...` |
| `STRIPE_PK` | Stripe Publishable Key (available in Stripe Dashboard). | `pk_test_...` |

## Getting Started

### Prerequisites

- Docker and Docker Compose

### Installation

1. Clone the repository.
2. If you want to use Stripe, replace the placeholder `STRIPE_SK` and `STRIPE_PK` in `docker-compose.yml` with your actual test keys.
3. Run the following command from the root directory:

```bash
docker compose up -d --build
```

The frontend will be available at `http://localhost:5173` and the Strapi admin panel at `http://localhost:1337/admin`.

## Indexing Policy

This is a test website. It has been configured with `noindex` and `nofollow` meta tags, and a `robots.txt` that disallows all crawlers to prevent it from appearing in search engine results.
