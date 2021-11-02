package routes

import (
	handlers "resturant/api/handlers/feedback"

	"github.com/gin-gonic/gin"
)

// All the endpoints related to feedback are mentioned here
func Feedback(router *gin.Engine) {
	feedback := router.Group("/feedback")
	{
		//create a new feedback
		feedback.POST("/", handlers.CreateFeedback)
	}
}
