package database

import (
  "context"
  "fmt"
  "github.com/jackc/pgx/v5/pgxpool"
  "log"
  "time"
)

var DB *pgxpool.Pool

func ConnectDB() {
  dbUrl := "postgres://postgres:postgres@localhost:5432/farebook_db"
  ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
  defer cancel()

  pool, err := pgxpool.New(ctx, dbUrl)
  if err != nil {
    log.Fatal("Failed to create pool: ", err)
  }

  err = pool.Ping(ctx)
  if err != nil {
    log.Fatal("Database ping failed: ", err)
  }

  fmt.Println("Connected to PostgreSQL 🚀")
  DB = pool
}
