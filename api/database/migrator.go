package database

import (
	"context"
	"log"

	"github.com/go-pg/pg/v10"
	"github.com/go-pg/pg/v10/orm"
)

func Creat_db() (err error) {
	db := pg.Connect(&pg.Options{
		Addr:     ":5432",
		User:     "postgres",
		Password: "123456789",
		Database: "resturant",
	})
	defer db.Close()
	ctx := context.Background()
	if err = db.Ping(ctx); err != nil {
		log.Println("DB connection failed")
	} else {
		log.Println("Connection successful")
	}

	err = db.Model(&ItemImages{}).CreateTable(&orm.CreateTableOptions{
		IfNotExists: true,
	})
	return
}
