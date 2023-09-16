# NestJS + Nuxt Template
**Also, template with:**
 - Typeorm
 - Migrations
 - TailwindCSS

## Set up
1. Clone repository
2. At [`backend/`](/backend):
   ```shell
   yarn                  # install deps
   yarn typeorm:migrate  # generate && run migration
   yarn start:dev        # run in dev mode
   yarn build            # build production 
   ```
3. At [`frontend/`](/frontend):
   ```shell
   yarn                  # install deps
   yarn dev              # run in dev mode
   yarn build            # build production 
   ```
## Usage
### Structure
(ignored some files)
```
.
├── backend
│   ├── README.md
│   ├── migrations
│   │   └── ...
│   ├── src
│   │   ├── ...
│   │   └── user
│   │       ├── user.controller.ts
│   │       ├── user.entity.ts
│   │       ├── user.module.ts
│   │       └── user.service.ts
│   ├── ...
│   ├── .env
│   ├── typeorm.config.ts
│   └── yarn.lock
├── frontend
│   ├── pages
│   │   └── ...
│   ├── public
│   │   └── ...
│   ├── server
│   │   └── ...
│   ├── ...
│   ├── App.vue
│   ├── nuxt.config.ts
│   ├── README.md
│   └── yarn.lock
├── .gitignore
└── README.md
    
```

### `.env` example
```dotenv
PG_HOST="127.0.0.1"
PG_PORT="5432"
PG_USERNAME="postgres"
PG_PASSWORD=""
PG_DATABASE="testdb"
```
