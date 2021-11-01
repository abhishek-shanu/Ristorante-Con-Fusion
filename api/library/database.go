package library

import (
	"encoding/json"
	"io/ioutil"
	"log"
	"os"
	"resturant/api/models"

	"github.com/go-pg/pg/v10"
)

// Returns a database configuration
func GetDBConfig() (dbConfig models.DBConfig, err error) {

	var (
		configFile     *os.File
		configFileByte []byte
		config         models.Config
	)

	configFilePath := "D:/Work/Ristorante-Con-Fusion/api/config.json"
	if configFile, err = os.Open(configFilePath); err != nil {
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
