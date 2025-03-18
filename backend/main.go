package main

import (
  "github.com/danielwidhiarto/farebook-backend/database"
)

func main() {
  database.ConnectDB()
  // Nanti lanjut: start GraphQL server, router, dll.
}
