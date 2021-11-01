package library

import (
	"resturant/api/models"

	"github.com/gin-gonic/gin"
)

func BuildResponse(c *gin.Context, response models.Response) {
	res := make(map[string]interface{})
	res["status"] = response.Status

	if !response.Status {
		res["message"] = response.Message
	} else {
		res["payload"] = response.PayLoad
	}

	c.JSON(response.StatusCode, res)
}
