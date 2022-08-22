
## Deployment

- design database
- config docker-compose.yml
- run command

To deploy this project run

```bash
  sequelize-auto -o "./models" -d rubix_banner -h db-cozy.clxgylzgj9tx.ap-southeast-1.rds.amazonaws.com -u supercozy -p 5432 -x cozy_db_123 -e postgres --noAlias
```

