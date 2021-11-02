package library

import (
	"encoding/json"
	"io/ioutil"
	"log"
	"net/http"
	"os"
	"resturant/api/models"

	"github.com/gin-gonic/gin"
)

func GetListeningPort() (portAddr string, err error) {
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
	portAddr = config.ServerConfig.Host + config.ServerConfig.Port
	return
}

func BuildResponse(c *gin.Context, payload interface{}, message string, err error) {

	var (
		statusCode int
	)
	res := make(map[string]interface{})
	if err != nil {
		log.Println(err)
		res["status"] = false
		if err.Error() == "pg: no rows in result set" {
			statusCode = http.StatusNotFound
			res["message"] = message
		} else {
			statusCode = http.StatusInternalServerError
			res["message"] = "Error"
		}
	} else {
		res["status"] = true
		res["payload"] = payload
		statusCode = http.StatusOK
	}

	c.JSON(statusCode, res)
}
