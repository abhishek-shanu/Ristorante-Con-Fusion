package routes

import (
	handlers "resturant/api/handlers/menu"

	"github.com/gin-gonic/gin"
)

// All the endpoints related to menu are mentioned here
func Menu(router *gin.Engine) {
	menu := router.Group("/menu")
	{
		//get the list of all items available in menu
		menu.GET("", handlers.Menu)
		//get the details of any particular item
		menu.GET("/:itemID", handlers.Item)
	}
}
