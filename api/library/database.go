package library

import (
	"context"
	"encoding/json"
	"io/ioutil"
	"log"
	"os"
	"resturant/api/database"
	"resturant/api/models"

	"github.com/go-pg/pg/v10"
	"github.com/go-pg/pg/v10/orm"
)

// Returns a database configuration
func GetDBConfig() (dbConfig models.DBConfig, err error) {

	var (
		configFile     *os.File
		configFileByte []byte
		config         models.Config
	)

	if configFile, err = os.Open(CONFIG_FILE); err != nil {
		return
	}

	if configFileByte, err = ioutil.ReadAll(configFile); err != nil {
		return
	}

	json.Unmarshal(configFileByte, &config)
	dbConfig = config.DBConfig
	return
}

// Returns a new database instance
func GetDB() (db *pg.DB, err error) {

	var (
		config models.DBConfig
	)

	if config, err = GetDBConfig(); err != nil {
		log.Println("DB connection failed.")
		log.Println(err)
		return
	}

	db = pg.Connect(&pg.Options{
		Addr:     config.Addr,
		User:     config.User,
		Password: config.Password,
		Database: config.Database,
	})
	log.Println("DB connection Successful.")

	return
}

func BuildDatabase() (err error) {

	var (
		db *pg.DB
	)

	if db, err = GetDB(); err != nil {
		return
	}
	defer db.Close()

	//check if connection is established or not
	ctx := context.Background()
	if err = db.Ping(ctx); err != nil {
		log.Println("DB connection failed")
	} else {
		log.Println("Connection successful")
	}

	err = db.Model(&database.Comments{}).CreateTable(&orm.CreateTableOptions{
		IfNotExists: true,
	})

	return
}
