package routes

import (
	handlers "resturant/api/handlers/comment"

	"github.com/gin-gonic/gin"
)

// All the endpoints related to Comment are mentioned here
func Comment(router *gin.Engine) {
	comment := router.Group("/comment")
	{
		//get the list of all comments on a item
		comment.GET("/:itemID", handlers.Comment)
		//create a new comment
		comment.POST("/create", handlers.CreateComment)
	}
}
