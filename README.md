
## Deployment

- design database
- config docker-compose.yml
- run command

To deploy this project run

```bash
  sequelize-auto -o "./models" -d cozy-db -h localhost -u root -p 5432 -x root -e postgres
```

